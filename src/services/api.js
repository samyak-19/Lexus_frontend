import axios from "axios";

const api = axios.create({
  baseURL: "https://lexus-backend.onrender.com",
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