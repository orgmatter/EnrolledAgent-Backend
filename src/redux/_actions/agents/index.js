import axios from '../../axios/'
import {
    GET_ALL_AGENTS,
    GET_ALL_CLAIM_LISTING,
    APPROVE_CLAIM_LISTING,
    CANCEL_CLAIM_LISTING
} from '../types'
// React Notification
import { NotificationManager } from 'react-notifications';

export const getAgents = () => async dispatch =>{
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    };
    const res = await axios.get('/agent', config);
    dispatch ({ 
        type : GET_ALL_AGENTS,
        payload : res.data.data
    });   
}
 
export const agentUpload = (agent) => async dispatch => {
  const res = await axios.post('/agent/upload', agent);
  dispatch ({
      type: 'ADD_agent', 
      payload: res.data
  });
}


//Account claims

export const getClaims = () => async dispatch =>{
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    };
    const res = await axios.get('/claim', config);
    dispatch ({ 
        type : GET_ALL_CLAIM_LISTING,
        payload : res.data.data
    });   
}

// Delete Article
export const rejectClaim = (id) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    };
    try{
      const res = await axios.post(`/reject-claim/${id}`, config);
      dispatch({
          type: CANCEL_CLAIM_LISTING,
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

  export const approveClaim = (id) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    };
    try{
      const res = await axios.post(`/approve-claim/${id}`, config);
      dispatch({
          type: APPROVE_CLAIM_LISTING,
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