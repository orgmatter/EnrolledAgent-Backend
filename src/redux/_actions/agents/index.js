import axios from '../../axios/'
import {
    GET_ALL_AGENTS,
    GET_ALL_CLAIM_LISTING
} from '../types'
// React Notification
import { NotificationManager } from 'react-notifications';

export const getAgents = () => async dispatch =>{
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    };
    const res = await axios.get('/agent', config);
    dispatch ({ 
        type : GET_ALL_AGENTS,
        payload : res.data.data
    });   
}
 
export const agentUpload = (agent) => async dispatch => {
  const res = await axios.post('/agent/upload', agent);
  dispatch ({
      type: 'ADD_agent', 
      payload: res.data
  });
}


//Account claims

export const getClaims = () => async dispatch =>{
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    };
    const res = await axios.get('/claim', config);
    dispatch ({ 
        type : GET_ALL_CLAIM_LISTING,
        payload : res.data.data
    });   
}

