import { useQuery } from "@tanstack/react-query";

const fetchDevelopers = async (link) => {
  const response = await fetch(link);

  if (!response.ok) {
    throw new Error("Network error");
  }

  return response.json();
};

export function useDevelopers() {
  const queryKey = ["Developers"];
  const a76a7dts87ad5s6a8dstd6as8 = "bdcc71c674f54475a3252f21f433fb32";
  return useQuery({
    queryKey,
    queryFn: async () => {
      const apiUrl = `https://api.rawg.io/api/developers?key=${a76a7dts87ad5s6a8dstd6as8}`;

      const developers = await fetchDevelopers(apiUrl);
      return developers.results;
    },
    staleTime: Infinity,
  });
}
