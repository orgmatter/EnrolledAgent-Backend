import axiosInstance from '../../../axiosInstance';
import {
    GET_ARTICLES,
    DELETE_ARTICLE,
    CREATE_ARTICLE,
    UPDATE_ARTICLE,
    APPROVE_ARTICLE
} from '../../types';

// React Notification
import { NotificationManager } from 'react-notifications';

export const getArticles = () => async dispatch =>{
    
    try{
      const res = await axiosInstance.get('/news');
      dispatch ({ 
          type : GET_ARTICLES,
          payload : res.data.data,
          
      }); 
      
    }
    catch(error){
      console.log("error", error)
    }
}

// Add New Article Action
export const addArticle = article => async dispatch => {
 
  try{
    const res = await axiosInstance.post('/article', article);
    dispatch ({
        type: CREATE_ARTICLE,
        payload: res.data 
    });
    NotificationManager.success('Article added successfully !','Success!', 2000);
      window.setTimeout(function(){window.location.reload()}, 700);
  }
  catch(error){
    alert(error?.response?.data?.error.message ?? error.message)
  }
}

// Update Article Action
export const updateArticle = article => async dispatch => {
  
  try{
    const res = await axiosInstance.put(`/article/${article.get("id")}`, article);
    dispatch ({
        type: UPDATE_ARTICLE,
        payload: res.data
    });
    NotificationManager.success('Article updated successfully !','Success!', 2000);
      window.setTimeout(function(){window.location.reload()}, 700);
  }
  catch(error){
    alert(error?.response?.data?.error.message ?? error.message)
  }
}

// Delete Article
export const deleteArticle = (id) => async dispatch => {
  
  try{
    const res = await axiosInstance.delete(`/article/${id}`);
    dispatch({
        type: DELETE_ARTICLE,
        payload: id
    })
    NotificationManager.success('Artilce deleted successfully !','Success!', 2000);
      window.setTimeout(function(){window.location.reload()}, 700);
  }
  catch(error){
    alert(error?.response?.data?.error.message ?? error.message)
  }
}

export const approveArticle = article => async dispatch => {
  
  try{
    const res = await axiosInstance.post(`/article/status/${article.get("id")}`, article);
    dispatch({
        type: APPROVE_ARTICLE,
        payload: res.data
    })
  }
  catch(error){
    alert(error?.response?.data?.error.message ?? error.message)
  }
}
