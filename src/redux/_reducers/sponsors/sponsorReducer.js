import {
  GET_ALL_SPONSORS, DELETE_SPONSOR
} from '../../_actions/types'

const initState = {
  token: localStorage.getItem('token'),
  error: null,
  sponsors:  [ ],
  sponsor : {},
  
}; 

export default function(state = initState, action) {
  switch (action.type) {
      case GET_ALL_SPONSORS :
          return{
          ...state, 
          sponsors: action.payload,     
      }
      case 'GET_sponsor':
        return {
          ...state,
          singleSponsor : action.payload
        }
      case 'ADD_sponsor' :
          return {
              ...state,
              sponsors: [action.payload, ...state.sponsors]
          } 

      case DELETE_SPONSOR :
          return{
              ...state,
              sponsors: state.sponsors.filter(sponsor => sponsor._id !==action.payload)
          }
      case 'UPDATE_sponsor':
        return {
          ...state,
          sponsors : state.sponsors.map(sponsor => sponsor.id === action.payload.id ? (sponsor = action.payload) : sponsor )
        }
      default : {
          return state
      }
  }
}
