import {
    GET_ARTICLE_CATEGORIES, 
    GET_ARTICLE_CATEGORY,
    CREATE_ARTICLE_CATEGORY,
    DELETE_ARTICLE_CATEGORY,
    UPDATE_ARTICLE_CATEGORY
} from '../../../_actions/types';

const initState = {
    token: localStorage.getItem('token'),
    error: null,
    //categories:  [],
    categories:  [ ], 
    category : {},
    isAuthenticated: false,
    loading: true
}; 

export default function (state = initState, action){
    const {type, payload} = action;
    switch (type) {
        case GET_ARTICLE_CATEGORIES :
            return{
            ...state, 
            categories: action.payload
                
        }
        case GET_ARTICLE_CATEGORY:
          return {
            ...state,
            category : action.payload
          }
        case CREATE_ARTICLE_CATEGORY :
            return {
                ...state,
                categories: [action.payload, ...state.categories]

            } 

        case DELETE_ARTICLE_CATEGORY :
            return{
                ...state,
                categories: state.categories.filter(category => category.id !==action.payload)
            }
        case UPDATE_ARTICLE_CATEGORY:
          return {
            ...state,
            categories : state.categories.map(category => category.id === action.payload.id ? (category = action.payload) : category )
          }
        default : {
            return state
        }
    }
}
