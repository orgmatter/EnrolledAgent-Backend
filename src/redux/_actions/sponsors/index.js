import axios from '../../axios'
import {
    GET_ALL_SPONSORS, DELETE_SPONSOR, UPDATE_SPONSOR
} from '../types'

// React Notification
import { NotificationManager } from 'react-notifications';

export const getAllSponsors = () => async dispatch =>{

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    };
    const res = await axios.get('/sponsor', config);
    dispatch ({ 
        type : GET_ALL_SPONSORS,
        payload : res.data.data 
    }); 
}

export const sponsorAdd = (sponsor) => async dispatch => {
    const res = await axios.post('/sponsor', sponsor);
    dispatch ({
        type: 'ADD_sponsor',
        payload: res.data
    });
} 

//Update Sponsor Action
export const updateSponsor = sponsor => async dispatch => {
  const config = {
      headers: {
          'Content-Type': 'multipart/form-data',
          'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
          "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
  };

  try{
    const res = await axios.put(`/sponsor/${sponsor.get("id")}`, sponsor, config);
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
  const config = {
      headers: {
          'Content-Type': 'application/json',
          'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
          "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
  };
  try{
    const res = await axios.delete(`/sponsor/${id}`, config);
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
