import axiosInstance from '../../axiosInstance'
import {
    GET_ALL_SPONSORS, DELETE_SPONSOR, UPDATE_SPONSOR
} from '../types'

// React Notification
import { NotificationManager } from 'react-notifications';

export const getAllSponsors = () => async dispatch =>{

    
    const res = await axiosInstance.get('/sponsor');
    dispatch ({ 
        type : GET_ALL_SPONSORS,
        payload : res.data.data 
    }); 
}

export const sponsorAdd = (sponsor) => async dispatch => {
    const res = await axiosInstance.post('/sponsor');
    dispatch ({
        type: 'ADD_sponsor',
        payload: res.data
    });
} 

//Update Sponsor Action
export const updateSponsor = sponsor => async dispatch => {
  
  try{
    const res = await axiosInstance.put(`/sponsor/${sponsor.get("id")}`, sponsor);
    dispatch ({
        type: UPDATE_SPONSOR,
        payload: res.data
    });
    NotificationManager.success('Sponsor Updated successfully !','Success!', 2000);
      window.setTimeout(function(){window.location.reload()}, 700);
  }

  catch(error){
    alert(error?.response?.data?.error.message ?? error.message)
  }
}

// Delete Sponsor
export const deleteSponsor = (id) => async dispatch => {
 
  try{
    const res = await axiosInstance.delete(`/sponsor/${id}`);
    dispatch({
        type: DELETE_SPONSOR,
        payload: id
    })
    NotificationManager.success('Sponsor deleted successfully !','Success!', 2000);
      window.setTimeout(function(){window.location.reload()}, 700);
  }
  catch(error){
    alert(error?.response?.data?.error.message ?? error.message)
  }
}
