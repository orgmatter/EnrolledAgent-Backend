import axios from '../../axios';
import {
    GET_FAQS,
    DELETE_FAQ,
    GET_FAQ,
    CREATE_FAQ,
    UPDATE_FAQ,

} from '../types';

// React Notification
import { NotificationManager } from 'react-notifications';

export const getFaqs = () => async dispatch =>{
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    };

    try{
      const res = await axios.get('/faq');
      dispatch ({ 
          type : GET_FAQS,
          payload : res.data.data,
          
      }); 
      
    }
    catch(err){
      console.log("error", err)
    }
}

// Add New Faq Action
export const addFaq = faq => async dispatch => {
  const config = {
      headers: {
          'Content-Type': 'multipart/form-data',
          'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
          "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
  };
  try{
    const res = await axios.post('/faq', faq, config);
    dispatch ({
        type: CREATE_FAQ,
        payload: res.data 
    });
    NotificationManager.success('Faq Added successfully !','Success!', 2000);
    //window.setTimeout(function(){window.location.reload()}, 700);
  }
  catch(error){
    alert(error?.response?.data?.error.message ?? error.message)
  }
}

// Update Faq Action
export const updateFaq = faq => async dispatch => {
  const config = {
      headers: {
          'Content-Type': 'multipart/form-data',
          'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
          "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
  };
  try{
    const res = await axios.put(`/faq/${faq.get("id")}`, faq, config);
    dispatch ({
        type: UPDATE_FAQ,
        payload: res.data
    });
    NotificationManager.success('Faq Updated successfully !','Success!', 2000);
    window.setTimeout(function(){window.location.reload()}, 700);
  }
  catch(error){
    alert(error?.response?.data?.error.message ?? error.message)
  }
}

// Delete Faq
export const deleteFaq = (id) => async dispatch => {
  const config = {
      headers: {
          'Content-Type': 'application/json',
          'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
          "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
  };
  try{
    const res = await axios.delete(`/faq/${id}`, config);
    dispatch({
        type: DELETE_FAQ
    })
    NotificationManager.success('Faq Deleted successfully !','Success!', 2000);
    window.setTimeout(function(){window.location.reload()}, 700);
  }
  
  catch(error){
    alert(error?.response?.data?.error.message ?? error.message)
  }
}
