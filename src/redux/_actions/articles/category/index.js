// import axios from '../../../axios';
import axios from 'axios';
import {
    GET_ARTICLE_CATEGORIES, 
    CREATE_ARTICLE_CATEGORY
} from '../../../_actions/types';
// React Notification
import { NotificationManager } from 'react-notifications';

export const getArticleCategories = () => async dispatch =>{
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    };
  const res = await axios.get('https://api.enrolledagent.org/category/article',config);
  dispatch ({ 
      type : GET_ARTICLE_CATEGORIES,
      payload : res.data.data,
      
  }); 
}


export const addArticleCategory = (category) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    };
    const res = await axios.post('/category/article', category, config);
    dispatch ({
        type: CREATE_ARTICLE_CATEGORY,
        payload: res.data
    });
} 
