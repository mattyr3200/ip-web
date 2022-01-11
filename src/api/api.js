import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API_URL,
  withCredentials: true,
  headers: {
    Accept: "application/json",
  },
});

export default apiClient;