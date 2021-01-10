const initState = {
  token: localStorage.getItem('token'),
  error: null,
  data:  [],
  resource : {},
  isAuthenticated: false,
  loading: true
  
}; 

export const Resource = (state = initState, action) => {
  switch (action.type) {
      case 'GET_ALL_RESOURCES' :
          return{
          ...state, 
          data: action.payload,     
      }
      case 'GET_resource':
        return {
          ...state,
          resource : action.payload
        }
      case 'ADD_resource' :
          return {
              ...state,
              resources: [action.payload, ...state.resources]
          } 

      case 'DELETE_resource' :
          return{
              ...state,
              resources: state.resources.filter(resource => resource.id !==action.payload)
          }
      case 'UPDATE_resource':
        return {
          ...state,
          resources : state.resources.map(resource => resource.id === action.payload.id ? (resource = action.payload) : resource )
        }
      default : {
          return state
      }
  }
}
