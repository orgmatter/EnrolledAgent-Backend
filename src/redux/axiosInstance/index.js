import axios from "axios";
import { NotificationManager } from 'react-notifications';
import { API_KEY, API_URL } from "../../config";


let error_message_defined = false;


function tokenRefresh(){
  return localStorage.getItem("token");
}

function deleteToken(){
  localStorage.removeItem("token");
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

// Shows error message on 401 and deletes tokem from local storage
axiosInstance.interceptors.response.use((response) => {
  return response
}, 
function (error) {
  const originalRequest = error.config;
  
  if (error.response.status === 401 && !originalRequest._retry) {
  
    if(error_message_defined) return axios(originalRequest);
    NotificationManager.error(`${error?.response?.data?.error?.message ??  'An error occured, please try again later.'}`,'Error!', 2000);
    error_message_defined = true
    
    //refresh token and redirect user to auth page
    deleteToken()
  } 
  
  return axios(originalRequest);
})

return axiosInstance;
}

export default fetchClient()
