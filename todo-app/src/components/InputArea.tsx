import tickIcon from "../assets/icons8-tick-69.png";

type inputAreaProps = {
  addToList: (inputField: string) => void;
  inputField: string;
  setInputField: React.Dispatch<React.SetStateAction<string>>;
};

export default function InputArea({
  addToList,
  inputField,
  setInputField,
}: inputAreaProps) {
  function onSubmitToDo() {
    if (!inputField) {
      return;
    }

    addToList(inputField);
    setInputField("");
  }
  return (
    <div className="input-area">
      <input
        className="input-field"
        value={inputField}
        placeholder="add to-do..."
        type="text"
        onChange={(e) => setInputField(e.target.value)}
      />
      <button onClick={() => onSubmitToDo()} type="submit">
        <img className="submit button" src={tickIcon} />
      </button>
    </div>
  );
}
