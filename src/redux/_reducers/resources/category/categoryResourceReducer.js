import {
  GET_RESOURCE_CATEGORIES, CREATE_RESOURCE_CATEGORY, DELETE_RESOURCE_CATEGORY, UPDATE_RESOURCE_CATEGORY
} from "../../../_actions/types";
const initState = {
  token: localStorage.getItem('token'),
  error: null,
  rescategories : [],
  category: {},
  page: 1,
  prev: true,
  next: false,
  perPage: 10,
  status: "success"
  
}; 

export default function categoryResource(state = initState, action) {
  switch (action.type) {
      case GET_RESOURCE_CATEGORIES :
          return{
          ...state, 
          rescategories: action.payload, 
      }
      case CREATE_RESOURCE_CATEGORY :
          return {
              ...state,
              rescategories: [action.payload, ...state.rescategories]
          } 

      case DELETE_RESOURCE_CATEGORY :
          return{
              ...state,
              rescategories: state.rescategories.filter(category => category.id !==action.payload)
          }
      
      case UPDATE_RESOURCE_CATEGORY:
        return {
          ...state,
          rescategories : state.rescategories.map(category => category.id === action.payload.data.id ? {...category, ...action.payload.data} : category )
          
        }
      default : {
          return state
      }
  }
}
