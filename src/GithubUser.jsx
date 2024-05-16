import React, { useState, useEffect } from "react";

export default function GithubUser({ username }) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // const githubToken = " ";

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetch(`https://api.github.com/users/${username}`, {
      headers: {
        // Authorization: `Bearer ${githubToken}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nella richiesta API");
        }
        return response.json();
      })
      .then((json) => {
        if (json.login && json.avatar_url) {
          setData({
            login: json.login,
            avatar_url: json.avatar_url,
          });
        } else {
          console.log("Dati mancanti nella risposta API");
        }
      })
      .catch((error) => {
        console.error("Error fetching GitHub user data:", error);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [username]); // Esegui l'effetto solo quando cambia il nome utente

  if (isLoading) {
    return <div>Caricamento...</div>;
  }
  if (error) {
    // Se si verifica un errore, non renderizzare nulla
    return null;
  }

  return (
    <div className="flex flex-col gap-2">
      <h3>{data.login}</h3>
      <img className="w-2/5" src={data.avatar_url} alt="" />
    </div>
  );
}
