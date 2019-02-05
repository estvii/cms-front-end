import { 
    SELECT_CLIENT,
    RESET_SELECTED_CLIENT,
    CREATE_CLIENT,
    DESTROY_CLIENT
} from '../actions/types'

export default(selectedClient = {}, action) => {
    const _id = '_id';
    switch(action.type) {
        case SELECT_CLIENT:
            return {...selectedClient, [_id]: action.payload._id};
        case CREATE_CLIENT:
            return {...selectedClient, [_id]: action.payload._id};
        case RESET_SELECTED_CLIENT: 
            return selectedClient = {};
        case DESTROY_CLIENT:   
            return selectedClient = {};
        default:
            return selectedClient;
    }
}