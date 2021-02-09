import axiosInstance from '../../axiosInstance'
import {
  GET_ALL_QUESTIONS
} from '../types'
// React Notification
import { NotificationManager } from 'react-notifications';

export const getQuestions = () => async dispatch =>{
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    };
    const res = await axiosInstance.get('/question', config);
    dispatch ({ 
        type : GET_ALL_QUESTIONS,
        payload : res.data.data
    });   
}
 

// export const agentAdd = (agent) => async dispatch => {
//     const res = await axiosInstance.post('/agent', agent);
//     dispatch ({
//         type: 'ADD_agent',
//         payload: res.data
//     });
// } 

// export const deleteagent = (id) => dispatch => {
//     axiosInstance.delete(`/agent/${id}`)
//     .then(res => {
//         dispatch({
//             type : 'DELETE_agent',
//             payload : id 
//          })
//          NotificationManager.success('agent deleted successfully!', 'Success!', 2000);
//      })
//      .catch(err => {
//          console.log(err)
//          NotificationManager.error('Unable to delete agent!', 'Error!', 2000);
//      })
// }

// export const getagent = (id) => async dispatch =>{

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

// export const updateagent = (category) =>async dispatch => {

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
