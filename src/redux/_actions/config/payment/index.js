import axiosInstance from '../../../axiosInstance'
import {
    UPDATE_PAYMENT_DATA
} from '../../types'

// React Notification
import { NotificationManager } from 'react-notifications';

export const updatePaymentData = payment => async dispatch => {
   
    const res = await axiosInstance.post('/config', payment);
    dispatch ({
        type: UPDATE_PAYMENT_DATA,
        payload: res.data
    });
    NotificationManager.success('Payment amount updated successfully !','Success!', 2000);
    window.setTimeout(function(){window.location.reload()}, 700);
} 

 
 