import {
    GET_FAQS,
    DELETE_FAQ,
    CREATE_FAQ,
    UPDATE_FAQ,
    APPROVE_FAQ
    
} from '../../_actions/types';

const initState = {
    error: null,
    faqs:  [], 
    faq : {},
}; 

export default function faq(state = initState, action){
    const {type, payload} = action;
    switch (type) {
        case GET_FAQS :
            return{
            ...state, 
            faqs: payload,
                
        }
        case CREATE_FAQ :
            return {
                ...state,
                faqs: [payload.data, ...state.faqs]

            } 

        case DELETE_FAQ :
            return{ 
                ...state,
                faqs: state.faqs.filter(faq => faq.id !== payload)
            }
            
        case UPDATE_FAQ:
          return {
            ...state,
            faqs : state.faqs.map(faq => faq.id === payload.data.id ? {...faq, ...payload.data} : faq )
          }
          case APPROVE_FAQ:
            return {
              ...state,
              faqs : state.faqs.map(faq => faq.id === payload.data.id ? {...faq, ...payload.data} : faq )
            }
        default : {
            return state
        }
    }
}
