import axiosInstance from '../../axiosInstance/'
import {
    GET_ALL_AGENTS,
    UPLOAD_AGENT,
    GET_ALL_CLAIM_LISTING,
    APPROVE_CLAIM_LISTING,
    CANCEL_CLAIM_LISTING,
    GET_ALL_LISTING_REQUEST,
    APPROVE_LISTING_REQUEST,
    REJECT_LISTING_REQUEST,
    ADD_AGENT
} from '../types'
// React Notification
import { NotificationManager } from 'react-notifications';

export const getAgents = () => async dispatch =>{
    
    const res = await axiosInstance.get('/agent');
    dispatch ({ 
        type : GET_ALL_AGENTS,
        payload : res.data.data
    });   
}
 
export const agentUpload = (agent) => async dispatch => {
  const res = await axiosInstance.post('/agent/upload', agent);
  dispatch ({
      type: UPLOAD_AGENT, 
      payload: res.data
  });
}


//Account claims

export const getClaims = () => async dispatch =>{
    
    const res = await axiosInstance.get('/claim');
    dispatch ({ 
        type : GET_ALL_CLAIM_LISTING,
        payload : res.data.data
    });   
}

// Delete Article
export const rejectClaim = (id) => async dispatch => {
   
    try{
      await axiosInstance.post(`/reject-claim/${id}`);
      dispatch({
          type: CANCEL_CLAIM_LISTING,
          payload: id
      })
      NotificationManager.success('Claim rejected successfully !','Success!', 2000);
      window.setTimeout(function(){window.location.reload()}, 700);
    }
    
    catch(error){
      alert(error?.response?.data?.error.message ?? error.message)
      NotificationManager.success('An error occured','Error!', 2000);
    }
    window.setTimeout(function(){window.location.reload()}, 700);
   
  }

  export const approveClaim = (id) => async dispatch => {
    
    try{
     await axiosInstance.post(`/approve-claim/${id}`);
      dispatch({
          type: APPROVE_CLAIM_LISTING,
          payload: id,
      })
      NotificationManager.success('Claim approved successfully !','Success!', 2000);
      window.setTimeout(function(){window.location.reload()}, 700);
    }
    
    catch(error){
      alert(error?.response?.data?.error.message ?? error.message)
      NotificationManager.success('An error occured','Error!', 2000);
    }
    
    window.setTimeout(function(){window.location.reload()}, 700);
  }
 
// Add New Agent 
export const addAgent = agent => async dispatch => {
    
    try{
      const res = await axiosInstance.post('/agent', agent);
      dispatch ({
          type: ADD_AGENT,
          payload: res.data 
      });
      NotificationManager.success('Agent added successfully !','Success!', 2000);
        window.setTimeout(function(){window.location.reload()}, 700);
    }
    catch(error){
      alert(error?.response?.data?.error.message ?? error.message)
    }
  }







  //Account listing

export const getListing = () => async dispatch =>{
    
    const res = await axiosInstance.get('/listing-request');
    dispatch ({ 
        type : GET_ALL_LISTING_REQUEST,
        payload : res.data.data
    });   
}

// Reject Listing
export const rejectListing = (id) => async dispatch => {
    
    try{
      await axiosInstance.post(`/listing-request/reject/${id}`);
      dispatch({
          type: REJECT_LISTING_REQUEST,
          payload: id
      })
      NotificationManager.success('Listing rejected successfully !','Success!', 2000);
      window.setTimeout(function(){window.location.reload()}, 700);
    }
    
    catch(error){
      alert(error?.response?.data?.error.message ?? error.message)
      NotificationManager.success('An error occured','Error!', 2000);
    }
    window.setTimeout(function(){window.location.reload()}, 700);
   
  }

  export const approveListing = (id) => async dispatch => {
    
    try{
      await axiosInstance.post(`/listing-request/approve/${id}`);
      dispatch({
          type: APPROVE_LISTING_REQUEST,
          payload: id,
      })
      NotificationManager.success('Listing approved successfully !','Success!', 2000);
      window.setTimeout(function(){window.location.reload()}, 700);
    }
    
    catch(error){
      alert(error?.response?.data?.error.message ?? error.message)
      NotificationManager.success('An error occured','Error!', 2000);
    }
    
    window.setTimeout(function(){window.location.reload()}, 700);
  }
