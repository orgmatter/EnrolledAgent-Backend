import axiosInstance from '../../axiosInstance'
import {
  GET_ALL_QUESTIONS
} from '../types'

export const getQuestions = () => async dispatch =>{
    
    const res = await axiosInstance.get('/question');
    dispatch ({ 
        type : GET_ALL_QUESTIONS,
        payload : res.data.data
    });   
}