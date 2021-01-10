import { setAlert } from './alert';
import axios from 'axios';
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_USER,
    AUTH_ERROR,
    LOGOUT
} from './types'
import setAuthToken from '../../Utils/setAuthToken';

//Admin Login
export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb'
        }
    };

    const body = JSON.stringify({email, password});
    try {
        const res = await axios.post('https://api.enrolledagent.org/login',body,config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        const errors = err.response.data.error;
        if(errors){
            errors.forEach(error => dispatch (setAlert(error.message, 'danger')));
        }
        dispatch({
            type: LOGIN_FAIL
        })
    }
}   

export const loadUser = () => async dispatch => {
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }
    try {
        const res = await axios.get('https://api.enrolledagent.org/login');
        dispatch({
            type: LOAD_USER,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    })
}