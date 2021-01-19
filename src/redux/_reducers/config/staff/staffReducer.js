import {
  GET_ALL_STAFFS, 
  GET_STAFF_DETAILS,
  CREATE_STAFF,
} from '../../../_actions/types';

const initState = {
  token: localStorage.getItem('token'),
  error: null,
  staffs:  [ ], 
  staff : {},
  isAuthenticated: false,
  loading: true
}; 

export default function (state = initState, action){
  const {type, payload} = action;
  switch (type) {
      case GET_ALL_STAFFS :
          return{
          ...state, 
          staffs: action.payload
              
      }
      case GET_STAFF_DETAILS:
        return {
          ...state,
          staff : action.payload
        }
      case CREATE_STAFF :
          return {
              ...state,
              staffs: [action.payload, ...state.staffs]

          } 
      default : {
          return state
      }
  }
}
