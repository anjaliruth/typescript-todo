import React from 'react'
// import ToDoItem from './ToDoItem'
import { ToDoListContainerProps } from './ToDoListContainer'

export default function ToDoItemsArea({toDoItems}: ToDoListContainerProps) {
    console.log(toDoItems, 'in area')
  return (
    <>
    Hello
    {toDoItems.map((toDo)=> (
        <>
        <p>{toDo.task}</p>
        <p>Anything?</p>
        </>
        // <ToDoItem toDoItems={toDoItems}/>
    ))}
    </>
  )
}
