import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.VITE_PROD === "production"
      ? import.meta.env.VITE_API_BASE_URL
      : "http://localhost:8080",
  withCredentials: true,
});
