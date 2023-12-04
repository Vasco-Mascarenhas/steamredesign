import { useQuery } from "@tanstack/react-query";

const fetchFeatured = async (link) => {
  const response = await fetch(link);

  if (!response.ok) {
    throw new Error("Network error");
  }

  return response.json();
};

export function useFeatured() {
  const queryKey = ["Featured"];
  const a76a7dts87ad5s6a8dstd6as8 = "bdcc71c674f54475a3252f21f433fb32";
  return useQuery({
    queryKey,
    queryFn: async () => {
      const apiUrl = `https://api.rawg.io/api/games?ordering=popularity&dates=2022-01-01,2022-12-31&page_size=6&key=${a76a7dts87ad5s6a8dstd6as8}`;

      const featured = await fetchFeatured(apiUrl);
      return featured;
    },
    staleTime: Infinity,
  });
}
