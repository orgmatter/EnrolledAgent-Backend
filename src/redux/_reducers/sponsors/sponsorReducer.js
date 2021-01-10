import {
  GET_ALL_SPONSORS
} from '../../_actions/types'

const initState = {
  token: localStorage.getItem('token'),
  error: null,
  sponsors:  [],
  singleSponsor : {},
  
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
              data: [action.payload, ...state.data]
          } 

      case 'DELETE_sponsor' :
          return{
              ...state,
              sponsors: state.sponsors.filter(sponsor => sponsor.id !==action.payload)
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
