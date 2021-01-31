import axios from '../../axios/'
import {
    GET_ALL_USERS,
    DEACTIVATE_USER,
    ACTIVATE_USER
} from '../types'

// Notification
import { NotificationManager } from 'react-notifications';


export const getUsers = () => async dispatch =>{
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    };
    const res = await axios.get('/user', config);
    dispatch ({ 
        type : GET_ALL_USERS,
        payload : res.data.data
    });   
}

export const deactivateUser = (id) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    };
    try{
      const res = await axios.post(`/user/deactivate/${id}`, config);
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
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    };
    try{
      const res = await axios.post(`/user/activate/${id}`, config);
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
