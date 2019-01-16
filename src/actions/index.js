import backEnd from '../apis/backEnd';
import { CREATE_CLIENT } from './types'

export const createClient = (formValues) => {
    return async (dispatch) => {
        const response = await backEnd.post('/clients', {...formValues}); //needs user ID later and might need to getState ?
        console.log(response);
        dispatch({type: CREATE_CLIENT, payload: response.data});
    }
}