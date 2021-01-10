import { combineReducers } from 'redux';
import alert from './alerts/alert';
import auth from './auth/auth';
import {CategoryArticle} from './articles/category/CategoryArticle';
import Sponsor from './sponsors/Sponsor';
import {CategoryResource} from './resources/category/CategoryResource';
export default combineReducers({

    //alert,
    auth,
    data: CategoryArticle,
    data: Sponsor,
    data: CategoryResource

});
