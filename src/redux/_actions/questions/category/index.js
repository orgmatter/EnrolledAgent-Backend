import axiosInstance from '../../../axiosInstance';
import { GET_ALL_QUESTION_CATEGORIES, CREATE_QUESTION_CATEGORY, UPDATE_QUESTION_CATEGORY, DELETE_QUESTION_CATEGORY } from '../../types';

// React Notification
import { NotificationManager } from 'react-notifications';

export const getQuestionsCategories = () => async dispatch =>{

  const res = await axiosInstance.get('/category/question');
  dispatch ({ 
      type : GET_ALL_QUESTION_CATEGORIES,
      payload : res.data.data
  }); 
}


export const addQuestionCategory = (category) => async dispatch => {
    const res = await axiosInstance.post('/category/question', category);
    dispatch ({
        type: CREATE_QUESTION_CATEGORY,
        payload: res.data
    });
    NotificationManager.success('Question Category Added successfully !','Success!', 2000);
      window.setTimeout(function(){window.location.reload()}, 700);
} 

//Update question Category
export const updateQuestionCategory = cat => async dispatch => {
  
    try{
      const res = await axiosInstance.put(`/category/question/${cat.get("id")}`, cat);
      dispatch ({
          type: UPDATE_QUESTION_CATEGORY,
          payload: res.data
      });
      NotificationManager.success('Question Category Updated successfully !','Success!', 2000);
      window.setTimeout(function(){window.location.reload()}, 700);
    }
    catch(error){
      alert(error?.response?.data?.error.message ?? error.message)
    }
  }

  //Delete Question Category
  export const deleteQuestionCategory = (id) => async dispatch => {
  
    try{
      await axiosInstance.delete(`/category/question/${id}`);
      dispatch({
          type: DELETE_QUESTION_CATEGORY
      })
      NotificationManager.success('Question Category Deleted Successfully !','Success!', 2000);
      window.setTimeout(function(){window.location.reload()}, 700);
    }
    
    catch(error){
      alert(error?.response?.data?.error.message ?? error.message)
    }
  }