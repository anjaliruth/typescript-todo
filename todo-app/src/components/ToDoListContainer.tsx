import React from 'react'
import ToDoItemsArea from './ToDoItemsArea'
import { ToDo } from '../App'

export type ToDoListContainerProps = {
    toDoItems: ToDo[]
    markAsDone: (inputField:string) => void
}

export default function ToDoListContainer({toDoItems, markAsDone}: ToDoListContainerProps) {
    // console.log(toDoItems, 'in container')

    const unDoneTasks = toDoItems.filter((toDo)=> !toDo.done)
    const doneTasks = toDoItems.filter((toDo)=> toDo.done)
  return (
    <>
        <div>
            <h1>To Do List</h1>

            <ToDoItemsArea toDoItems={unDoneTasks} markAsDone={markAsDone}/>
        </div>
        <div>
            <h1>Done!</h1>
            <ToDoItemsArea toDoItems={doneTasks} markAsDone={markAsDone}/>
        </div>
    </>
  )
}
