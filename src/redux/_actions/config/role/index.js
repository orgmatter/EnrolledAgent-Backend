// import axiosInstance from '../../../axiosInstance';
import axiosInstance from '../../../axiosInstance';
import {
    GET_ALL_ROLE, 
    CREATE_ROLE,
    UPDATE_ROLE,
    DELETE_ROLE
} from '../../../_actions/types';

// React Notification
import { NotificationManager } from 'react-notifications';

export const getRoles = () => async dispatch =>{
    
  const res = await axiosInstance.get('/role');
  dispatch ({ 
      type : GET_ALL_ROLE,
      payload : res.data.data,
      
  }); 
}


export const addRole = (role) => async dispatch => {
    
    try{

        const res = await axiosInstance.post('/role', role);
        dispatch ({
            type: CREATE_ROLE,
            payload: res.data
        });
        NotificationManager.success('Role Created successfully !','Success!', 2000);
        //window.setTimeout(function(){window.location.reload()}, 700);
    }
    catch(error){
        NotificationManager.error(error?.response?.data?.error.message ?? error.message, 2000);
    }
}

// Update Role Action
export const updateRole = role => async dispatch => {
  
  try{
    const res = await axiosInstance.put(`/role/${role.get("id")}`, role);
    dispatch ({
        type: UPDATE_ROLE,
        payload: res.data
    });
    NotificationManager.success('Role Updated successfully !','Success!', 2000);
      window.setTimeout(function(){window.location.reload()}, 700);
  }
  catch(error){
    alert(error?.response?.data?.error.message ?? error.message)
  }
}

// Delete Role
export const deleteRole = (id) => async dispatch => {
  
  try{
    await axiosInstance.delete(`/role/${id}`);
    dispatch({
        type: DELETE_ROLE,
        payload: id
    })
    NotificationManager.success('Role Deleted successfully !','Success!', 2000);
      window.setTimeout(function(){window.location.reload()}, 700);
  }
  catch(error){
    alert(error?.response?.data?.error.message ?? error.message)
  }
}
