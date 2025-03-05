import axios from "axios";

export const Axios = axios.create({
  baseURL: "/api", // Use MirageJS as the mock backend
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchVans = async () => {
  const response = await Axios.get("/vans"); // Axios GET request
  return response.data;
};

export const fetchVanDetails = async (id: string) => {
  const response = await Axios.get(`/vans/${id}`); // Axios GET request
  return response.data;
};

export const fetchHostVans = async () => {
  const response = await Axios.get("/host/vans");
  return response.data;
};

export const fetchHostVanDetails = async (id: string) => {
  const response = await Axios.get(`/host/vans/${id}`);
  return response.data;
};
