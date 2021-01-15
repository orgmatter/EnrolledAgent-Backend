import {
    GET_ALL_USERS,
    DEACTIVATE_USER,
    ACTIVATE_USER
}from '../../_actions/types';

const initState = {
    error: null,
    users:  [], 
    user: {},
    agent : {},
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: true
    
  }; 
  
  export default function (state = initState, action) {
    switch (action.type) {
        case GET_ALL_USERS :
            return{
            ...state, 
            users: action.payload,    
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
   
        case DEACTIVATE_USER :
            return{
                ...state,
                users: state.users.filter(user => user.id !== action.payload)
            }
        case ACTIVATE_USER :
            return{
                ...state,
                users: state.users.filter(user => user.id !== action.payload)
            }
        // case 'UPDATE_agent':
        //   return {
        //     ...state,
        //     agents : state.agents.map(agent => agent.id === action.payload.id ? (agent = action.payload) : agent )
        //   }
        default : {
            return state
        }
    }
  }
  