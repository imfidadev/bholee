import axios from "axios";

const api = axios.create();

const onUnAuthorized = () => {
  // Logout
};

api.interceptors.request.use((config) => {
  const token = "";
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.defaults.headers.common["Content-Type"] = "application/json";
api.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

api.interceptors.response.use(
  (response) => {
    if (response?.data?.meta?.code === 200) return response.data;
    if (response?.data?.meta?.code === 401) onUnAuthorized();
    return Promise.reject(
      new Error(response?.data?.meta?.message || "Something went wrong")
    );
  },
  (error) => {
    if (error.response?.status === 401) onUnAuthorized();
    return Promise.reject(error);
  }
);

export default api;
