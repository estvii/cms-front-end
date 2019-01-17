import { SELECT_CLIENT } from '../actions/types'

export default(selectedClient = null, action) => {
    switch(action.type) {
        case SELECT_CLIENT:
            return action.payload
        default:
            return selectedClient
    }
}