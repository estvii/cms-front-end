import backEnd from "../apis/backEnd";
import history from "../history";
import { CREATE_CLIENT, STORE_MESSAGE } from "./types";
import { FETCH_CLIENT_LIST } from "./types";
// import { FETCH_CLIENT } from './types'
import { SELECT_CLIENT } from "./types";
import { TOG_CLIENT_STATUS } from "./types";
import { UPDATE_CLIENT_FILTER } from "./types";
import { RESET_SELECTED_CLIENT } from "./types";
import { EDIT_CLIENT } from "./types";
import { DESTROY_CLIENT } from "./types";
import { SEARCH_CLIENT } from "./types";
import { PIN_CODE_VERIFICATION } from "./types";
import { STORE_SERVER_MESSAGE } from "./types";
import { FETCH_SERVER_MESSAGES } from "./types";
import { RESET_FETCHED_SERVER_MESSAGES } from './types';

const CLIENT_STATUS = {
  verification_status: false,
  account_status: false,
  server_status: false
};

// const CLIENT_PREFS = {

// }

export const createClient = formValues => {
  return async dispatch => {
    console.log(formValues);
    const response = await backEnd.post("/clients", {
      ...formValues,
      ...CLIENT_STATUS
    }); //needs user ID later and might need to getState ?
    dispatch({ type: SELECT_CLIENT, payload: response.data });
    dispatch({ type: CREATE_CLIENT, payload: response.data });
    history.push("/"); //Navigates user to root
  };
};

export const fetchClientList = () => {
  return async dispatch => {
    const response = await backEnd.get("/clients");
    // console.log(response);
    dispatch({ type: FETCH_CLIENT_LIST, payload: response.data });
  };
};

export const editClient = (_id, formValues) => {
  return async dispatch => {
    // console.log(_id);
    // console.log(formValues);
    const response = await backEnd.patch(`/clients/${_id}`, formValues);
    console.log(response);
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

// export const fetchClient = (id) => {
//     return async (dispatch) => {
//         const response = await backEnd.get(`/clients/${id}`)
//         // console.log(response);
//         dispatch({type: FETCH_CLIENT, payload: response.data });
//     }
// }

export const selectClient = selectedClient => {
  // console.log('selected Client Action called');
  // console.log(selectedClient);
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

// FIX ACTION
export const toggleClientStatus = (status_name, status, _id) => {
  // console.log('Toggle Action Called');
  // console.log(status_name);
  // console.log(status);
  // console.log(_id);
  // if status_name = account_status && status = false  => server_status becomes false ??
  if (status_name === "account_status" && status === false) {
    return async dispatch => {
      const response = await backEnd.patch(`/clients/${_id}`, {
        [status_name]: status,
        server_status: false
      });
      dispatch({ type: TOG_CLIENT_STATUS, payload: response.data });
      // console.log(response);
    };
  }
  return async dispatch => {
    const response = await backEnd.patch(`/clients/${_id}`, {
      [status_name]: status
    });
    // console.log(response);
    dispatch({ type: TOG_CLIENT_STATUS, payload: response.data });
  };
};

export const updateClientFilter = (filterFormValues, _id) => {
  console.log(filterFormValues);
  console.log(_id);
  return async dispatch => {
    const response = await backEnd.patch(`clients/${_id}`, filterFormValues);
    // console.log(response);
    dispatch({ type: UPDATE_CLIENT_FILTER, payload: response.data });
    history.push("/");
  };
};

export const searchClient = searchTerm => {
  console.log(searchTerm);
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

    // if (response.data.verification_status === true) {
    //     dispatch({ type: PIN_CODE_VERIFICATION, payload: response.data})
    // }
  };
};

// console.log('Has been verified or something');
// Do i need to dispatch it to the redux store
// Currently the start server in the modal isnt, rendering
// Could potential be because the redux store hasnt been updated so the client list isnt being
// rendered
// api request response and checking if response is true or not
// response should have all details for the client so we can grab the id
// if (!response.verification_status) {
//     console.log(`incorrect pin`);
//     return null
//     //dispatch one for the error perhaps?
// }

// dispatch({type: PIN_CODE_VERIFICATION, payload: response});

export const storeMessage = (server_message, _id) => {
  console.log("the text message, ", server_message);
  // const _id = "5c4f8d3b01bb4407da1b37d0";
  // const server_message = {
  //   server_message: message
  // };
  // axios
  //   .post(`log/${_id}`, server_message)
  //   .then(response => {
  //     console.log(response);
  //     console.log("data saved successfully");
  //   })
  //   .catch(err => console.log(err));

  const client = _id;
  return async dispatch => {
    const response = await backEnd.post('/log', { server_message, client });
    console.log(response);
    dispatch({ type: STORE_SERVER_MESSAGE, payload: response.data });
  };
};

export const fetchServerMessage = (_id) => {
  return async dispatch => {
    console.log(`fetcherSErver action ${_id}`);
    const response = await backEnd.get(`/log/${_id}`);
    console.log(response);
    dispatch({ type: FETCH_SERVER_MESSAGES, payload: response.data });
  };
};

export const resetFetchedServerMesssage = () => {
  return async dispatch => {
    dispatch({type: RESET_FETCHED_SERVER_MESSAGES})
  }
}