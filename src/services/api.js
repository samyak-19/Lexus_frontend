import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ||
    "http://localhost:5000/api",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  const companyId = localStorage.getItem("companyId");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  if (companyId) {
    config.headers["x-company-id"] = companyId;
  }

  return config;
});

export default api;