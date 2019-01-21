import { SELECT_CLIENT } from '../actions/types'
// import { TOG_CLIENT_STATUS } from '../actions/types';

export default(selectedClient = {}, action) => {
    const id = 'id';
    switch(action.type) {
        case SELECT_CLIENT:
            return {[id]: action.payload.id}
        // case TOG_CLIENT_STATUS: 
        // return {...selectedClient, [action.payload.id]: action.payload}
        default:
            return selectedClient
    }
}