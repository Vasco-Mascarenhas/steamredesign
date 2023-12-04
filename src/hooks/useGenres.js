import { useQuery } from "@tanstack/react-query";

const fetchGenres = async (link) => {
  const response = await fetch(link);

  if (!response.ok) {
    throw new Error("Network error");
  }

  return response.json();
};

export function useGenres() {
  const queryKey = ["Genres"];
  const a76a7dts87ad5s6a8dstd6as8 = "bdcc71c674f54475a3252f21f433fb32";
  return useQuery({
    queryKey,
    queryFn: async () => {
      const apiUrl = `https://api.rawg.io/api/genres?&key=${a76a7dts87ad5s6a8dstd6as8}`;

      const genres = await fetchGenres(apiUrl);
      return genres;
    },
    staleTime: Infinity,
  });
}
