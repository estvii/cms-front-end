import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import clientReducer from './clientReducer';
import selectClientReducer from './selectClientReducer';
import searchReducer from './searchReducer';
import serverMessagesReducer from './serverMessagesReducer';
import authReducer from './authReducer';


export default combineReducers({
    form: formReducer,
    clients: clientReducer,
    selectedClient: selectClientReducer,
    clientServerMessages: serverMessagesReducer,
    searchClient: searchReducer,
    auth: authReducer
})