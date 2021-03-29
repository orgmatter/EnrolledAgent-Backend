import axiosInstance from '../../axiosInstance';
import {
    GET_FAQS,
    DELETE_FAQ,
    CREATE_FAQ,
    UPDATE_FAQ,

} from '../types';

// React Notification
import { NotificationManager } from 'react-notifications';

export const getFaqs = () => async dispatch =>{
    
    try{
      const res = await axiosInstance.get('/faq');
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
  
  try{
    const res = await axiosInstance.post('/faq', faq);
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
  
  try{
    const res = await axiosInstance.put(`/faq/${faq.get("id")}`, faq);
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
  
  try{
    await axiosInstance.delete(`/faq/${id}`);
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
