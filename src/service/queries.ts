import { useQuery } from "@tanstack/react-query";
import { getVans_API } from "./api";

export function useGetVans() {
  return useQuery({
    queryFn: () => getVans_API,
    queryKey: ["vans"],
    staleTime: Infinity,
    gcTime: Infinity,
  });
}
