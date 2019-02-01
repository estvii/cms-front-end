import _ from 'lodash';
import { CREATE_CLIENT } from '../actions/types'
import { FETCH_CLIENT_LIST } from '../actions/types'
// import { FETCH_CLIENT } from '../actions/types'
import { TOG_CLIENT_STATUS } from '../actions/types'
import { UPDATE_CLIENT_FILTER } from '../actions/types';
import { EDIT_CLIENT } from '../actions/types';
import { DESTROY_CLIENT, PIN_CODE_VERIFICATION } from '../actions/types';


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
            return {...state, [action.payload._id]: action.payload };
        case FETCH_CLIENT_LIST:
            return {...state, ..._.mapKeys(action.payload, "_id")};
        case EDIT_CLIENT:
            return {...state, [action.payload._id]: action.payload };
        // case FETCH_CLIENT:
        //     return {...state, [action.payload.id]: action.payload };
        case TOG_CLIENT_STATUS:
            return {...state, [action.payload._id]: action.payload};
        case UPDATE_CLIENT_FILTER: 
            return {...state, [action.payload._id]: action.payload};
        case DESTROY_CLIENT:
            return _.omit(state, action.payload);
        // case PIN_CODE_VERIFICATION: 
        //     return {...state, [action.payload.id]: action.payload}
        default:
            return state;
    }   
}