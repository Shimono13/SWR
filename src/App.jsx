import React, { useState } from "react"; // Importa React e useState
// import Counter from "./Counter";
import Hello from "./Hello";
import Messaggio from "./Messaggio";
import Welcome from "./Welcome";
// import AlertClock from "./AlertClock";
import Clock from "./Clock";
// import MouseClicker from "./MouseClicker";
import Login from "./Login";
import UnctrolledForms from "./UncontrolledForm";
function App() {
  function handleDate(data) {
    console.log("Dati di accesso:", data);
    // Qui puoi eseguire la logica per il login, ad esempio, chiamando un'API
  }
  // const [inputValue, setInputValue] = useState("");
  // const handleClick = () => {
  //   alert(`Current Time: ${new Date().toLocaleString()}`);
  // };
  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-400">
      <div className="flex flex-col gap-4 ">
        <Hello />
        <Messaggio />
        <Welcome name="Simone" age={26} />
        {/* <AlertClock onClick={handleClick} />
        <Counter valore={2} valoreIniziale={3}></Counter> */}
        <Clock></Clock>
        {/* <MouseClicker></MouseClicker> */}

        <Login onSubmit={handleDate}></Login>
        <UnctrolledForms></UnctrolledForms>
        {/* <input
        type="text"
        value={inputValue}
        className=" text-2xl text-white bg-fuchsia-800 w-max"
        onChange={handleInputChange}
      /> */}
      </div>
    </div>
  );
}

export default App;
