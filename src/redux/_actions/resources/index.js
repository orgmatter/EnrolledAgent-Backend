import axios from '../../axios/index';
import { GET_RESOURCES, CREATE_RESOURCE } from '../types';

// React Notification
import { NotificationManager } from 'react-notifications';

export const getResources = () => async dispatch =>{

    const config = {
      headers: {
          'Content-Type': 'application/json',
          'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
          "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    };

    const res = await axios.get('/resource', config);
    dispatch ({ 
        type : GET_RESOURCES,
        payload : res.data.data
    }); 
}

export const ResourceAdd = (resource) => async dispatch => {
    const res = await axios.post('/resource', resource);
    dispatch ({
        type: CREATE_RESOURCE,
        payload: res.data
    });
} 

// export const deleteBlogCategory = (id) => dispatch => {
//     axios.delete(`/blog-category/${id}`)
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

//         const res = await axios.get('/blog-category/'+id);
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
//         const res = await axios.put(`/blog-category/${category.id}`, category);

//      dispatch({
//         type : 'UPDATE_category',
//         payload : res.data
//       })
//       NotificationManager.success('Blog Category edited successfully!', 'Success!', 2000);
//     } catch (error) {
        
//         NotificationManager.error('Unable to edit Blog category!', 'Error!', 2000);
//     }
    
// }