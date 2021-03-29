import {
  DELETE_QUESTION,
  GET_ALL_QUESTIONS,
} from '../../_actions/types';

const initState = {
  error: null,
  questions:  [ ], 
  question : {},
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: true
}; 

export default function question (state = initState, action){
  const {type, payload} = action;
  switch (type) {
      case GET_ALL_QUESTIONS :
          return{
          ...state, 
          questions: payload,
          isAuthenticated: true,
          loading: false,
              
      }
      // case GET_question:
      //   return {
      //     ...state,
      //     question : payload
      //   }
      // case ADD_question :
      //     return {
      //         ...state,
      //         data: [payload, ...state.data]

      //     } 

      case DELETE_QUESTION :
          return{
              ...state,
              questions: state.questions.filter(question => question.id !== payload)
          }
          
      // case UPDATE_question:
      //   return {
      //     ...state,
      //     questions : state.questions.map(question => question.id === payload.id ? (question = payload) : question )
      //   }
      default : {
          return state
      }
  }
}
