import axios from '../../../axios/index'
import {
    GET_ALL_STAFFS, CREATE_STAFF, GET_STAFF_DETAILS
} from '../../types'

// React Notification
import { NotificationManager } from 'react-notifications';

export const getAllStaffs = () => async dispatch =>{

    const config = {
        headers: { 
            'Content-Type': 'application/json',
            'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    };
    const res = await axios.get('/staff/', config);
    dispatch ({ 
        type : GET_ALL_STAFFS,
        payload : res.data.data 
    }); 
}

export const addStaff = (staff) => async dispatch => {
    const res = await axios.post('/staff', staff);
    try{
        
        dispatch ({
            type: CREATE_STAFF,
            payload: res.data
        });
        NotificationManager.success('Staff Created Successfully. Password has been sent to email !','Success!', 2000);
        //window.setTimeout(function(){window.location.reload()}, 700);
    }
    catch(error){
        NotificationManager.error(error?.response?.data?.error.message ?? error.message, 2000);
        //window.setTimeout(function(){window.location.reload()}, 700);
    }
} 


