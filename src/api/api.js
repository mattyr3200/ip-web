import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API_URL,
  withCredentials: true,
  headers: {
    Accept: "application/json",
  },
});

// Add a request interceptor
apiClient.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("user_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default apiClient;
