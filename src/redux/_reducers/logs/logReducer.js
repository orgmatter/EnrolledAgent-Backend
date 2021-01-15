import {
    GET_LOGS,
    DELETE_LOG
}from '../../_actions/types';

const initState = {
    error: null,
    logs:  [], 
    log : {},
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: true
    
  }; 
  
  export default function (state = initState, action) {
    switch (action.type) {
        case GET_LOGS :
            return{
            ...state, 
            logs: action.payload,    
        }
        case DELETE_LOG :
            return{
                ...state,
                logs: state.logs.filter(log => log._id !==action.payload._id)
                
            }
      
        default : {
            return state
        }
    }
  }
  