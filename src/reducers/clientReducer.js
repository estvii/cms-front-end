import { CREATE_CLIENT } from '../actions/types'

// Maybe find the client id and just append it to it?

// const INITIAL_STATE = {
//     job_title: null,
//     industry: null,
//     location: null,
//     filters: null,
//     company_size: null,
//     company_exclusion: null,
//     message: null
// }

export default (state = {}, action) => {
    switch (action.type) {
        case CREATE_CLIENT:
            return {...state, [action.payload.id]: action.payload };
        default:
            return state;
    }   
}