import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchClientList, selectClient } from "../../actions/";
import "./../../assets/css/client/main.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Table from './ClientListTable';

class ClientList extends Component {
  componentDidMount() {
    this.props.fetchClientList();
    // console.log(this.props.fetchClientList());
  }

  onSelectClient = (client) => {
    console.log('here');
    this.props.selectClient(client)
  }
    
  render() {
    // console.log(this.props.selectedClient);
    // console.log(this.props.clientList);
    return (
      
        // // <Card>
        // {/* <CardContent> */}
          <Table
            clientList={this.props.clientList}
            onSelectClient={this.onSelectClient}
          />
      //   {/* </CardContent> */}
      // {/* </Card> */}
      
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
