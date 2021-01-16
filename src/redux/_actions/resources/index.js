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

// Add New Article Action
export const addResource = resource => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    };
    try{
      const res = await axios.post('/resource', resource, config);
      dispatch ({
          type: CREATE_RESOURCE,
          payload: res.data 
      });
      NotificationManager.success('Resource added successfully !','Success!', 2000);
        window.setTimeout(function(){window.location.reload()}, 700);
    }
    catch(error){
      alert(error?.response?.data?.error.message ?? error.message)
    }
  }



// export const ResourceAdd = (resource) => async dispatch => {
//     const res = await axios.post('/resource', resource);
//     dispatch ({
//         type: CREATE_RESOURCE,
//         payload: res.data
//     });
// } 
 

