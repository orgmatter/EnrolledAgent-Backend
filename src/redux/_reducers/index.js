import { combineReducers } from 'redux'

//Article
import {CategoryArticle} from './articles/category/CategoryArticle';

//Sponsor
import {Sponsor} from './sponsors/Sponsor';

//Resource
import {Resource} from "./resources/Resource";

//Resource Category
import {CategoryResource} from "./resources/category/CategoryResource"

//Agent
import {Agent} from "./agents/Agent";


export default combineReducers({

    //Property
    data : CategoryArticle,
    data: Sponsor,
    data: Resource,
    data: CategoryResource,
    data: Agent
   
})
