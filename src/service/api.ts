import axios from "axios";

export const getVans_API = async () => {
  const response = await axios.get("/api/vans");
  return response.data;
};
