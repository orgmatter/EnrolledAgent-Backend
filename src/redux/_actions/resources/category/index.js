import axios from '../../../axios';
import { GET_RESOURCE_CATEGORIES, CREATE_RESOURCE_CATEGORY, UPDATE_RESOURCE_CATEGORY, DELETE_RESOURCE_CATEGORY } from '../../types';

// React Notification
import { NotificationManager } from 'react-notifications';

export const getResourcesCategories = () => async dispatch =>{

  const config = {
    headers: {
        'Content-Type': 'application/json',
        'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
        "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
  };

  const res = await axios.get('/category/resource', config);
  dispatch ({ 
      type : GET_RESOURCE_CATEGORIES,
      payload : res.data.data
  }); 
}


export const addResourceCategory = (category) => async dispatch => {
    const res = await axios.post('/category/resource', category);
    dispatch ({
        type: CREATE_RESOURCE_CATEGORY,
        payload: res.data
    });
} 

// Update Resource category Action
export const updateResourceCat = category => async dispatch => {
  const config = {
      headers: {
          'Content-Type': 'multipart/form-data',
          'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
          "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
  };
  try{
    const res = await axios.put(`/category/resource/${category.get("id")}`, category, config);
    dispatch ({
        type: UPDATE_RESOURCE_CATEGORY,
        payload: res.data
    });
    NotificationManager.success('Resource Category updated successfully !','Success!', 2000);
      window.setTimeout(function(){window.location.reload()}, 700);
  }
  catch(error){
    alert(error?.response?.data?.error.message ?? error.message)
  }
}

// Delete Resource Category
export const deleteResourceCat = (id) => async dispatch => {
  const config = {
      headers: {
          'Content-Type': 'application/json',
          'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
          "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
  };
  try{
    const res = await axios.delete(`/category/resource/${id}`, config);
    dispatch({
        type: DELETE_RESOURCE_CATEGORY,
        payload: id
    })
    NotificationManager.success('Resource Category deleted successfully !','Success!', 2000);
      window.setTimeout(function(){window.location.reload()}, 700);
  }
  catch(error){
    alert(error?.response?.data?.error.message ?? error.message)
  }
}
