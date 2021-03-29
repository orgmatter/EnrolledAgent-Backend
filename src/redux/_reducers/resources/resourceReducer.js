import {
  CREATE_RESOURCE,
  GET_RESOURCES,
  UPDATE_RESOURCE,
  DELETE_RESOURCE
}
from "../../_actions/types";

const initState = {
  token: localStorage.getItem('token'),
  error: null,
  resources:  [],
  resource : {},
  page: 1,
  prev: true,
  next: false,
  perPage: 10,
  status: "success"
  
}; 

export default function resource(state = initState, action) {
  switch (action.type) {
      case GET_RESOURCES :
          return{
          ...state, 
          resources: action.payload,
          isAuthenticated: true,
          loading: false,     
      }
      case CREATE_RESOURCE :
          return {
              ...state,
              resources: [action.payload, ...state.resources]
          } 

      case DELETE_RESOURCE :
          return{
              ...state,
              resources: state.resources.filter(resource => resource.id !==action.payload)
          }
      case UPDATE_RESOURCE:
        return {
          ...state,
          resources : state.resources.map(resource => resource.id === action.payload.id ? (resource = action.payload) : resource )
        }
      default : {
          return state
      }
  }
}
