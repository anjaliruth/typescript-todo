
// import ToDoItem from './ToDoItem'

import { Draggable } from "react-beautiful-dnd";
import { ToDo } from "../App";
export type ToDoSingleItemProps = {
  toDo: ToDo;
  index: number;
  toggleDone: (inputField: string) => void;
  deleteFromList: (id: string) => void;
  editToDo: (id: string) => void;
};

export default function ToDoSingleItem({ toDo, index, toggleDone, deleteFromList, editToDo }: ToDoSingleItemProps) {
  
  return (
        <Draggable draggableId={toDo.id} index={index}>
          {(provided)=> (
 <div key={toDo.id} className="todo-item" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
  <div className="checkbox-and-task">
 {toDo.done ? 
 <input type="checkbox" onChange={()=> toggleDone(toDo.id)} checked/> :
 <input type="checkbox" onChange={()=> toggleDone(toDo.id)}/>
 }
 <p className="task">{toDo.task}</p>
 </div>
 <div className="todo-item-buttons">
   <button onClick={() => editToDo(toDo.id)}>Edit</button>
   <button onClick={() => deleteFromList(toDo.id)}>Delete</button>
 </div>
</div>
          )}
       
        </Draggable>
      )}


