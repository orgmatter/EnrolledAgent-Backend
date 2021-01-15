const initState = {
  token: localStorage.getItem('token'),
  error: null,
  rescategories : [ ],
  category: {},
  isAuthenticated: false,
  loading: true
  
}; 

export default function (state = initState, action) {
  switch (action.type) {
      case 'GET_RESOURCE_CATEGORIES' :
          return{
          ...state, 
          rescategories: action.payload, 
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
              rescategories: [action.payload, ...state.rescategories]
          } 

      case 'DELETE_category' :
          return{
              ...state,
              rescategories: state.rescategories.filter(category => category.id !==action.payload)
          }
      case 'UPDATE_category':
        return {
          ...state,
          rescategories : state.rescategories.map(category => category.id === action.payload.id ? (category = action.payload) : category )
        }
      default : {
          return state
      }
  }
}
