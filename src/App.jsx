import "./App.css";
import LightOnImg from "./assets/lighton.png";
import LightOffImg from "./assets/lightoff.png";
import { useState } from "react";

function App() {
  return (
    <>
      <Light />
    </>
  );
}

// Vamos a transformar la parte estatica en una parte dinamica usando el userSate, pero sin usar eventos.

function Light() {
  // El estado de nuestra app es que al principio la bombilla esta apagada.
  const [statusLight, setStatusLight] = useState("off");

  function handleClickOn(){
    setStatusLight('on')
  }

  function handleClickOff(){
    setStatusLight('off')
  }

  return (
    <div>
      <h1>Click the buttons to turn on or off the light</h1>
      <img src={statusLight === "on" ? LightOnImg : LightOffImg} />
      <div>
        <button onClick={handleClickOn} style={{ display: statusLight === "on" ? "none" : "inline" }}>
          Turn On
        </button>
        <button onClick={handleClickOff} style={{ display: statusLight === "on" ? "inline" : "none" }}>
          Turn Off
        </button>
      </div>
    </div>
  );
}

export default App;
