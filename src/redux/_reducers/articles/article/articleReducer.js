import {
    GET_ARTICLES,
    DELETE_ARTICLE,
    CREATE_ARTICLE,
    UPDATE_ARTICLE,
    APPROVE_ARTICLE
    
} from '../../../_actions/types';

const initState = {
    error: null,
    articles:  [], 
    article : {},
    page: 1,
    prev: true,
    next: false,
    perPage: 10,
    status: "success"
}; 

export default function article(state = initState, action){
    const {type, payload} = action;
    switch (type) {
        case GET_ARTICLES :
            return{
            ...state, 
            articles: payload,
                
        }
        case CREATE_ARTICLE :
            return {
                ...state,
                articles: [payload.data, ...state.articles]

            } 

        case DELETE_ARTICLE :
            return{ 
                ...state,
                articles: state.articles.filter(article => article.id !== payload)
            }
            
        case UPDATE_ARTICLE:
          return {
            ...state,
            articles : state.articles.map(article => article.id === payload.data.id ? {...article, ...payload.data} : article )
          }
          case APPROVE_ARTICLE:
            return {
              ...state,
              articles : state.articles.map(article => article.id === payload.data.id ? {...article, ...payload.data} : article )
            }
        default : {
            return state
        }
    }
}
