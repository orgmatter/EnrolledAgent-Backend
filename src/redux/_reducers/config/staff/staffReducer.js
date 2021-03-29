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

export default function staff(state = initState, action){
  const {type, payload} = action;
  switch (type) {
      case GET_ALL_STAFFS :
          return{
          ...state, 
          staffs: payload
              
      }
      case GET_STAFF_DETAILS:
        return {
          ...state,
          staff : payload
        }
      case CREATE_STAFF :
          return {
              ...state,
              staffs: [payload, ...state.staffs]

          } 
      case DELETE_STAFF :
        return {
          ...state,
          staffs: state.staffs.filter(staff => staff.id !== payload)
        }
      case UPDATE_STAFF :
        return {
          ...state,
          staffs: state.staffs.map(staff => staff.id === payload.data.id ? {...staff, ...payload.data} : staff )
        }
      default : {
          return state
      }
  }
}
