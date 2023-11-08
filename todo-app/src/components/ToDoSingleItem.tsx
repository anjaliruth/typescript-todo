import { Draggable } from "react-beautiful-dnd";
import { ToDo } from "../App";
import binPhoto from "../assets/icons8-bin-69.png";
import pencilPhoto from "../assets/icons8-edit-69.png";

export type ToDoSingleItemProps = {
  toDo: ToDo;
  index: number;
  toggleDone: (inputField: string) => void;
  deleteFromList: (id: string) => void;
  editToDo: (id: string) => void;
};

export default function ToDoSingleItem({
  toDo,
  index,
  toggleDone,
  deleteFromList,
  editToDo,
}: ToDoSingleItemProps) {
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
          <div className="checkbox-and-task">
            {toDo.done ? (
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  onChange={() => toggleDone(toDo.id)}
                  checked
                />
                <p className="task-done">{toDo.task}</p>
              </div>
            ) : (
              <div className="checkbox-container">
                <input type="checkbox" onChange={() => toggleDone(toDo.id)} />
                <p className="task">{toDo.task}</p>
              </div>
            )}
          </div>
          <div className="todo-item-buttons">
            <button onClick={() => editToDo(toDo.id)}>
              <img className="edit button" src={pencilPhoto} />
            </button>
            <button onClick={() => deleteFromList(toDo.id)}>
              <img className="delete button" src={binPhoto} />
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
}
