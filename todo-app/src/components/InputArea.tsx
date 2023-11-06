import { useState } from 'react'

type inputAreaProps= {
    addToList: (inputField:string) => void
}

export default function InputArea({addToList}:inputAreaProps) {
const [inputField, setInputField] = useState("")

function onSubmitToDo(){
    if (!inputField) {
        return;
    }

    addToList(inputField)
    setInputField("")
}
  return (
    <div>
   <input value={inputField} placeholder="add to-do..." type="text" onChange={(e)=> setInputField(e.target.value)}/>
   <button onClick={()=>onSubmitToDo()} type="submit">Submit</button>
    </div>
  )
}
