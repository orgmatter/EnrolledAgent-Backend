import { combineReducers } from 'redux';
import alert from './alerts/alert';
import auth from './auth/auth';
import articleReducer from './articles/article/articleReducer';
import sponsorReducer from './sponsors/sponsorReducer';
import agentReducer from './agents/agentReducer';
import userReducer from './users/userReducer';



export default combineReducers({

    //alert,
    auth,
    articles : articleReducer,
    sponsors : sponsorReducer,
    agents : agentReducer,
    users : userReducer,
});
