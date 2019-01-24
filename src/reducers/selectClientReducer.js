import { SELECT_CLIENT } from '../actions/types'
// import { TOG_CLIENT_STATUS } from '../actions/types';

export default(selectedClient = {}, action) => {
    const _id = '_id';
    switch(action.type) {
        case SELECT_CLIENT:
            return {[_id]: action.payload._id}
        // case TOG_CLIENT_STATUS: 
        // return {...selectedClient, [action.payload.id]: action.payload}
        default:
            return selectedClient
    }
}