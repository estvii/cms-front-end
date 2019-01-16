import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import clientReducer from './clientReducer';

export default combineReducers({
    form: formReducer,
    clients: clientReducer


    // test: (state="test", action ) => {
    //     return state;
    // }
})