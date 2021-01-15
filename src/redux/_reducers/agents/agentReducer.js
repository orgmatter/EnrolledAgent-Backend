import {
  GET_ALL_AGENTS,
  GET_ALL_CLAIM_LISTING,

} from '../../_actions/types'
const initState = {
  error: null,
  agents:  [], 
  agent : {},
  listings : [],
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
      // case 'GET_agent':
      //   return {
      //     ...state,
      //     agent : action.payload
      //   }
      // case 'ADD_agent' :
      //     return {
      //         ...state,
      //         agents: [action.payload, ...state.agents]
      //     } 

      // case 'DELETE_agent' :
      //     return{
      //         ...state,
      //         agents: state.agents.filter(agent => agent.id !==action.payload)
      //     }
      // case 'UPDATE_agent':
      //   return {
      //     ...state,
      //     agents : state.agents.map(agent => agent.id === action.payload.id ? (agent = action.payload) : agent )
      //   }

      //Claim listing
          case GET_ALL_CLAIM_LISTING :
            return{
              ...state, 
              listings: action.payload,   
          }
      default : {
          return state
      }
  }
}
