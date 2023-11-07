import React from "react";
import ToDoSingleItem from "./ToDoSingleItem";
import { ToDo } from "../App";
import { Droppable } from "react-beautiful-dnd";

export type ToDoListContainerProps = {
  toggleDone: (inputField: string) => void;
  deleteFromList: (id: string) => void;
  editToDo: (id: string) => void;
  unDoneTasks: ToDo[],
  doneTasks: ToDo[]
};

export default function ToDoListContainer({
  toggleDone,
  deleteFromList,
  editToDo,
  unDoneTasks,
  doneTasks
}: ToDoListContainerProps) {

  return (
    <>
      <Droppable droppableId="todo-container-undone">
        {(provided) => (
          <div
            className="todo-container-undone"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h1>To Do List</h1>
            {unDoneTasks.map((toDo, i) => (
              <ToDoSingleItem
                key={toDo.id}
                toDo={toDo}
                toggleDone={toggleDone}
                deleteFromList={deleteFromList}
                editToDo={editToDo}
                index={i}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId="todo-container-done">
        {(provided) => (
          <div
            className="todo-container-done"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h1>Done!</h1>
            {doneTasks.map((toDo, i) => (
              <ToDoSingleItem
                key={toDo.id}
                toDo={toDo}
                toggleDone={toggleDone}
                deleteFromList={deleteFromList}
                editToDo={editToDo}
                index={i}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </>
  );
}
