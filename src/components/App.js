import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./layout/Navbar/Navbar";
import Sidebar from "./layout/Navbar/Sidebar";
import ClientCreate from "./client/ClientCreate";
import ClientFilter from "./client/ClientFilter";

const App = () => {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path="/create" exact component={ClientCreate} />
          <Route path="/client/filter/:id" exact component={ClientFilter} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
