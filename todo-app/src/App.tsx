import { useState } from 'react'

import "./App.css";

import InputArea from "./components/InputArea";
type ToDoList = {
task: string, 
done: boolean
}
function App() {
  const [toDoItems, setToDoItems] = useState<ToDoList[]>([])
  console.log(toDoItems)

  function addToList(inputField: string) {
    setToDoItems([...toDoItems, {task: inputField, done: false}])

  }
  return (
    <>
      <div className=""> 
   <InputArea addToList={addToList}/>
      </div>
    </>
  );
}

export default App;
