import { useEffect, useState } from "react";

export function useGithubUser({ username }) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const githubToken = "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 ";

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${githubToken}`,
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
    return { error };
  }

  return {
    usernameProfiloGit: data.login,
    immagineProfiloGit: data.avatar_url,
  };
}
