import { useQuery } from "@tanstack/react-query";
import { fetchHostVans, fetchVanDetails, fetchVans } from "./api";

export function useGettVans_API() {
  return useQuery({
    queryKey: ["fetchvans"],
    queryFn: fetchVans,
    staleTime: 0,
  });
}
export function useGetVanDetails_API(id: string) {
  return useQuery({
    queryKey: ["fetchVans", id],
    queryFn: () => fetchVanDetails(id),
  });
}

export function useGetHostVans_API() {
  return useQuery({
    queryKey: ["hostVans"],
    queryFn: fetchHostVans,
  });
}

export function useGetHostVanDetails_API(id: string) {
  return useQuery({
    queryKey: ["hostVans", id],
    queryFn: () => fetchVanDetails(id),
  });
}
