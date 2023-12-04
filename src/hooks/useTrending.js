import { useQuery } from "@tanstack/react-query";

const fetchTrending = async (link) => {
  const response = await fetch(link);

  if (!response.ok) {
    throw new Error("Network error");
  }

  return response.json();
};

export function useTrending() {
  const queryKey = ["Trending"];
  const a76a7dts87ad5s6a8dstd6as8 = "bdcc71c674f54475a3252f21f433fb32";
  return useQuery({
    queryKey,
    queryFn: async () => {
      const apiUrl = `https://api.rawg.io/api/games?ordering=popularity&dates=2023-01-01,2023-12-31&page_size=12&key=${a76a7dts87ad5s6a8dstd6as8}`;

      const trending = await fetchTrending(apiUrl);
      return trending;
    },
    staleTime: Infinity,
  });
}
