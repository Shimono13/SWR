import React, { useState } from "react"; // Importa React e useState

import Hello from "./Hello";
import Messaggio from "./Messaggio";
import Welcome from "./Welcome";
import AlertClock from "./AlertClock";

function App() {
  const handleClick = () => {
    alert(`Current Time: ${new Date().toLocaleString()}`);
  };

  return (
    <div className="flex flex-col">
      <Hello />
      <Messaggio />
      <Welcome name="John" age={12} />
      <AlertClock onClick={handleClick} />
    </div>
  );
}

export default App;
