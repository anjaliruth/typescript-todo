import { useState } from 'react'

import "./App.css";

import InputArea from "./components/InputArea";
import ToDoListContainer from './components/ToDoListContainer';
import Header from './components/Header';
import Footer from './components/Footer';

export type ToDo = {
task: string, 
done: boolean
}
function App() {
  const [toDoItems, setToDoItems] = useState<ToDo[]>([])
  // console.log(toDoItems)

  function addToList(inputField: string) {
    setToDoItems([...toDoItems, {task: inputField, done: false}])

  }
  return (
    <>
      <div className=""> 
        <Header/>
        <InputArea addToList={addToList}/>
        <ToDoListContainer toDoItems={toDoItems}/>
        <Footer />
      </div>
    </>
  );
}

export default App;
