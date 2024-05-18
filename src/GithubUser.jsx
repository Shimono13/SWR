import { useGithubUser } from "./useGithubUser";

export default function GithubUser({ username }) {
  const { usernameProfiloGit, immagineProfiloGit, isLoading, error } =
    useGithubUser({ username });

  if (isLoading) {
    return <div>Caricamento...</div>;
  }
  if (error) {
    return null;
  }
  return (
    <div className="flex flex-col gap-2">
      <h3>{usernameProfiloGit}</h3>
      <img className="w-2/5" src={immagineProfiloGit} alt="" />
    </div>
  );
}
