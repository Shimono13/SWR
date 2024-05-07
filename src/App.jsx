import React from "react";
import Hello from "./Hello";
import Messaggio from "./Messaggio";
import Welcome from "./Welcome";

function App() {
  return (
    <div className="flex flex-col">
      <Hello></Hello>

      <Messaggio></Messaggio>

      <Welcome name="John" age={20}></Welcome>
    </div>
  );
}

export default App;
