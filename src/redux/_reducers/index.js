import { combineReducers } from 'redux';
import alert from './alerts/alert';
import auth from './auth/auth';
import articleReducer from './articles/article/articleReducer';
import sponsorReducer from './sponsors/sponsorReducer';
import agentReducer from './agents/agentReducer';
import userReducer from './users/userReducer';
import resourceReducer from './resources/resourceReducer';
import categoryResourceReducer from './resources/category/categoryResourceReducer';
import categoryArticleReducer from './articles/category/categoryArticleReducer';
import questionReducer from './questions/questionReducer';
import categoryQuestionReducer from './questions/category/categoryQuestionReducer';
import logReducer from './logs/logReducer';
import configReducer from './config/configReducer'

export default combineReducers({

    //alert,
    auth,
    articles : articleReducer,
    sponsors : sponsorReducer,
    agents : agentReducer,
    listings : agentReducer,
    users : userReducer,
    resources: resourceReducer,
    categories: categoryResourceReducer,
    categories: categoryArticleReducer,
    questions: questionReducer,
    categories: categoryQuestionReducer,
    logs: logReducer,
    payments: configReducer

});
