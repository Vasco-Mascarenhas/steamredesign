import { useQuery } from "@tanstack/react-query";

const fetchBrowseGames = async (link) => {
  const response = await fetch(link);

  if (!response.ok) {
    throw new Error("Network error");
  }

  return response.json();
};

export function useBrowseGames({ genres, platforms, ordering, currentPage }) {
  const queryKey = ["Browse Games", genres, platforms, ordering, currentPage];
  const a76a7dts87ad5s6a8dstd6as8 = "bdcc71c674f54475a3252f21f433fb32";
  return useQuery({
    queryKey,
    queryFn: async () => {
      const apiUrl =
        genres && genres.length > 0 && platforms && platforms.length > 0
          ? `https://api.rawg.io/api/games?ordering=${ordering}&genres=${genres}&platforms=${platforms}&page_size=12&page=${currentPage}&key=${a76a7dts87ad5s6a8dstd6as8}`
          : genres && genres.length > 0 ? `https://api.rawg.io/api/games?ordering=${ordering}&genres=${genres}&page_size=12&page=${currentPage}&key=${a76a7dts87ad5s6a8dstd6as8}`
          : platforms && platforms.length > 0 ? `https://api.rawg.io/api/games?ordering=${ordering}&platforms=${platforms}&page_size=12&page=${currentPage}&key=${a76a7dts87ad5s6a8dstd6as8}`
          : `https://api.rawg.io/api/games?ordering=${ordering}&genres=action&page_size=12&page=${currentPage}&key=${a76a7dts87ad5s6a8dstd6as8}`;

      const browseGames = await fetchBrowseGames(apiUrl);
      return browseGames.results;
    },
    staleTime: Infinity,
  });
}
