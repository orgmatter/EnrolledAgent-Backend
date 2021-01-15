import {
  GET_ALL_AGENTS,
  GET_ALL_CLAIM_LISTING,
  APPROVE_CLAIM_LISTING,
  CANCEL_CLAIM_LISTING

} from '../../_actions/types'
const initState = {
  error: null,
  agents:  [], 
  agent : {},
  listings : [],
  listing: {},
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: true
  
}; 

export default function (state = initState, action) {
  switch (action.type) {
      case GET_ALL_AGENTS :
          return{
          ...state, 
          agents: action.payload,
          isAuthenticated: true,
          loading: false,     
      }
    
      //Claim listing
          case GET_ALL_CLAIM_LISTING :
            return{
              ...state, 
              listings: action.payload,   
          }
          case CANCEL_CLAIM_LISTING :
            return{
                ...state,
                listings: state.listings.filter(listing => listing.id !== action.payload)
            }
            case APPROVE_CLAIM_LISTING :
            return{
                ...state, 
                listings: state.listings.filter(listing => listing.id !== action.payload)
            }
      default : {
          return state
      }
  }
}
