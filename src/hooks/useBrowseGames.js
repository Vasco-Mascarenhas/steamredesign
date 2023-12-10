import { useQuery } from "@tanstack/react-query";

const fetchBrowseGames = async (link) => {
  const response = await fetch(link);

  if (!response.ok) {
    throw new Error("Network error");
  }

  return response.json();
};

export function useBrowseGames({ genres, platforms, developers, publishers, ordering, currentPage }) {
  const queryKey = ["Browse Games", genres, platforms, developers, publishers, ordering, currentPage];
  const a76a7dts87ad5s6a8dstd6as8 = "bdcc71c674f54475a3252f21f433fb32";

  return useQuery({
    queryKey,
    queryFn: async () => {
      let apiUrl = `https://api.rawg.io/api/games?ordering=${ordering}&page_size=12&page=${currentPage}&key=${a76a7dts87ad5s6a8dstd6as8}`;

      if (genres && genres.length > 0) {
        apiUrl += `&genres=${genres}`;
      }

      if (platforms && platforms.length > 0) {
        apiUrl += `&platforms=${platforms}`;
      }

      if (developers && developers.length > 0) {
        apiUrl += `&developers=${developers}`;
      }
      if(publishers && publishers.length > 0) {
        apiUrl += `&publishers=${publishers}`
      }

      const browseGames = await fetchBrowseGames(apiUrl);
      return browseGames.results;
    },
    staleTime: Infinity,
  });
}
