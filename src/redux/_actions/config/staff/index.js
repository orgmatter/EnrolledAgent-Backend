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
    dispatch ({
        type: CREATE_STAFF,
        payload: res.data
    });
} 


