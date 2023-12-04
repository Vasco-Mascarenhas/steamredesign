import { useQuery } from "@tanstack/react-query";

const fetchFreeGames = async (link) => {
  const response = await fetch(link);

  if (!response.ok) {
    throw new Error("Network error");
  }

  return response.json();
};

export function useFreeGames() {
  const queryKey = ["Free To Play"];
  const a76a7dts87ad5s6a8dstd6as8 = "bdcc71c674f54475a3252f21f433fb32";
  return useQuery({
    queryKey,
    queryFn: async () => {
      const apiUrl = `https://api.rawg.io/api/games?ordering=popularity&tags=free-to-play&page_size=12&key=${a76a7dts87ad5s6a8dstd6as8}`;

      const freeGames = await fetchFreeGames(apiUrl);
      return freeGames;
    },
    staleTime: Infinity,
  });
}
