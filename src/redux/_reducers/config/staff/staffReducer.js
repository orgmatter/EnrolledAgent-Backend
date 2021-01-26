import {
  GET_ALL_STAFFS, 
  GET_STAFF_DETAILS,
  CREATE_STAFF,
  DELETE_STAFF,
  UPDATE_STAFF
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
      case DELETE_STAFF :
        return {
          ...state,
          staffs: state.staffs.filter(staff => staff.id !== action.payload)
        }
      case UPDATE_STAFF :
        return {
          ...state,
          staffs: state.staffs.map(staff => staff.id === action.payload.data.id ? {...staff, ...action.payload.data} : staff )
        }
      default : {
          return state
      }
  }
}
