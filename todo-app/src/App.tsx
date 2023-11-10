import { useState, useEffect } from "react";

import "./App.css";
import { v4 as uuidv4 } from "uuid";

import InputArea from "./components/InputArea";
import ToDoListContainer from "./components/ToDoListContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

export type ToDo = {
  id: string;
  task: string;
  done: boolean;
};
function App() {
  const [toDoItems, setToDoItems] = useState<ToDo[]>([]);
  const [inputField, setInputField] = useState<string>("");
  const unDoneTasks = toDoItems.filter((toDo) => !toDo.done);
  const doneTasks = toDoItems.filter((toDo) => toDo.done);
  useEffect(() => {
 const storedTasks = JSON.parse(localStorage.getItem("tasks") || "");
    if (storedTasks) {
      try {
        setToDoItems(storedTasks);
       
      } catch (error) {
        console.error("Error parsing tasks from local storage");
      }
    }
  }, []);

  function addToList(inputField: string) {
    const newToDoItems =[
      ...toDoItems,
      { id: uuidv4(), task: inputField, done: false },
    ];
    setToDoItems(newToDoItems)
    localStorage.setItem("tasks", JSON.stringify(newToDoItems));
  }

  function deleteFromList(id: string) {
    if (window.confirm("Do you want to delete this task?")) {
      const filteredToDoList = toDoItems.filter(
        (toDoItem) => toDoItem.id !== id
      );
      setToDoItems(filteredToDoList);
      localStorage.setItem("tasks", JSON.stringify(filteredToDoList));
    }
  }

  //test
  function toggleDone(id: string) {
    const updatedToDoList = toDoItems.map((toDoItem) => {
      if (toDoItem.id === id) {
        return { ...toDoItem, done: !toDoItem.done };
      }
      return toDoItem;
    });
    setToDoItems(updatedToDoList);
    localStorage.setItem("tasks", JSON.stringify(updatedToDoList))
  }

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add;
    const active = unDoneTasks,
      complete = doneTasks;

    if (source.droppableId === "todo-container-undone") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if (source.droppableId === "todo-container-undone") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }
    toggleDone(add.id);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="app">
        <Header />
        <div className="main-area">
          <InputArea
            addToList={addToList}
            inputField={inputField}
            setInputField={setInputField}
          />
          <ToDoListContainer
            unDoneTasks={unDoneTasks}
            doneTasks={doneTasks}
            toggleDone={toggleDone}
            deleteFromList={deleteFromList}
            addToList={addToList}
            setToDoItems={setToDoItems}
            toDoItems={toDoItems}
          />
        </div>
        <Footer />
      </div>
    </DragDropContext>
  );
}

export default App;
