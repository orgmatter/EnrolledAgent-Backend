import { combineReducers } from 'redux';
import alert from './alerts/alert';
import auth from './auth/auth';
import articleReducer from './articles/article/articleReducer';
import sponsorReducer from './sponsors/sponsorReducer';




export default combineReducers({

    //alert,
    auth,
    articles : articleReducer,
    sponsors : sponsorReducer,
});
