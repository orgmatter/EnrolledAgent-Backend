import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_USER,
    AUTH_ERROR,
    LOGOUT
} from '../../_actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    loading: true,
    isAuthenticated: false,
    user: null
}

export default function (state = initialState, action){
    const {type, payload} = action;

    switch(type){
        case LOAD_USER:
            return{
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token)
            return{
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false,
                user: payload
            };
        case LOGIN_FAIL:
        case LOGOUT:
        case AUTH_ERROR:
            localStorage.removeItem('token')
            return{
                ...state,
                token: null,
                isAuthenticated: false,
                loading: true 
            }
        default:
            return state;
    }
}   
