import React, { useState } from "react"; // impo
import Hello from "./Hello";
import Welcome from "./Welcome";
import Login from "./Login";
import Counter from "./Counter";
import GithubUsers from "./GithubUsers";
import ShowGithubUser from "./ShowGithubUser";
import { Link, Route, Routes } from "react-router-dom";
import GithubUserList from "./GithubUserList";
import GithubUser from "./GithubUser";

function App() {
  return (
    <div className=" flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <nav>
        <ul className="grid grid-cols-2 w-max">
          <li className="list-item">
            <Link to="/">Welcome</Link>
          </li>
          <li className="list-item">
            <Link to="/login">Login</Link>
          </li>
          <li className="list-item">
            <Link to="/counter">Counter</Link>
          </li>
          <li className="list-item">
            <Link to="/users/">Show Github Users</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/:name" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/counter"
          element={<Counter valoreIniziale={0} valore={1} />}
        />

        <Route path="/users" element={<GithubUserList />}>
          <Route index element={<p>Add a user and select it</p>} />
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
