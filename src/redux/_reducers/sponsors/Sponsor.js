const initState = {
  error: null,
  data:  [],
  sponsor : {}
  
}; 

export const Sponsor = (state = initState, action) => {
  switch (action.type) {
      case 'GET_ALL_SPONSORS' :
          return{
          ...state, 
          data: action.payload,     
      }
      case 'GET_sponsor':
        return {
          ...state,
          sponsor : action.payload
        }
      case 'ADD_sponsor' :
          return {
              ...state,
              sponsors: [action.payload, ...state.sponsors]
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
