const initState = {
  error: null,
  data:  [],
  agent : {}
  
}; 

export const Agent = (state = initState, action) => {
  switch (action.type) {
      case 'GET_ALL_AGENTS' :
          return{
          ...state, 
          data: action.payload,     
      }
      case 'GET_agent':
        return {
          ...state,
          agent : action.payload
        }
      case 'ADD_agent' :
          return {
              ...state,
              agents: [action.payload, ...state.agents]
          } 

      case 'DELETE_agent' :
          return{
              ...state,
              agents: state.agents.filter(agent => agent.id !==action.payload)
          }
      case 'UPDATE_agent':
        return {
          ...state,
          agents : state.agents.map(agent => agent.id === action.payload.id ? (agent = action.payload) : agent )
        }
      default : {
          return state
      }
  }
}
