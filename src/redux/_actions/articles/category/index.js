// import axiosInstance from '../../../axiosInstance';
import axiosInstance from '../../../axiosInstance/';
import {
    GET_ARTICLE_CATEGORIES, 
    CREATE_ARTICLE_CATEGORY,
    UPDATE_ARTICLE_CATEGORY,
    DELETE_ARTICLE_CATEGORY
} from '../../../_actions/types';

// React Notification
import { NotificationManager } from 'react-notifications';

export const getArticleCategories = () => async dispatch =>{
    
  const res = await axiosInstance.get('/category/article');
  dispatch ({ 
      type : GET_ARTICLE_CATEGORIES,
      payload : res.data.data,
      
  }); 
}


export const addArticleCategory = (category) => async dispatch => {
    
    const res = await axiosInstance.post('/category/article', category);
    dispatch ({
        type: CREATE_ARTICLE_CATEGORY,
        payload: res.data
    });
}

// Update Article Category Action
export const updateArticleCategory = article => async dispatch => {
 
  try{
    const res = await axiosInstance.put(`/category/article/${article.get("id")}`, article);
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
  try{
    const res = await axiosInstance.delete(`/category/article/${id}`);
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
