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

export default function (state = initState, action){
  const {type, payload} = action;
  switch (type) {
      case GET_ALL_ROLE :
          return{
          ...state, 
          roles: action.payload,
              
      }
      case CREATE_ROLE :
          return {
              ...state,
              roles: [action.payload.data, ...state.roles]

          } 

      case DELETE_ROLE :
          return{ 
              ...state,
              roles: state.roles.filter(role => role.id !== action.payload)
          }
          
      case UPDATE_ROLE:
        return {
          ...state,
          roles : state.roles.map(role => role.id === action.payload.data.id ? {...role, ...action.payload.data} : role )
        }
      default : {
          return state
      }
  }
}
