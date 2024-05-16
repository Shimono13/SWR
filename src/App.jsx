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
import Container from "./Container";
import { LanguageContext } from "./LanguageContext";
import GithubUsers from "./GithubUsers";

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

  const [language, setLanguage] = useState(`en`);

  function handleSetLanguage(language) {
    setLanguage(language);
  }

  return (
    <div className="flex justify-center items-center h-screen bg-slate-400">
      <Container title={"Ciao, questo è il mio titolo"}>
        <div className="flex flex-col gap-4">
          <Hello />
          <Messaggio />
          <Welcome name="Simone" age={26} />
          <Counter valore={2} valoreIniziale={3}></Counter>
          <div className="flex flex-row gap-2 border-2	">
            <button
              className=" bg-slate-300 rounded border-2 py-2 px-4 border-red-500 "
              onClick={() => {
                handleSetLanguage(`en`);
              }}>
              EN
            </button>
            <button
              className=" bg-slate-300 rounded border-2 py-2 px-4 border-red-500"
              onClick={() => {
                handleSetLanguage(`it`);
              }}>
              IT
            </button>
            <LanguageContext.Provider value={language}>
              <Clock></Clock>
            </LanguageContext.Provider>
          </div>

          {/* <Login onSubmit={handleDate}></Login> */}
          {/* <Refs></Refs> */}
          {/* <Colors
          colors={[
            { id: 1, name: "Red" },
            { id: 2, name: "Blue" },
            { id: 3, name: "Green" },
          ]}
        /> */}
          {/* <TodoList></TodoList> */}
        </div>
        <GithubUsers></GithubUsers>
      </Container>
    </div>
  );
}

export default App;
