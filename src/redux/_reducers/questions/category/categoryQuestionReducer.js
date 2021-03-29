import {
  CREATE_QUESTION_CATEGORY,
  DELETE_QUESTION_CATEGORY,
  GET_ALL_QUESTION_CATEGORIES,
  UPDATE_QUESTION_CATEGORY
} from '../../../_actions/types';

const initState = {
  token: localStorage.getItem('token'),
  error: null,
  quecategories : [ ],
  category : {},
  isAuthenticated: false,
  loading: true
  
};


export default function categoryQuestion(state = initState, action) {
  switch (action.type) {
      case GET_ALL_QUESTION_CATEGORIES :
          return{
          ...state, 
          quecategories: action.payload, 
          isAuthenticated: true,
          loading: false,    
      }
      case 'GET_category':
        return {
          ...state,
          category : action.payload
        }
      case CREATE_QUESTION_CATEGORY :
          return {
              ...state,
              quecategories: [action.payload, ...state.quecategories]
          } 

      case DELETE_QUESTION_CATEGORY :
          return{
              ...state,
              quecategories: state.quecategories.filter(cat => cat.id !==action.payload)
          }
      case UPDATE_QUESTION_CATEGORY:
        return {
          ...state,
          quecategories : state.quecategories.map(category => category.id === action.payload.id ? (category = action.payload) : category )
        }
      default : {
          return state
      }
  }
}
