import { CREATE_CLIENT } from '../actions/types'

export default (state={}, action) => {
    switch (action.type) {
        case CREATE_CLIENT:
            return {...state, [action.payload.id]: action.payload };
        default:
            return state;
    }   
}