import { useQuery } from "react-query";

async function fetchExternal(url) {
  const response = await fetch(url);
  return response.json();
}

export default function useExternal(url) {
  const { data, isLoading, isError } = useQuery(url, () => fetchExternal(url));
  return { data, isLoading, isError };
}
