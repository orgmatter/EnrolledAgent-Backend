import axios from '../../../axios';
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
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    };

    try{
      const res = await axios.get('/news');
      dispatch ({ 
          type : GET_ARTICLES,
          payload : res.data.data,
          
      }); 
      
    }
    catch(err){
      console.log("error", err)
    }
}

// Add New Article Action
export const addArticle = article => async dispatch => {
  const config = {
      headers: {
          'Content-Type': 'multipart/form-data',
          'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
          "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
  };
  try{
    const res = await axios.post('/article', article, config);
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
  const config = {
      headers: {
          'Content-Type': 'multipart/form-data',
          'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
          "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
  };
  try{
    const res = await axios.put(`/article/${article.get("id")}`, article, config);
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
  const config = {
      headers: {
          'Content-Type': 'application/json',
          'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
          "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
  };
  try{
    const res = await axios.delete(`/article/${id}`, config);
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
  const config = {
      headers: {
          'Content-Type': 'application/json',
          'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
          "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
  };
  try{
    const res = await axios.post(`/article/status/${article.get("id")}`, article, config);
    dispatch({
        type: APPROVE_ARTICLE,
        payload: res.data
    })
  }
  catch(error){
    alert(error?.response?.data?.error.message ?? error.message)
  }
}
