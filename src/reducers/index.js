import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import clientReducer from './clientReducer';
import selectClientReducer from './selectClientReducer';
import searchReducer from './searchReducer';

export default combineReducers({
    form: formReducer,
    clients: clientReducer,
    selectedClient: selectClientReducer,
    searchClient: searchReducer

    // test: (state="test", action ) => {
    //     return state;
    // }
})