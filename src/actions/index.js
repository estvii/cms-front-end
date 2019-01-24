import backEnd from '../apis/backEnd';
import history from '../history';
import { CREATE_CLIENT } from './types';
import { FETCH_CLIENT_LIST } from './types';
// import { FETCH_CLIENT } from './types'
import { SELECT_CLIENT } from './types';
import { TOG_CLIENT_STATUS } from './types';
import { UPDATE_CLIENT_FILTER } from './types';

const CLIENT_STATUS = {
    verification_status: false,
    account_status: false,
    server_status: false
}

// const CLIENT_PREFS = {

// }


export const createClient = (formValues) => {
    return async (dispatch) => {
        const response = await backEnd.post('/clients', {...formValues, ...CLIENT_STATUS }); //needs user ID later and might need to getState ?
        console.log(response);
        dispatch({type: CREATE_CLIENT, payload: response.data});
        history.push('/'); //Navigates user to root 
    }
}

export const fetchClientList = () => {
    return async (dispatch) => {
        const response = await backEnd.get('/clients');
        // console.log(response);
        dispatch({type: FETCH_CLIENT_LIST, payload: response.data});
    }
}

// export const fetchClient = (id) => {
//     return async (dispatch) => {
//         const response = await backEnd.get(`/clients/${id}`)
//         // console.log(response);
//         dispatch({type: FETCH_CLIENT, payload: response.data });
//     }
// }

export const selectClient = (selectedClient) => {
    // console.log('selected Client Action called');
    // console.log(selectedClient);
    return {
        type: SELECT_CLIENT,
        payload: selectedClient
    };
}
// FIX ACTION 
export const toggleClientStatus = (status_name,status,_id) => {
        // console.log('Toggle Action Called');
        // console.log(status_name);
        // console.log(status);
        // console.log(id);
    return async (dispatch) => {
        const response = await backEnd.patch(`/clients/${_id}`, {[status_name]: status});
        console.log(response);
        dispatch({type: TOG_CLIENT_STATUS, payload: response.data});
    }
}

export const updateClientFilter = (filterFormValues, _id) => {
    console.log(filterFormValues);
    console.log(_id);
    return async(dispatch) => {
        const response = await backEnd.patch(`clients/${_id}`, filterFormValues)
        // console.log(response);
        dispatch({type: UPDATE_CLIENT_FILTER, payload: response.data})
        history.push('/');
    }
}