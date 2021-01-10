import {
    GET_ARTICLE_CATEGORIES
} from '../../../_actions/types';

const initState = {
    token: localStorage.getItem('token'),
    error: null,
    //categories:  [],
    data:  [], 
    category : {},
    isAuthenticated: false,
    loading: true
}; 

export const CategoryArticle = (state = initState, action) => {
    const {type, payload} = action;
    switch (type) {
        case GET_ARTICLE_CATEGORIES :
            return{
            ...state, 
            data: action.payload,
            isAuthenticated: true,
            loading: false,
                
        }
        case 'GET_category':
          return {
            ...state,
            category : action.payload
          }
        case 'ADD_category' :
            return {
                ...state,
<<<<<<< HEAD
                categories: [action.payload, ...state.data]
=======
                data: [action.payload, ...state.data]
>>>>>>> ad5f4803af66c0c71dda61abee0ba7a0fbf02863
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
