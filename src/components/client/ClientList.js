import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchClientList, selectClient} from "../../actions/";
import "./../../assets/css/client/main.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Table from "./ClientListTable";

class ClientList extends Component {
  componentDidMount() {
    this.props.fetchClientList();
    // console.log(this.props.fetchClientList());
  }

  onSelectClient = client => {
    console.log("here");
    this.props.selectClient(client);
  };

  render() {
    // console.log(this.props.selectedClient);
    // console.log(this.props.clientList);
    const { clientList, searchClient } = this.props
    console.log(this.props);
    console.log(searchClient);
    let filteredClients = clientList.filter(
      (client) => {
        if (!searchClient) {
          return clientList;
        }
        console.log(`here`)
        return client.name.toLowerCase().indexOf(searchClient.toLowerCase()) !== -1; 
      }
    );


    console.log(filteredClients);

    return (
      // <Card>
      // {/* <CardContent> */}
      <div className="grid-card">
        <Table
          clientList={filteredClients}
          onSelectClient={this.onSelectClient}
        />
      </div>
      //   {/* </CardContent> */}
      // {/* </Card> */}
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
