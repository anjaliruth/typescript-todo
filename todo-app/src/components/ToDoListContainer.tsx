import React from 'react'
import ToDoItemsArea from './ToDoItemsArea'
import { ToDo } from '../App'

export type ToDoListContainerProps = {
    toDoItems: ToDo[]
}

export default function ToDoListContainer({toDoItems}: ToDoListContainerProps) {
    // console.log(toDoItems, 'in container')
  return (
    <>
        <div>
            <h1>To Do List</h1>
            <ToDoItemsArea toDoItems={toDoItems}/>
        </div>
        <div>
            <h1>Done!</h1>
            <ToDoItemsArea toDoItems={toDoItems}/>
        </div>
    </>
  )
}
