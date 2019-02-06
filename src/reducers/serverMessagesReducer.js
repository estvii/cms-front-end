import _ from 'lodash';
import { FETCH_SERVER_MESSAGES, RESET_FETCHED_SERVER_MESSAGES } from '../actions/types';

export default (state={}, action) => {
    switch(action.type) {
        case FETCH_SERVER_MESSAGES: 
            return {...state, ..._.mapKeys(action.payload, "_id")};
        case RESET_FETCHED_SERVER_MESSAGES:
            return state = {}
        default:
            return state;
    }
}