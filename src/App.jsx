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
import Refs from "./Refs";
import Counter from "./Counter";
import Colors from "./Colors";
import TodoList from "./TodoList";

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
        <Counter valore={2} valoreIniziale={3}></Counter>
        <Clock></Clock>
        <Login onSubmit={handleDate}></Login>
        {/* <Refs></Refs> */}
        {/* <Colors
          colors={[
            { id: 1, name: "Red" },
            { id: 2, name: "Blue" },
            { id: 3, name: "Green" },
          ]}
        /> */}
        <TodoList></TodoList>
      </div>
    </div>
  );
}

export default App;
