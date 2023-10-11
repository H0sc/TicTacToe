import { useState } from "react";
import "./styles/styles.css";

function App() {
  const [player, setPlayer] = useState("");
  const [field, setField] = useState("")

  const fields = []
  for (let i = 0; i < 9; i++) {
    fields.push(<div key={crypto.randomUUID()}></div>)
  }

  return (
    <>
      <div className="players">
        <h1>select your symbol:</h1>
        <button value="0" onClick={(e) => setPlayer(e.target.value)}>
          O
        </button>
        <button value="X" onClick={(e) => setPlayer(e.target.value)}>
          X
        </button>
      </div>
      <div className="grid">
        {fields}
      </div>
    </>
  );
}

export default App;
