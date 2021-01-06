import { combineReducers } from 'redux'

//Article
import {CategoryArticle} from './articles/category/CategoryArticle';

//Sponsor
import {Sponsor} from './sponsors/Sponsor';

//Resource
import {Resource} from "./resources/Resource"


export default combineReducers({

    //Property
    data : CategoryArticle,
    data: Sponsor,
    data: Resource
   
})
