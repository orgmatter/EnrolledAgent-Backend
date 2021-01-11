import {
  CREATE_QUESTION_CATEGORY,
  GET_ALL_QUESTION_CATEGORIES,
} from '../../../_actions/types';

const initState = {
  token: localStorage.getItem('token'),
  error: null,
  categories : [ ],
  category : {},
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: true
  
};


export default function (state = initState, action) {
  switch (action.type) {
      case GET_ALL_QUESTION_CATEGORIES :
          return{
          ...state, 
          categories: action.payload, 
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
