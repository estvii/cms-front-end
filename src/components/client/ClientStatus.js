import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
// import { Field, reduxForm} from 'redux-form';
import { toggleClientStatus, editClient, destroyClient } from "../../actions";
import Switch from "react-switch";
import ClientStatusToggle from "./ClientStatusToggle";
import "./../../assets/css/client/main.css";
import ClientCreateForm from "./ClientCreateForm";
import ClientDeleteModal from "./ClientDelete";
import ClientNotesForm from "./ClientNotesForm";
import { CardContent, Card } from "@material-ui/core";

class ClientStatus extends Component {
  onSubmit = formValues => {
    console.log(formValues);
    const { _id } = this.props.selectedClient;
    this.props.editClient(_id, formValues);
  };

  deleteClient = () => {
    const { _id } = this.props.selectedClient;
    this.props.destroyClient(_id);
  };

  retrieveClient = () => {
    const { _id } = this.props.selectedClient;
    return _.find(this.props.clientList, { _id });
  };

  renderToggleButtons = () => {
    const client = this.retrieveClient();
    if (!client.verification_status) {
      return (
        <div>
          <Switch disabled checked={false} onChange={() => {}}/>
          <label>Account Status</label>
          <br/>
          <Switch disabled checked={false} onChange={() => {}}/>
          <label>Server Status</label>
        </div>
      );
    } else if (!client.account_status) {
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

  render() {
    if (_.isEmpty(this.props.selectedClient)) {
      return <div className="client-status">Please Select Client</div>;
    }
    const client = this.retrieveClient();
    // console.log(client);
    this.renderToggleButtons();
    return (
      <div className="client-status">
        <Card>
          <CardContent>
            <h2>Client Name: {client.name}</h2>
            {this.renderToggleButtons()}
            <div>
              Client Name: {client.name}
              <br />
              Email: {client.email}
              <br />
              Password: {client.password}
              <br />
            </div>
            <div>
              <ClientNotesForm
                initialValues={_.pick(client, "client_notes")}
                onSubmit={this.onSubmit}
              />
            </div>
            <div>
              <h2>Update Client Information</h2>
              <ClientCreateForm
                initialValues={_.pick(client, "name", "email", "password")}
                onSubmit={this.onSubmit}
              />
            </div>
            <br />
            <div>
              <ClientDeleteModal
                client_name={client.name}
                deleteClient={this.deleteClient}
              />
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
  { toggleClientStatus, editClient, destroyClient }
)(ClientStatus);
