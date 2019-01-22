import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./layout/NavBar"
import ClientCreate from "./client/ClientCreate";
import ClientFilter from "./client/ClientFilter";
import ClientList from './client/ClientList';
import ClientStatus from './client/ClientStatus';

const App = () => {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <div>
          <div className="ui container grid">
            <div className="ui row">
              <div className="column ten wide">
                <Route path='/' exact component={ClientList} />
              </div>
              <div className="column six wide">
                <Route path='/' exact component={ClientStatus} />
              </div>
            </div>
          </div>
            <Route path="/create" exact component={ClientCreate} />
            <Route path="/client/filter" exact component={ClientFilter} />
        </div>
      </BrowserRouter>
      </div>
  );
};

export default App;
