import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import clientReducer from './clientReducer';
import selectClientReducer from './selectClientReducer';

export default combineReducers({
    form: formReducer,
    clients: clientReducer,
    selectedClient: selectClientReducer


    // test: (state="test", action ) => {
    //     return state;
    // }
})