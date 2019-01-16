<<<<<<< HEAD
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ClientCreate from './client/ClientCreate';
import ClientFilter from './client/ClientFilter';

const App = () => {
    return(
        <div className="ui container">
            <BrowserRouter>
                <Switch>
                    <Route path='/create' exact component={ClientCreate} />
                    <Route path='/client/filter/:id' exact component={ClientFilter} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
=======
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";

import ClientCreate from "./client/ClientCreate";

const App = () => {
  return (
    <div className="ui container">
      <Navbar />
      <BrowserRouter>
        <Route path="/" exact component={ClientCreate} />
      </BrowserRouter>
    </div>
  );
};
>>>>>>> origin/nav-search-bar

export default App;
