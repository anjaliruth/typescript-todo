

type inputAreaProps= {
    addToList: (inputField:string) => void
    inputField: string
    setInputField: React.Dispatch<React.SetStateAction<string>>
}

export default function InputArea({addToList, inputField, setInputField}:inputAreaProps) {


function onSubmitToDo(){
    if (!inputField) {
        return;
    }

    addToList(inputField)
    setInputField("")
}
  return (
    <div className="input-area">
   <input value={inputField} placeholder="add to-do..." type="text" onChange={(e)=> setInputField(e.target.value)}/>
   <button onClick={()=>onSubmitToDo()} type="submit">Submit</button>
    </div>
  )
}
