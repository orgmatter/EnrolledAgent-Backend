import {
  GET_ALL_AGENTS,
  GET_ALL_CLAIM_LISTING,
  APPROVE_CLAIM_LISTING,
  CANCEL_CLAIM_LISTING,
  GET_ALL_LISTING_REQUEST,
  GET_LISTING_REQUEST,
  APPROVE_LISTING_REQUEST,
  REJECT_LISTING_REQUEST

} from '../../_actions/types'
const initState = {
  error: null,
  agents:  [], 
  agent : {},
  listings : [],
  listing: {},
  requests: [],
  request: {},
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
    
      //Claim 
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
            //Listing Request
          case GET_ALL_LISTING_REQUEST :
            return{
              ...state, 
              requests: action.payload,   
          }
          case REJECT_LISTING_REQUEST :
            return{
                ...state,
                requests: state.requests.filter(request => request.id !== action.payload)
            }
            case APPROVE_LISTING_REQUEST :
            return{
                ...state, 
                requests: state.requests.filter(request => request.id !== action.payload)
            }
      default : {
          return state
      }
  }
}
