import tickPhoto from "../assets/icons8-tick-69.png";

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
  function onSubmitToDo(e: any) {
    e.preventDefault();
    if (!inputField) {
      return;
    }
    addToList(inputField);
    setInputField("");
  }
  return (
    <div className="input-area">
      <form
        id="input-area"
        className="input-area"
        onSubmit={(e) => onSubmitToDo(e)}
      >
        <input
          id="input-field"
          className="input-field"
          value={inputField}
          placeholder="add to-do..."
          type="text"
          onChange={(e) => setInputField(e.target.value)}
        />
        <button id="input-button">
          <img className="submit button" src={tickPhoto} />
        </button>
      </form>
    </div>
  );
}
