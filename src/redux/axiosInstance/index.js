import axios from "axios";
import { API_KEY, API_URL } from "../../config";

function tokenRefresh(){
  return localStorage.getItem("token");
}
const fetchClient = () => {
const axiosInstance = axios.create({
  baseURL: `${API_URL}`,
  headers: {
    'Content-Type': 'application/json',
    'apikey': `${API_KEY}`
}
});

 // Set the AUTH token for any request
 axiosInstance.interceptors.request.use(function (config) {
  const token = tokenRefresh();
  config.headers.Authorization =  token ? `Bearer ${token}` : '';
  return config;
});

return axiosInstance;
}

export default fetchClient()
