import { LOGOUT_REQUESTED } from '../actions/types';

const defaultState = {
    token: sessionStorage.getItem("token") || null
  };
  
export default (state = defaultState, action) => {
    switch(action.type) {
        case "AUTH_TOKEN":
            return {...state, token: action.payload};
        case LOGOUT_REQUESTED:
            console.log('logout called');
            return {...state, token: null}
        default:
            return state;
    }
}