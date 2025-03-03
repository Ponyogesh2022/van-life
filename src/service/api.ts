import axios from "axios";

export const getVansAPI = () => {
  return axios.get("/api/vans");
};
