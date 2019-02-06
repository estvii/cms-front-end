import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

export let store;

export default ({children, initialState={}}) => {
    const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    store = createStore(
        reducers,
        initialState,
        composeEnchancers(applyMiddleware(reduxThunk))
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}