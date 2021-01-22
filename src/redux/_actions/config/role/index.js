// import axios from '../../../axios';
import axios from '../../../axios/index';
import {
    GET_ALL_ROLE, 
    CREATE_ROLE,
    UPDATE_ROLE,
    DELETE_ROLE
} from '../../../_actions/types';

// React Notification
import { NotificationManager } from 'react-notifications';

export const getRoles = () => async dispatch =>{
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    };
  const res = await axios.get('/role',config);
  dispatch ({ 
      type : GET_ALL_ROLE,
      payload : res.data.data,
      
  }); 
}


export const addRole = (role) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    };
    try{

        const res = await axios.post('/role', role, config);
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
  const config = {
      headers: {
          'Content-Type': 'multipart/form-data',
          'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
          "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
  };
  try{
    const res = await axios.put(`/role/${role.get("id")}`, role, config);
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
  const config = {
      headers: {
          'Content-Type': 'application/json',
          'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
          "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
  };
  try{
    const res = await axios.delete(`/role/${id}`, config);
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
