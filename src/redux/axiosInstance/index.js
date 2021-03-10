import axios from "axios";
import { ADMIN_URL } from "../../config";

const axiosInstance = axios.create({
  baseURL: `${ADMIN_URL}`,
  headers: {
    'Content-Type': 'application/json',
    'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
    "Authorization": `Bearer ${localStorage.getItem("token")}`
}
});

axiosInstance.interceptors.response.use(
  (response) => 
  new Promise((resolve, reject) => {
    resolve(response)
  }),
  (error) => {
    if(!error.response){
      return new Promise((resolve, reject) => {
        reject(error);
      })
    }
    if(error.response.status === 401){
      localStorage.removeItem("token");
      window.location = "auth/login";
    }else{
      return new Promise((resolve, reject) => {
        reject(error);
      })
    }
  }
)

export default axiosInstance;