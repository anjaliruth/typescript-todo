import { useState } from 'react'

import "./App.css";
import { v4 as uuidv4 } from 'uuid';


import InputArea from "./components/InputArea";
import ToDoListContainer from './components/ToDoListContainer';
import Header from './components/Header';
import Footer from './components/Footer';

export type ToDo = {
  id: string,
task: string, 
done: boolean
}
function App() {
  const [toDoItems, setToDoItems] = useState<ToDo[]>([])
  const [inputField, setInputField] = useState<string>("")

  function addToList(inputField: string) {
    setToDoItems([...toDoItems, { id: uuidv4(), task: inputField, done: false}])
  }

  function editToDo(id: string) {
    // put task as value of input
    toDoItems.find((toDoItem) => {
      if (toDoItem.id === id) {
        setInputField(toDoItem.task)
      }
      return toDoItem
    }
    )
    // remove todo from toDoItems array
    deleteFromList(id)
  }

  function deleteFromList(id: string) {
    const filteredToDoList = toDoItems.filter((toDoItem) => 
      toDoItem.id !== id
    )
    setToDoItems(filteredToDoList)
  }


  function toggleDone(id: string){
    const updatedToDoList = toDoItems.map((toDoItem)=> {
      if (toDoItem.id === id) {
        return {...toDoItem, done: !toDoItem.done}
      }
      return toDoItem
  })
    setToDoItems(updatedToDoList)
  }

  return (
    <>
      <div className=""> 
        <Header/>
        <InputArea addToList={addToList} inputField={inputField} setInputField={setInputField}/>
        <ToDoListContainer toDoItems={toDoItems} toggleDone={toggleDone} deleteFromList={deleteFromList} editToDo={editToDo}/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
