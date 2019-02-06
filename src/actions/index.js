import backEnd from "../apis/backEnd";
import history from "../history";
import { CREATE_CLIENT } from "./types";
import { FETCH_CLIENT_LIST } from "./types";
import { SELECT_CLIENT } from "./types";
import { TOG_CLIENT_STATUS } from "./types";
import { UPDATE_CLIENT_FILTER } from "./types";
import { RESET_SELECTED_CLIENT } from "./types";
import { EDIT_CLIENT } from "./types";
import { DESTROY_CLIENT } from "./types";
import { SEARCH_CLIENT } from "./types";
import { STORE_SERVER_MESSAGE } from "./types";
import { FETCH_SERVER_MESSAGES } from "./types";
import { RESET_FETCHED_SERVER_MESSAGES } from './types';
import { AUTH_TOKEN } from './types';

const CLIENT_STATUS = {
  verification_status: false,
  account_status: false,
  server_status: false
};

export const createClient = formValues => {
  return async dispatch => {
    const response = await backEnd.post("/clients", {
      ...formValues,
      ...CLIENT_STATUS
    });
    dispatch({ type: SELECT_CLIENT, payload: response.data });
    dispatch({ type: CREATE_CLIENT, payload: response.data });
    history.push("/"); 
  };
};

export const fetchClientList = () => {
  return async dispatch => {
    const response = await backEnd.get("/clients");
    dispatch({ type: FETCH_CLIENT_LIST, payload: response.data });
  };
};

export const editClient = (_id, formValues) => {
  return async dispatch => {
    const response = await backEnd.patch(`/clients/${_id}`, formValues);
    // console.log(response);
    dispatch({ type: EDIT_CLIENT, payload: response.data });
    history.push("/");
  };
};

export const destroyClient = _id => {
  return async dispatch => {
    await backEnd.delete(`/clients/${_id}`);
    dispatch({ type: RESET_SELECTED_CLIENT });
    dispatch({ type: DESTROY_CLIENT, payload: _id });
  };
};

export const selectClient = selectedClient => {
  return {
    type: SELECT_CLIENT,
    payload: selectedClient
  };
};

export const resetSelectedClient = () => {
  return async dispatch => {
    dispatch({ type: RESET_SELECTED_CLIENT });
    history.push('/');
  };
};

export const toggleClientStatus = (status_name, status, _id) => {
  if (status_name === "account_status" && status === false) {
    return async dispatch => {
      const response = await backEnd.patch(`/clients/${_id}`, {
        [status_name]: status,
        server_status: false
      });
      dispatch({ type: TOG_CLIENT_STATUS, payload: response.data });
    };
  }
  return async dispatch => {
    const response = await backEnd.patch(`/clients/${_id}`, {
      [status_name]: status
    });
    dispatch({ type: TOG_CLIENT_STATUS, payload: response.data });
  };
};

export const updateClientFilter = (filterFormValues, _id) => {
  return async dispatch => {
    const response = await backEnd.patch(`clients/${_id}`, filterFormValues);
    dispatch({ type: UPDATE_CLIENT_FILTER, payload: response.data });
    history.push("/");
  };
};

export const searchClient = searchTerm => {
  return async dispatch => {
    dispatch({ type: SEARCH_CLIENT, payload: searchTerm });
  };
};

export const pinCodeVerification = (pincode, _id) => {
  return async dispatch => {
    const response = await backEnd.post(`clients/verification/${_id}`, {
      pincode
    });
    return response.data;
  };
};

export const storeMessage = (server_message, _id) => {
  const client = _id;
  return async dispatch => {
    const response = await backEnd.post('/log', { server_message, client });
    dispatch({ type: STORE_SERVER_MESSAGE, payload: response.data });
  };
};

export const fetchServerMessage = (_id) => {
  return async dispatch => {
    const response = await backEnd.get(`/log/${_id}`);
    dispatch({ type: FETCH_SERVER_MESSAGES, payload: response.data });
  };
};

export const resetFetchedServerMesssage = () => {
  return async dispatch => {
    dispatch({type: RESET_FETCHED_SERVER_MESSAGES})
  }
}

export const setAuthToken = (token) => {
	sessionStorage.setItem('token', token);
	return {
		type    : AUTH_TOKEN,
		payload : token
	};
};