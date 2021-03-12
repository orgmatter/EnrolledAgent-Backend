import axiosInstance from '../../axiosInstance/';
import { GET_RESOURCES, CREATE_RESOURCE, UPDATE_RESOURCE, DELETE_RESOURCE } from '../types';

// React Notification
import { NotificationManager } from 'react-notifications';

export const getResources = () => async dispatch =>{

    const res = await axiosInstance.get('/resource');
    dispatch ({ 
        type : GET_RESOURCES,
        payload : res.data.data
    }); 
}

// Add New Resource Action
export const addResource = resource => async dispatch => {
  
  try{
    const res = await axiosInstance.post('/resource', resource);
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
  
  try{
    const res = await axiosInstance.put(`/resource/${resource.get("id")}`, resource);
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
  
  try{
    const res = await axiosInstance.delete(`/resource/${id}`, );
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




 

