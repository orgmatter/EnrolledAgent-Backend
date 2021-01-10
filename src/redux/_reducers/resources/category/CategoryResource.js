const initState = {
  token: localStorage.getItem('token'),
  error: null,
  data:  [],
  category : {},
  isAuthenticated: false,
  loading: true
  
}; 

export const CategoryResource = (state = initState, action) => {
  switch (action.type) {
      case 'GET_RESOURCE_CATEGORIES' :
          return{
          ...state, 
          data: action.payload,     
      }
      case 'GET_category':
        return {
          ...state,
          category : action.payload
        }
      case 'ADD_category' :
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
