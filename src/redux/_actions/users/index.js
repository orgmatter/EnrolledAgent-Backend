import axiosInstance from '../../axiosInstance'
import {
    GET_ALL_USERS,
    DEACTIVATE_USER,
    ACTIVATE_USER
} from '../types'

// Notification
import { NotificationManager } from 'react-notifications';


export const getUsers = () => async dispatch =>{
    const res = await axiosInstance.get('/user');
    dispatch ({ 
        type : GET_ALL_USERS,
        payload : res.data.data
    });   
}

export const deactivateUser = (id) => async dispatch => {
    
    try{
      const res = await axiosInstance.post(`/user/deactivate/${id}`);
      dispatch({
          type: DEACTIVATE_USER,
          payload: id
      })
      NotificationManager.success('User deactivated successfully !','Success!', 2000);
      window.setTimeout(function(){window.location.reload()}, 700);
    }
    
    catch(error){
      alert(error?.response?.data?.error.message ?? error.message)
      NotificationManager.success('An error occured','Error!', 2000);
    }
    window.setTimeout(function(){window.location.reload()}, 700);
   
  }

  export const activateUser = (id) => async dispatch => {
    try{
      const res = await axiosInstance.post(`/user/activate/${id}`);
      dispatch({
          type: ACTIVATE_USER,
          payload: id,
      })
      NotificationManager.success('User activated successfully !','Success!', 2000);
      window.setTimeout(function(){window.location.reload()}, 700);
    }
    
    catch(error){
      alert(error?.response?.data?.error.message ?? error.message)
      NotificationManager.success('An error occured','Error!', 2000);
    }
    
    window.setTimeout(function(){window.location.reload()}, 700);
  }
