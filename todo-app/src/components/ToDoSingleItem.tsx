import { Draggable } from "react-beautiful-dnd";
import { useState } from "react";
import { ToDo } from "../App";
import binPhoto from "../assets/icons8-bin-69.png";
import pencilPhoto from "../assets/icons8-edit-69.png";
import tickPhoto from "../assets/icons8-tick-69.png";

export type ToDoSingleItemProps = {
  toDo: ToDo;
  index: number;
  toggleDone: (inputField: string) => void;
  deleteFromList: (id: string) => void;
  addToList: (inputField: string) => void;
  setToDoItems: React.Dispatch<React.SetStateAction<ToDo[]>>;
  toDoItems: ToDo[];
};

export default function ToDoSingleItem({
  toDo,
  index,
  toggleDone,
  deleteFromList,
  setToDoItems,
  toDoItems,
}: ToDoSingleItemProps) {
  const [editTodo, setEditTodo] = useState(toDo.task);
  const [edit, setEdit] = useState<boolean>(false);

  function handleEdit(e: React.FormEvent, id: string) {
    e.preventDefault();
    console.log("im editing");
    console.log(edit);
    setToDoItems(
      toDoItems.map((toDoItem) =>
        toDoItem.id === id
          ? { ...toDoItem, task: editTodo, done: false }
          : toDoItem
      )
    );
    setEdit(false);
  }

  console.log(edit);
  return (
    <Draggable draggableId={toDo.id} index={index}>
      {(provided) => (
        <div
          key={toDo.id}
          className="todo-item"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {toDo.done ? (
            <div className="todo-item-done">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  onChange={() => toggleDone(toDo.id)}
                  checked
                />
              </div>
              <div className="done-task-and-buttons">
                <s>{toDo.task}</s>
                <div className="todo-item-buttons">
                  <button
                    className="todo-button"
                    onClick={() => deleteFromList(toDo.id)}
                  >
                    <img className="delete button" src={binPhoto} />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="checkbox-container">
                <input type="checkbox" onChange={() => toggleDone(toDo.id)} />
              </div>
              <div className="edit-todo">
                <form
                  className="edit-todo-form"
                  onSubmit={(e) => handleEdit(e, toDo.id)}
                >
                  {edit ? (
                    <>
                      <input
                        className="edit-input"
                        onChange={(e) => setEditTodo(e.target.value)}
                        value={editTodo}
                      />
                      <div className="todo-item-buttons">
                        <button className="todo-button">
                          <img className="submit button" src={tickPhoto} />
                        </button>
                        <button
                          className="todo-button"
                          onClick={() => deleteFromList(toDo.id)}
                        >
                          <img className="delete button" src={binPhoto} />
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="task">{toDo.task}</p>
                      <div className="todo-item-buttons">
                        <button
                          className="todo-button"
                          onClick={(e) => {
                            if (!edit && !toDo.done) {
                              e.preventDefault();
                              setEdit(true);
                            }
                          }}
                        >
                          <img className="edit button" src={pencilPhoto} />
                        </button>
                        <button
                          className="todo-button"
                          onClick={() => deleteFromList(toDo.id)}
                        >
                          <img className="delete button" src={binPhoto} />
                        </button>
                      </div>
                    </>
                  )}
                </form>
              </div>
            </>
          )}
        </div>
      )}
    </Draggable>
  );
}
