import { Link, useNavigate } from "react-router-dom";
import { useGithubUser } from "./useGithubUser";

export default function GithubUserList() {
  const { data, loading, error, onFetchUser } = useGithubUser();
  const navigate = useNavigate();

  if (loading) {
    return <div>Caricamento...</div>;
  }

  if (error) {
    return <div>Si è verificato un errore: {error.message}</div>;
  }

  return (
    <div>
      <h2>Lista degli utenti GitHub:</h2>
      <ul className="grid grid-cols-10">
        {data &&
          data.map((user) => (
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
