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
  // console.log(toDoItems)

  function addToList(inputField: string) {
    setToDoItems([...toDoItems, { id: uuidv4(), task: inputField, done: false}])
  }


  function markAsDone(id: string){
    const updatedToDoList = toDoItems.map((toDoItem)=> {
      if (toDoItem.id === id) {
        return {...toDoItem, done: true}
      }
      return toDoItem
  })
    setToDoItems(updatedToDoList)
  }
  return (
    <>
      <div className=""> 
        <Header/>
        <InputArea addToList={addToList}/>
        <ToDoListContainer toDoItems={toDoItems} markAsDone={markAsDone}/>
        <Footer />
      </div>
    </>
  );
}

export default App;
