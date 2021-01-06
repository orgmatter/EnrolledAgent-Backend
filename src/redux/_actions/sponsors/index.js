import axios from '../../axios/index'

// React Notification
import { NotificationManager } from 'react-notifications';

export const getAllSponsors = () => async dispatch =>{

    const res = await axios.get('/sponsor');
    dispatch ({ 
        type : 'GET_ALL_SPONSORS',
        payload : res.data
    }); 
}

export const sponsorAdd = (sponsor) => async dispatch => {
    const res = await axios.post('/sponsor', sponsor);
    dispatch ({
        type: 'ADD_sponsor',
        payload: res.data
    });
} 

export const deleteSponsor = (id) => dispatch => {
    axios.delete(`/sponsor/${id}`)
    .then(res => {
        dispatch({
            type : 'DELETE_sponsor',
            payload : id 
         })
         NotificationManager.success('Sponsor deleted successfully!', 'Success!', 2000);
     })
     .catch(err => {
         console.log(err)
         NotificationManager.error('Unable to delete Sponsor!', 'Error!', 2000);
     })
}

// export const getSponsor = (id) => async dispatch =>{

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

// export const updateSponsor = (category) =>async dispatch => {

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
