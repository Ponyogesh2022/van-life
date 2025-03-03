import { useQuery } from "@tanstack/react-query";
import { getVansAPI } from "./api";

export function useGetVans() {
  return useQuery({
    queryFn: () => getVansAPI,
    queryKey: ["driverdashboard"],
    staleTime: Infinity,
    gcTime: Infinity,
  });
}
