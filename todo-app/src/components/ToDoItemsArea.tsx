
// import ToDoItem from './ToDoItem'
import { ToDoListContainerProps } from "./ToDoListContainer";

export default function ToDoItemsArea({ toDoItems, toggleDone, deleteFromList, editToDo }: ToDoListContainerProps) {
  
  return (
    <>
      {toDoItems.map((toDo) => (
        <div key={toDo.id} className="todo-item">
          {toDo.done ? 
          <input type="checkbox" onChange={()=> toggleDone(toDo.id)} checked/> :
          <input type="checkbox" onChange={()=> toggleDone(toDo.id)}/>
          }
          <p>{toDo.task}</p>
          <div className="todo-item-buttons">
            <button onClick={() => editToDo(toDo.id)}>Edit</button>
            <button onClick={() => deleteFromList(toDo.id)}>Delete</button>
          </div>
        </div>
        // <ToDoItem toDoItems={toDoItems}/>
      ))}
    </>
  );
}
