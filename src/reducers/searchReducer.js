import { 
    SEARCH_CLIENT
} from '../actions/types'

export default(searchTerm = '', action) => {
    switch(action.type) {
        case SEARCH_CLIENT:
            return action.payload
        default:
            return searchTerm
    }
}