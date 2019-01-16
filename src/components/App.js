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

export default App;
