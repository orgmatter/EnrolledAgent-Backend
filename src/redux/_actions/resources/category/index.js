import axiosInstance from '../../../axiosInstance';
import { GET_RESOURCE_CATEGORIES, CREATE_RESOURCE_CATEGORY, UPDATE_RESOURCE_CATEGORY, DELETE_RESOURCE_CATEGORY } from '../../types';

// React Notification
import { NotificationManager } from 'react-notifications';

export const getResourcesCategories = () => async dispatch =>{

  const res = await axiosInstance.get('/category/resource');
  dispatch ({ 
      type : GET_RESOURCE_CATEGORIES,
      payload : res.data.data
  }); 
}


export const addResourceCategory = (category) => async dispatch => {
    const res = await axiosInstance.post('/category/resource', category);
    dispatch ({
        type: CREATE_RESOURCE_CATEGORY,
        payload: res.data
    });
} 

// Update Resource category Action
export const updateResourceCat = category => async dispatch => {
  
  try{
    const res = await axiosInstance.put(`/category/resource/${category.get("id")}`, category);
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
  
  try{
    const res = await axiosInstance.delete(`/category/resource/${id}`);
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
