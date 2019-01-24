import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchClientList, selectClient } from "../../actions/";
import "./../../assets/css/client/main.css";

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
        return this.props.clientList.map( client => {
          // console.log(client)
            return (
                <div className="item" key={client._id}>
                    <button onClick={()=>this.props.selectClient(client)}>{client.name}</button> 
                    <br/>
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
      <div className="body">
        <div>ClientList</div>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
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
