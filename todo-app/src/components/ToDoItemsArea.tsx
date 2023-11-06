
// import ToDoItem from './ToDoItem'
import { ToDoListContainerProps } from "./ToDoListContainer";

export default function ToDoItemsArea({ toDoItems, markAsDone }: ToDoListContainerProps) {
  console.log(toDoItems, "in area");
  return (
    <>
      {toDoItems.map((toDo, i) => (
        <div key={i} className="todo-item">
          <input type="checkbox" onChange={()=> markAsDone(toDo.id)}/>
          <p>{toDo.task}</p>
          <div className="todo-item-buttons">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
        // <ToDoItem toDoItems={toDoItems}/>
      ))}
    </>
  );
}
