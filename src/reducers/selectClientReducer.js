import { 
    SELECT_CLIENT,
    RESET_SELECTED_CLIENT,
    CREATE_CLIENT,
    DESTROY_CLIENT
} from '../actions/types'

export default(selectedClient = {}, action) => {
    const _id = '_id';
    switch(action.type) {
        case SELECT_CLIENT || CREATE_CLIENT:
            return {...selectedClient, [_id]: action.payload._id}
        case RESET_SELECTED_CLIENT || DESTROY_CLIENT: 
            return selectedClient = {};
            // return _.omit(selected)
        default:
            return selectedClient
    }
}