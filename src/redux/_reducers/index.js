import { combineReducers } from 'redux';
import alert from './alerts/alert';
import auth from './auth/auth';
import CategoryArticle from './articles/category/CategoryArticle';
export default combineReducers({

    //alert,
    auth,
    data : CategoryArticle,
});
