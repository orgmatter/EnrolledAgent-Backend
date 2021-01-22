import {
    GET_PAYMENT_DATA,
    UPDATE_PAYMENT_DATA
}from '../../_actions/types';

const initState = {
    error: null,
    payment:  {}, 
    payments : [],
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: true
    
  }; 
  
  export default function (state = initState, action) {
    switch (action.type) {
        case GET_PAYMENT_DATA :
            return{
            ...state, 
            payment: action.payload,    
        }
       
        case UPDATE_PAYMENT_DATA :
            return {
                ...state,
                payments: [action.payload, ...state.payments]

            } 
        default : {
            return state
        }
    }
  }
  