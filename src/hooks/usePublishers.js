import { useQuery } from "@tanstack/react-query";

const fetchPublishers = async (link) => {
  const response = await fetch(link);

  if (!response.ok) {
    throw new Error("Network error");
  }

  return response.json();
};

export function usePublishers() {
  const queryKey = ["Publishers"];
  const a76a7dts87ad5s6a8dstd6as8 = "bdcc71c674f54475a3252f21f433fb32";
  return useQuery({
    queryKey,
    queryFn: async () => {
      const apiUrl = `https://api.rawg.io/api/publishers?key=${a76a7dts87ad5s6a8dstd6as8}`;

      const publishers = await fetchPublishers(apiUrl);
      return publishers.results;
    },
    staleTime: Infinity,
  });
}
