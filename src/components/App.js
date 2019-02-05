import _ from 'lodash'
import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { connect } from 'react-redux'
import NavBar from "./layout/NavBar";
import ClientCreate from "./client/ClientCreate";
import ClientFilter from "./client/ClientFilter";
import ClientList from "./client/ClientList";
import ClientStatus from "./client/ClientStatus";
import history from "../history";
import Statistics from "./statistics/cards/Statistics";
import Reports from "./reports/Reports";

class App extends Component {

  render(){  
    
    return (
      <div>
        <Router history={history}>
          <div>
            <NavBar />
            <div className="ui container grid">
              <div className="ui row">
                <div className="column ten wide">
                  <Route path="/" exact component={ClientList} />
                </div>
                <div className="column six wide">
                  <Route path="/" exact component={ClientStatus} />
                </div>
              </div>
            </div>
            <Route path="/create" exact component={ClientCreate} />
            {
            _.isEmpty(this.props.selectedClient) || 
            <React.Fragment>
                <Route path="/client/filter" exact component={ClientFilter} />
                <Route path="/statistics" exact component={Statistics} />
                <Route path="/reports" exact component={Reports} /> 
            </React.Fragment>
            }
          </div>
        </Router>
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    selectedClient: state.selectedClient,
    clientList: Object.values(state.clients)
  };
};


export default connect(mapStateToProps)(App);
