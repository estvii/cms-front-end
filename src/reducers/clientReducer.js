import _ from 'lodash';
import { CREATE_CLIENT } from '../actions/types'
import { FETCH_CLIENT_LIST } from '../actions/types'


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
        case FETCH_CLIENT_LIST:
            return {...state, ..._.mapKeys(action.payload, "id")};
        default:
            return state;
    }   
}