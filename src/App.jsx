import { useEffect, useState } from "react";
import "./styles/styles.css";

function App() {
  const [player, setPlayer] = useState("");
  const [fields, setFields] = useState()

  const handleClick = (e) => {
    e.target.innerText = player
    if (e.target.innerText !== "") return
    if (player === "X") {setPlayer("O")}
    else {setPlayer("X")}
  }

  return (
    <>
      <div className="players">
        <h1>select your symbol:</h1>
        <button value="O" onClick={(e) => setPlayer(e.target.value)}>
          O
        </button>
        <button value="X" onClick={(e) => setPlayer(e.target.value)}>
          X
        </button>
      </div>
      <div className="grid">
        <div onClick={e => handleClick(e)}></div>
        <div onClick={e => handleClick(e)}></div>
        <div onClick={e => handleClick(e)}></div>
        <div onClick={e => handleClick(e)}></div>
        <div onClick={e => handleClick(e)}></div>
        <div onClick={e => handleClick(e)}></div>
        <div onClick={e => handleClick(e)}></div>
        <div onClick={e => handleClick(e)}></div>
        <div onClick={e => handleClick(e)}></div>
      </div>
    </>
  );
}

export default App;
