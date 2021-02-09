import axiosInstance from '../../axiosInstance'
import {
    GET_LOGS,
    DELETE_LOG
} from '../types'
// React Notification
import { NotificationManager } from 'react-notifications';

export const getLogs = () => async dispatch =>{
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    };
    const res = await axiosInstance.get('/log', config);
    dispatch ({ 
        type : GET_LOGS,
        payload : res.data.data
    });   
}
export const deleteLog = (_id) => dispatch => {
    axiosInstance.delete(`/log/${_id}`)
    .then(res => {
        dispatch({
            type : DELETE_LOG,
            payload : _id 
         })
         NotificationManager.success('Log deleted successfully!', 'Success!', 2000);
     })
     .catch(err => {
         console.log(err)
         NotificationManager.error('Unable to log Sponsor!', 'Error!', 2000);
     })
}

 
