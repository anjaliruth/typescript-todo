import React from 'react'
import ToDoItemsArea from './ToDoItemsArea'
import { ToDo } from '../App'

export type ToDoListContainerProps = {
    toDoItems: ToDo[]
    toggleDone: (inputField:string) => void
    deleteFromList: (id: string) => void
    editToDo: (id: string) => void
}

export default function ToDoListContainer({toDoItems, toggleDone, deleteFromList, editToDo}: ToDoListContainerProps) {
    const unDoneTasks = toDoItems.filter((toDo)=> !toDo.done)
    const doneTasks = toDoItems.filter((toDo)=> toDo.done)
  return (
    <>
        <div>
            <h1>To Do List</h1>

            <ToDoItemsArea toDoItems={unDoneTasks} toggleDone={toggleDone} deleteFromList={deleteFromList} editToDo={editToDo}/>
        </div>
        <div>
            <h1>Done!</h1>
            <ToDoItemsArea toDoItems={doneTasks} toggleDone={toggleDone} deleteFromList={deleteFromList} editToDo={editToDo}/>
        </div>
    </>
  )
}
