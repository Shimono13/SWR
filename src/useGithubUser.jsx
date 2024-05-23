import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function useGithubUser(username) {
  const { data, error, mutate } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  );

  function refreshUser() {
    mutate();
  }

  return {
    data,
    error,
    loading: !data && !error,
    refreshUser,
  };
}
