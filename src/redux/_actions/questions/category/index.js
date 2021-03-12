import axiosInstance from '../../../axiosInstance';
import { GET_ALL_QUESTION_CATEGORIES, CREATE_QUESTION_CATEGORY } from '../../types';

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
} 

// export const deleteBlogCategory = (id) => dispatch => {
//     axiosInstance.delete(`/blog-category/${id}`)
//     .then(res => {
//         dispatch({
//             type : 'DELETE_category',
//             payload : id 
//          })
//          NotificationManager.success('Blog category deleted successfully!', 'Success!', 2000);
//      })
//      .catch(err => {
//          console.log(err)
//          NotificationManager.error('Unable to delete Blog category!', 'Error!', 2000);
//      })
// }

// export const getBlogCategory = (id) => async dispatch =>{

//     try {

//         const res = await axiosInstance.get('/blog-category/'+id);
//         dispatch({
//           type : 'GET_category',
//           payload : res.data 
//          })
//     } catch (error) {
//         alert(error) 
//     }
    
// }

// export const updateBlogCategory = (category) =>async dispatch => {

//     try {
//         const res = await axiosInstance.put(`/blog-category/${category.id}`, category);

//      dispatch({
//         type : 'UPDATE_category',
//         payload : res.data
//       })
//       NotificationManager.success('Blog Category edited successfully!', 'Success!', 2000);
//     } catch (error) {
        
//         NotificationManager.error('Unable to edit Blog category!', 'Error!', 2000);
//     }
    
// }
