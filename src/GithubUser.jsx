import { useGithubUser } from "./useGithubUser";

export default function GithubUser({ username }) {
  const { data, loading, error, onFetchUser } = useGithubUser(username);

  function handleGetUserData() {
    onFetchUser();
  }
  if (error) {
    console.error("Error in useGithubUser:", error); // Log error
  }
  return (
    <div className="flex flex-col gap-2">
      <button onClick={handleGetUserData}>Load user data</button>
      {loading && <h1>Loading...</h1>}
      {error && <h1>There has been an error</h1>}
      {
        (data && <h3>{data.login}</h3>,
        (<img className="w-2/5" src={data.avatar} alt="" />))
      }
    </div>
  );
}
