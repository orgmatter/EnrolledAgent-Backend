import axios from "axios";
import { API_KEY, API_URL } from "../../config";

const axiosInstance = axios.create({
  baseURL: `${API_URL}`,
  headers: {
    'Content-Type': 'application/json',
    'apikey': `${API_KEY}`,
    "Authorization": `Bearer ${localStorage.getItem("token")}`
}
});

// axiosInstance.interceptors.response.use(
//   (response) => 
//   new Promise((resolve, reject) => {
//     resolve(response)
//   }),
//   (error) => {
//     if(!error.response){
//       return new Promise((resolve, reject) => {
//         reject(error);
//       })
//     }
//     if(error.response.status === 401){
//       localStorage.removeItem("token");
//       window.location = "auth/login";
//     }else{
//       return new Promise((resolve, reject) => {
//         reject(error);
//       })
//     }
//   }
// )

export default axiosInstance;