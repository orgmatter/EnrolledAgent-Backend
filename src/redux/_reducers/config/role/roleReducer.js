import {
  GET_ALL_ROLE,
  DELETE_ROLE,
  CREATE_ROLE,
  UPDATE_ROLE,
  
} from '../../../_actions/types';

const initState = {
  error: null,
  roles:  [], 
  role : {},
  page: 1,
  prev: true,
  next: false,
  perPage: 10,
  status: "success"
}; 

export default function role(state = initState, action){
  const {type, payload} = action;
  switch (type) {
      case GET_ALL_ROLE :
          return{
          ...state, 
          roles: payload,
              
      }
      case CREATE_ROLE :
          return {
              ...state,
              roles: [payload.data, ...state.roles]

          } 

      case DELETE_ROLE :
          return{ 
              ...state,
              roles: state.roles.filter(role => role.id !== payload) 
          }
          
      case UPDATE_ROLE:
        return {
          ...state,
          roles : state.roles.map(role => role.id === payload.data.id ? {...role, ...payload.data} : role )
        }
      default : {
          return state
      }
  }
}
