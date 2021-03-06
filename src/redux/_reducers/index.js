import { combineReducers } from 'redux';
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
import staffReducer from './config/staff/staffReducer'
import faqReducer from './faq/faqReducer';
import roleReducer from './config/role/roleReducer'
export default combineReducers({

    //alert,
    auth,
    articles : articleReducer,
    sponsors : sponsorReducer,
    agents : agentReducer,
    listings : agentReducer,
    requests : agentReducer,
    users : userReducer,
    resources: resourceReducer,
    rescategories: categoryResourceReducer,
    categories: categoryArticleReducer,
    questions: questionReducer,
    quecategories: categoryQuestionReducer,
    logs: logReducer,
    payments: configReducer,
    staffs: staffReducer,
    faqs: faqReducer,
    roles: roleReducer
});
