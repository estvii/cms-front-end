import backEnd from '../apis/backEnd';
import { CREATE_CLIENT } from './types';
import { FETCH_CLIENT_LIST } from './types';
import { SELECT_CLIENT } from './types';

const CLIENT_STATUS = {
    verification_status: 'off',
    account_status: 'off',
    server_status: 'off'
}

// const CLIENT_PREFS = {

// }


export const createClient = (formValues) => {
    return async (dispatch) => {
        const response = await backEnd.post('/clients', {...formValues, ...CLIENT_STATUS }); //needs user ID later and might need to getState ?
        // console.log(response);
        dispatch({type: CREATE_CLIENT, payload: response.data});
        // Redirect to client filter form
    }
}

export const fetchClientList = () => {
    return async (dispatch) => {
        const response = await backEnd.get('/clients');
        // console.log(response);
        dispatch({type: FETCH_CLIENT_LIST, payload: response.data})
    }
}

export const selectClient = (selectedClient) => {
    console.log('selected Client Action called');
    console.log(selectedClient);
    return {
        type: SELECT_CLIENT,
        payload: selectedClient
    };
}