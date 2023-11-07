import { useState } from 'react'

import "./App.css";
import { v4 as uuidv4 } from 'uuid';


import InputArea from "./components/InputArea";
import ToDoListContainer from './components/ToDoListContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import {DragDropContext, DropResult} from "react-beautiful-dnd"

export type ToDo = {
  id: string,
task: string, 
done: boolean
}
function App() {
  const [toDoItems, setToDoItems] = useState<ToDo[]>([])
  const [inputField, setInputField] = useState<string>("")
  const unDoneTasks = toDoItems.filter((toDo) => !toDo.done);
  const doneTasks = toDoItems.filter((toDo) => toDo.done);

  function addToList(inputField: string) {
    setToDoItems([...toDoItems, { id: uuidv4(), task: inputField, done: false}])
  }

  function editToDo(id: string) {
    // put task as value of input
    toDoItems.find((toDoItem) => {
      if (toDoItem.id === id) {
        setInputField(toDoItem.task)
      }
      return toDoItem
    }
    )
    // remove todo from toDoItems array
    deleteFromList(id)
  }

  function deleteFromList(id: string) {
    const filteredToDoList = toDoItems.filter((toDoItem) => 
      toDoItem.id !== id
    )
    setToDoItems(filteredToDoList)
  }


  function toggleDone(id: string){
    const updatedToDoList = toDoItems.map((toDoItem)=> {
      if (toDoItem.id === id) {
        return {...toDoItem, done: !toDoItem.done}
      }
      return toDoItem
  })
    setToDoItems(updatedToDoList)
  }

  const onDragEnd = (result: DropResult) => {
    const {destination, source} = result

   if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;
  
    let add, active = unDoneTasks, complete = doneTasks

    if (source.droppableId === "todo-container-undone") {
      add = active[source.index]
      active.splice(source.index, 1)
    } else {
      add = complete[source.index]
      complete.splice(source.index, 1)
    }

    if (source.droppableId === "todo-container-undone") {
      active.splice(destination.index, 0, add)
    } else {
      complete.splice(destination.index, 0, add)
    }
    toggleDone(add.id)
  }

  return (
    
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="app"> 
        <Header/>
        <InputArea addToList={addToList} inputField={inputField} setInputField={setInputField}/>
        <ToDoListContainer unDoneTasks={unDoneTasks} doneTasks={doneTasks} toggleDone={toggleDone} deleteFromList={deleteFromList} editToDo={editToDo}/>
        <Footer/>
      </div>
    </DragDropContext>
  );
}

export default App;
