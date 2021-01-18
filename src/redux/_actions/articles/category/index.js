// import axios from '../../../axios';
import axios from '../../../axios/index';
import {
    GET_ARTICLE_CATEGORIES, 
    CREATE_ARTICLE_CATEGORY,
    UPDATE_ARTICLE_CATEGORY,
    DELETE_ARTICLE_CATEGORY
} from '../../../_actions/types';

// React Notification
import { NotificationManager } from 'react-notifications';

export const getArticleCategories = () => async dispatch =>{
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    };
  const res = await axios.get('/category/article',config);
  dispatch ({ 
      type : GET_ARTICLE_CATEGORIES,
      payload : res.data.data,
      
  }); 
}


export const addArticleCategory = (category) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    };
    const res = await axios.post('/category/article', category, config);
    dispatch ({
        type: CREATE_ARTICLE_CATEGORY,
        payload: res.data
    });
}

// Update Article Category Action
export const updateArticleCategory = article => async dispatch => {
  const config = {
      headers: {
          'Content-Type': 'multipart/form-data',
          'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
          "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
  };
  try{
    const res = await axios.put(`/category/article/${article.get("id")}`, article, config);
    dispatch ({
        type: UPDATE_ARTICLE_CATEGORY,
        payload: res.data
    });
    NotificationManager.success('Article Category Updated successfully !','Success!', 2000);
      window.setTimeout(function(){window.location.reload()}, 700);
  }
  catch(error){
    alert(error?.response?.data?.error.message ?? error.message)
  }
}

// Delete Article Category
export const deleteArticleCategory = (id) => async dispatch => {
  const config = {
      headers: {
          'Content-Type': 'application/json',
          'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
          "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
  };
  try{
    const res = await axios.delete(`/category/article/${id}`, config);
    dispatch({
        type: DELETE_ARTICLE_CATEGORY,
        payload: id
    })
    NotificationManager.success('Article Category deleted successfully !','Success!', 2000);
      window.setTimeout(function(){window.location.reload()}, 700);
  }
  catch(error){
    alert(error?.response?.data?.error.message ?? error.message)
  }
}
