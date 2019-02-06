import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchClientList, selectClient } from "../../actions/";
import "./../../assets/css/client/main.css";
import Table from "./ClientListTable";


// Fetches all the clients in the redux store, and passes the data to the ClientListTable component
// for it to render out a list of tables.
// Also uses allows for clients to be filtered based on the state of search located in the navbar


class ClientList extends Component {
  componentDidMount() {
    this.props.fetchClientList();
  }

  onSelectClient = client => {
    this.props.selectClient(client);
  };

  render() {
    const { clientList, searchClient } = this.props;
    let filteredClients = clientList.filter(client => {
      if (!searchClient) {
        return clientList;
      }
      return (
        client.name.toLowerCase().indexOf(searchClient.toLowerCase()) !== -1
      );
    });

    return (
      <div className="grid-card">
        <Table
          clientList={filteredClients}
          onSelectClient={this.onSelectClient}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    clientList: Object.values(state.clients),
    selectedClient: state.selectedClient,
    searchClient: state.searchClient
  };
};

export default connect(
  mapStateToProps,
  { fetchClientList, selectClient }
)(ClientList);
