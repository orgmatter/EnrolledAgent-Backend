import {
    GET_ARTICLES,
    DELETE_ARTICLE
} from '../../../_actions/types';

const initState = {
    error: null,
    articles:  [], 
    article : {},
}; 

export default function (state = initState, action){
    const {type, payload} = action;
    switch (type) {
        case GET_ARTICLES :
            return{
            ...state, 
            articles: action.payload,
                
        }
        // case GET_ARTICLE:
        //   return {
        //     ...state,
        //     article : action.payload
        //   }
        // case ADD_ARTICLE :
        //     return {
        //         ...state,
        //         data: [action.payload, ...state.data]

        //     } 

        case DELETE_ARTICLE :
            return{
                ...state,
                articles: state.articles.filter(article => article.id !== action.payload)
            }
            
        // case UPDATE_ARTICLE:
        //   return {
        //     ...state,
        //     articles : state.articles.map(article => article.id === action.payload.id ? (article = action.payload) : article )
        //   }
        default : {
            return state
        }
    }
}
