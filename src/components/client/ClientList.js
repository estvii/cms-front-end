import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchClientList, selectClient } from "../../actions/";
import "./../../assets/css/client/main.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

class ClientList extends Component {
  componentDidMount() {
    this.props.fetchClientList();
    // console.log(this.props.fetchClientList());
  }

  renderAccountStatus(clientAccountStatus) {
    if (clientAccountStatus) {
      return <div>ON</div>;
    } else if (!clientAccountStatus) {
      return <div>OFF</div>;
    } else {
      return <div>ERROR</div>;
    }
  }

  renderServerStatus(clientServerStatus) {
    if (clientServerStatus) {
      return <div>ON</div>;
    } else if (!clientServerStatus) {
      return <div>OFF</div>;
    } else {
      return <div>ERROR</div>;
    }
  }

  renderList() {
    // console.log(this.props.clientList);
    return this.props.clientList.map(client => {
      return (
        <div className="item" key={client.id}>
          <button onClick={() => this.props.selectClient(client)}>
            {client.name}
          </button>
          <br />
          Account Status: {this.renderAccountStatus(client.account_status)}
          Server Status: {this.renderServerStatus(client.server_status)}
          <p>Verification Status: {client.verification_status}</p>
        </div>
      );
    });
  }

  render() {
    // console.log(this.props.selectedClient);
    // console.log(this.props.clientList);
    return (
      <Card>
        <CardContent>
          <div className="grid-card">
            <div>ClientList</div>
            <div className="ui celled list">{this.renderList()}</div>
          </div>
        </CardContent>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    clientList: Object.values(state.clients),
    selectedClient: state.selectedClient
  };
};

export default connect(
  mapStateToProps,
  { fetchClientList, selectClient }
)(ClientList);
