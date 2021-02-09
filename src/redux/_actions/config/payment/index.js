import axiosInstance from '../../../axiosInstance'
import {
    GET_PAYMENT_DATA,
    UPDATE_PAYMENT_DATA
} from '../../types'

// React Notification
import { NotificationManager } from 'react-notifications';

// export const getPaymentData = () => async dispatch =>{
//     const config = {
//         headers: {
//             'Content-Type': 'application/json',
//             'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
//             "Authorization": `Bearer ${localStorage.getItem("token")}`
//         }
//     };
//     const res = await axiosInstance.get('/config', config);
//     dispatch ({  
//         type : GET_PAYMENT_DATA,
//         payload : res.data.data
//     });   
// }
export const updatePaymentData = payment => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    };
    
    const res = await axiosInstance.post('/config', payment, config);
    dispatch ({
        type: UPDATE_PAYMENT_DATA,
        payload: res.data
    });
    NotificationManager.success('Payment amount updated successfully !','Success!', 2000);
    window.setTimeout(function(){window.location.reload()}, 700);
} 

 
 