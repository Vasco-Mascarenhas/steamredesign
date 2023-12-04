import { useQuery } from "@tanstack/react-query";

const fetchAchievements = async (link) => {
  const response = await fetch(link);

  if (!response.ok) {
    throw new Error("Network error");
  }

  return response.json();
};

export function useAchievements({ gameId }) {
  const queryKey = ["Achievements"];
  const a76a7dts87ad5s6a8dstd6as8 = "bdcc71c674f54475a3252f21f433fb32";
  return useQuery({
    queryKey,
    queryFn: async () => {
      const apiUrl = `https://api.rawg.io/api/games/${gameId}/achievements?key=${a76a7dts87ad5s6a8dstd6as8}`;

      const achievements = await fetchAchievements(apiUrl);
      return achievements.results;
    },
    staleTime: Infinity,
  });
}
