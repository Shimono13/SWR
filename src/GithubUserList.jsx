import React, { useState, useEffect } from "react";
import ShowGithubUser from "./ShowGithubUser";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

export default function GithubUserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("https://api.github.com/users");
        if (!response.ok) {
          throw new Error("Errore durante il caricamento degli utenti");
        }
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Caricamento...</div>;
  }

  return (
    <div>
      <h2>Lista degli utenti GitHub:</h2>
      <ul className="grid grid-cols-10">
        {users.map((user) => (
          <li className="list-item" key={user.id}>
            <Link
              to={`/users/${user.login}`}
              onClick={() => navigate(`/users/${user.login}`)}>
              {user.login}
            </Link>
            <img
              src={user.avatar_url}
              alt={user.login}
              width="50"
              height="50"
            />
            <li>{user.login}</li>
          </li>
        ))}
      </ul>
    </div>
  );
}
