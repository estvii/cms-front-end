import { CREATE_CLIENT } from '../actions/types'
// Initial reducer add the industry form here and have it set to blank
export default (state={}, action) => {
    switch (action.type) {
        case CREATE_CLIENT:
            return {...state, [action.payload.id]: action.payload };
        default:
            return state;
    }   
}