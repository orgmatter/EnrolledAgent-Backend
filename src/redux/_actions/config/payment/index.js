import axios from '../../../axios'
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
//     const res = await axios.get('/config', config);
//     dispatch ({  
//         type : GET_PAYMENT_DATA,
//         payload : res.data.data
//     });   
// }
export const updatePaymentData = (payment) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    };
    
    const res = await axios.update('/config', payment, config);
    dispatch ({
        type: UPDATE_PAYMENT_DATA,
        payload: res.data
    });
} 

 
