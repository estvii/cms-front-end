import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ClientCreate from "./client/ClientCreate";
import ClientFilter from "./client/ClientFilter";
import ClientList from "./client/ClientList";
import NavBar from "./layout/NavBar";
import LargeCard from "./statistics/LargeCard";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" exact component={ClientList} />
            <Route path="/create" exact component={ClientCreate} />
            <Route path="/client/filter/:id" exact component={ClientFilter} />
            <Route path="/statistics" exact component={LargeCard} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
