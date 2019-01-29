import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
// import { Field, reduxForm} from 'redux-form';
import { toggleClientStatus } from "../../actions";
import Switch from "react-switch";
import ClientStatusToggle from "./ClientStatusToggle";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "./../../assets/css/client/main.css";

class ClientStatus extends Component {
  onSubmit = formValues => {};

  retrieveClient = () => {
    const { _id } = this.props.selectedClient;
    return _.find(this.props.clientList, { _id });
  };

  renderToggleButtons = () => {
    const client = this.retrieveClient();
    if (!client.account_status) {
      return (
        <div>
          <ClientStatusToggle status_type="account_status" />
          <Switch disabled checked={false} onChange={() => {}} />
          <label>Server Status</label>
        </div>
      );
    }
    return (
      <div>
        <ClientStatusToggle status_type="account_status" />
        <ClientStatusToggle status_type="server_status" />
      </div>
    );
  };

  // For the server status client status toggle, you can have it check constantly if the account_status is off
  // if its off turn off the server status.
  // Handle that in the actions? or reducers

  render() {
    if (_.isEmpty(this.props.selectedClient)) {
      return <div className="client-status">Please Select Client</div>;
    }
    const client = this.retrieveClient();
    this.renderToggleButtons();
    return (
      <div className="client-status">
        <Card>
          <CardContent>
            <h2>Client Name: {client.name}</h2>
            {/* <ClientStatusToggle status_type="account_status"/>
                <ClientStatusToggle status_type="server_status"/> */}
            {this.renderToggleButtons()}
            <h2>Client Info: </h2>
            <div>
              Client Name: {client.name}
              <br />
              Email: {client.email}
              <br />
              Password: {client.password}
              <br />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedClient: state.selectedClient,
    clientList: Object.values(state.clients)
  };
};

export default connect(
  mapStateToProps,
  { toggleClientStatus }
)(ClientStatus);
