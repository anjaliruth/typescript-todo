import React from "react";
import ToDoSingleItem from "./ToDoSingleItem";
import { ToDo } from "../App";
import { Droppable } from "react-beautiful-dnd";

export type ToDoListContainerProps = {
  toDoItems: ToDo[];
  toggleDone: (inputField: string) => void;
  deleteFromList: (id: string) => void;
  editToDo: (id: string) => void;
};

export default function ToDoListContainer({
  toDoItems,
  toggleDone,
  deleteFromList,
  editToDo,
}: ToDoListContainerProps) {
  const unDoneTasks = toDoItems.filter((toDo) => !toDo.done);
  const doneTasks = toDoItems.filter((toDo) => toDo.done);
  return (
    <>
      <Droppable droppableId="to-do-container-undone">
        {(provided) => (
          <div
            className="todo-container-undone"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h1>To Do List</h1>
            {unDoneTasks.map((toDo, i) => (
              <ToDoSingleItem
                toDo={toDo}
                toggleDone={toggleDone}
                deleteFromList={deleteFromList}
                editToDo={editToDo}
                index={i}
              />
            ))}
          </div>
        )}
      </Droppable>

      <Droppable droppableId="to-do-container-done">
        {(provided) => (
          <div
            className="todo-container-done"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h1>Done!</h1>
            {doneTasks.map((toDo, i) => (
              <ToDoSingleItem
                toDo={toDo}
                toggleDone={toggleDone}
                deleteFromList={deleteFromList}
                editToDo={editToDo}
                index={i}
              />
            ))}
          </div>
        )}
      </Droppable>
    </>
  );
}
