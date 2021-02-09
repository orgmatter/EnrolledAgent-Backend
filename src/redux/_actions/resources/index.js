import axiosInstance from '../../axiosInstance/';
import { GET_RESOURCES, CREATE_RESOURCE, UPDATE_RESOURCE, DELETE_RESOURCE } from '../types';

// React Notification
import { NotificationManager } from 'react-notifications';

export const getResources = () => async dispatch =>{

    const config = {
      headers: {
          'Content-Type': 'application/json',
          'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
          "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    };

    const res = await axiosInstance.get('/resource', config);
    dispatch ({ 
        type : GET_RESOURCES,
        payload : res.data.data
    }); 
}

// Add New Resource Action
export const addResource = resource => async dispatch => {
  const config = {
      headers: {
          'Content-Type': 'multipart/form-data',
          'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
          "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
  };
  try{
    const res = await axiosInstance.post('/resource', resource, config);
    dispatch ({
        type: CREATE_RESOURCE,
        payload: res.data 
    });
    NotificationManager.success('Resource added successfully !','Success!', 2000);
      window.setTimeout(function(){window.location.reload()}, 700);
  }
  catch(error){
    alert(error?.response?.data?.error.message ?? error.message)
  }
}

// Update Resource Action
export const updateResource = resource => async dispatch => {
  const config = {
      headers: {
          'Content-Type': 'multipart/form-data',
          'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
          "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
  };
  try{
    const res = await axiosInstance.put(`/resource/${resource.get("id")}`, resource, config);
    dispatch ({
        type: UPDATE_RESOURCE,
        payload: res.data
    });
    NotificationManager.success('Resource updated successfully !','Success!', 2000);
      window.setTimeout(function(){window.location.reload()}, 700);
  }
  catch(error){
    alert(error?.response?.data?.error.message ?? error.message)
  }
}

// Delete Resource
export const deleteResource = (id) => async dispatch => {
  const config = {
      headers: {
          'Content-Type': 'application/json',
          'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
          "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
  };
  try{
    const res = await axiosInstance.delete(`/resource/${id}`, config);
    dispatch({
        type: DELETE_RESOURCE,
        payload: id
    })
    NotificationManager.success('Resource deleted successfully !','Success!', 2000);
      window.setTimeout(function(){window.location.reload()}, 700);
  }
  catch(error){
    alert(error?.response?.data?.error.message ?? error.message)
  }
}




 

