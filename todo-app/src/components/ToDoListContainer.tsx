import React from "react";
import ToDoSingleItem from "./ToDoSingleItem";
import { ToDo } from "../App";
import { Droppable } from "react-beautiful-dnd";

export type ToDoListContainerProps = {
  toggleDone: (inputField: string) => void;
  deleteFromList: (id: string) => void;
  addToList: (inputField: string) => void;
  unDoneTasks: ToDo[];
  doneTasks: ToDo[];
  setToDoItems: React.Dispatch<React.SetStateAction<ToDo[]>>;
  toDoItems: ToDo[]
};

export default function ToDoListContainer({
  toggleDone,
  deleteFromList,
  addToList,
  unDoneTasks,
  doneTasks,

  setToDoItems,
  toDoItems
}: ToDoListContainerProps) {
  return (
    <div className="task-container">
      <Droppable droppableId="todo-container-undone">
        {(provided) => (
          <div
            className="todo-container undone"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h1 className="task-section-title">To Do List</h1>
            <div className="todo-list">
              {unDoneTasks.map((toDo, i) => (
                <ToDoSingleItem
                  key={toDo.id}
                  toDo={toDo}
                  toggleDone={toggleDone}
                  deleteFromList={deleteFromList}
                  setToDoItems={setToDoItems}
                  toDoItems={toDoItems}
                  addToList={addToList}
                  index={i}
                />
              ))}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>

      <Droppable droppableId="todo-container-done">
        {(provided) => (
          <div
            className="todo-container done"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h1 className="task-section-title">Done!</h1>
            <div className="todo-list">
              {doneTasks.map((toDo, i) => (
                <ToDoSingleItem
                  key={toDo.id}
                  toDo={toDo}
                  toggleDone={toggleDone}
                  deleteFromList={deleteFromList}
                  setToDoItems={setToDoItems}
                  toDoItems={toDoItems}
                  addToList={addToList}
                  index={i}
                />
              ))}

              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    </div>
  );
}
