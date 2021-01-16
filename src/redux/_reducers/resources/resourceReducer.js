import {
  CREATE_RESOURCE,
  GET_RESOURCES
}
from "../../_actions/types";

const initState = {
  token: localStorage.getItem('token'),
  error: null,
  resources:  [],
  resource : {},
  isAuthenticated: false,
  loading: true
  
}; 

export default function (state = initState, action) {
  switch (action.type) {
      case GET_RESOURCES :
          return{
          ...state, 
          resources: action.payload,
          isAuthenticated: true,
          loading: false,     
      }
      case 'GET_resource':
        return {
          ...state,
          resource : action.payload
        }
      case CREATE_RESOURCE :
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
