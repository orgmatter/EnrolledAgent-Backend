import axiosInstance from '../../../axiosInstance/'
import {
    GET_ALL_STAFFS, CREATE_STAFF, DELETE_STAFF
} from '../../types'

// React Notification
import { NotificationManager } from 'react-notifications';

export const getAllStaffs = () => async dispatch =>{

    
    const res = await axiosInstance.get('/staff/');
    dispatch ({ 
        type : GET_ALL_STAFFS,
        payload : res.data.data 
    }); 
}

export const addStaff = (staff) => async dispatch => {
    const res = await axiosInstance.post('/staff', staff);
    try{
        
        dispatch ({
            type: CREATE_STAFF,
            payload: res.data
        });
        NotificationManager.success('Staff Created Successfully. Password has been sent to email !','Success!', 2000);
        //window.setTimeout(function(){window.location.reload()}, 700);
    }
    catch(error){
        NotificationManager.error(error?.response?.data?.error.message ?? error.message, 2000);
        //window.setTimeout(function(){window.location.reload()}, 700);
    }
} 


// Reject Listing
export const deleteStaff = (id) => async dispatch => {
    
    try{
      const res = await axiosInstance.delete(`/staff/${id}`);
      dispatch({
          type: DELETE_STAFF,
          payload: id
      })
      NotificationManager.success('Staff deleted successfully !','Success!', 2000);
      //window.setTimeout(function(){window.location.reload()}, 700);
    }
    
    catch(error){
      NotificationManager.error(error?.response?.data?.error.message ?? error.message, 2000);
    }
    //window.setTimeout(function(){window.location.reload()}, 700);
   
  }

