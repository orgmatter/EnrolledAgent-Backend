import {
    GET_ARTICLE_CATEGORIES, CREATE_ARTICLE_CATEGORY
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
        case 'GET_category':
          return {
            ...state,
            category : action.payload
          }
        case CREATE_ARTICLE_CATEGORY :
            return {
                ...state,
                categories: [action.payload, ...state.categories]

            } 

        case 'DELETE_category' :
            return{
                ...state,
                categories: state.categories.filter(category => category.id !==action.payload)
            }
        case 'UPDATE_category':
          return {
            ...state,
            categories : state.categories.map(category => category.id === action.payload.id ? (category = action.payload) : category )
          }
        default : {
            return state
        }
    }
}
