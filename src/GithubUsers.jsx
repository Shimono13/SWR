import React, { useState } from "react";
import GithubUser from "./GithubUser"; // Assuming you have a GithubUser component

export default function GithubUsers() {
  const [inputValue, setInputValue] = useState("");
  const [usernames, setUsernames] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      setUsernames((prevUsernames) => [...prevUsernames, inputValue]);
      console.log(usernames);
    }
  };

  return (
    <div className="flex flex-col gap-4 my-5">
      <form className="flex gap-3" onSubmit={handleSubmit}>
        <input
          className=" bg-slate-200"
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Enter GitHub username"
        />
        <button className="sdsd bg-orange-300" type="submit">
          Submit
        </button>
      </form>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl">User List:</h2>
        <ul className="flex flex-col gap-4 ">
          {usernames.map((username, index) => (
            <li className=" bg-slate-300 border-4 " key={index}>
              {/* Esegui il mapping del componente GithubUser con il nome utente corrente */}
              <GithubUser username={username} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
