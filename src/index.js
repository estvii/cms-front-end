import dotenv from 'dotenv' 
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import App from "./components/App";
dotenv.config()

ReactDOM.render(
    <Root>
        <App/>
    </Root>,
    document.querySelector("#root")
)

// Wrap 
//  <Root>
//      <Router>
//          <App/>
//      <Router/>
//<Root> Memory router? for testing
