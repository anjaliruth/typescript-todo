import { Draggable } from "react-beautiful-dnd";
import { ToDo } from "../App";
import binPhoto from "../assets/icons8-bin-69.png";
import pencilPhoto from "../assets/icons8-edit-69.png";
import tickPhoto from "../assets/icons8-tick-69.png";

export type ToDoSingleItemProps = {
  toDo: ToDo;
  index: number;
  toggleDone: (inputField: string) => void;
  deleteFromList: (id: string) => void;
  editToDo: (id: string) => void;
  addToList: (inputField: string) => void;
  edit: boolean;
  inputField: string;
  setInputField: React.Dispatch<React.SetStateAction<string>>;
};

export default function ToDoSingleItem({
  toDo,
  index,
  toggleDone,
  deleteFromList,
  editToDo,
  addToList,
  edit,
  inputField,
  setInputField,
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
                {edit ? (
                  <>
                    <input
                      onChange={(e) => setInputField(e.target.value)}
                      defaultValue={toDo.task}
                    />
                    <div className="todo-item-buttons">
                      <button onClick={() => addToList(inputField)}>
                        <img className="submit button" src={tickPhoto} />
                      </button>
                      <button onClick={() => deleteFromList(toDo.id)}>
                        <img className="delete button" src={binPhoto} />
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="task-done">{toDo.task}</p>
                    <div className="todo-item-buttons">
                      <button onClick={() => editToDo(toDo.id)}>
                        <img className="edit button" src={pencilPhoto} />
                      </button>
                      <button onClick={() => deleteFromList(toDo.id)}>
                        <img className="delete button" src={binPhoto} />
                      </button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="checkbox-container">
                <input type="checkbox" onChange={() => toggleDone(toDo.id)} />
                {edit ? (
                  <>
                    <input
                      onChange={(e) => setInputField(e.target.value)}
                      defaultValue={toDo.task}
                    />
                    <div className="todo-item-buttons">
                      <button onClick={() => addToList(inputField)}>
                        <img className="submit button" src={tickPhoto} />
                      </button>
                      <button onClick={() => deleteFromList(toDo.id)}>
                        <img className="delete button" src={binPhoto} />
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="task">{toDo.task}</p>
                    <div className="todo-item-buttons">
                      <button onClick={() => editToDo(toDo.id)}>
                        <img className="edit button" src={pencilPhoto} />
                      </button>
                      <button onClick={() => deleteFromList(toDo.id)}>
                        <img className="delete button" src={binPhoto} />
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </Draggable>
  );
}
