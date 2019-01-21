import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ClientCreate from "./client/ClientCreate";
import ClientFilter from "./client/ClientFilter";
import ClientList from "./client/ClientList";
import NavBar from "./layout/NavBar";

const App = () => {
  return (
    <div>
      {/* <Sidebar />
      <Navbar /> */}
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ClientList} />
          <Route path="/create" exact component={ClientCreate} />
          <Route path="/client/filter/:id" exact component={ClientFilter} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
