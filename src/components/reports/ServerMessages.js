import React, { Component } from "react";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { TextField, Button, Paper, List } from "@material-ui/core";

import { connect } from "react-redux";
import {
  storeMessage,
  selectClient,
  fetchClientList,
  fetchServerMessage,
  resetFetchedServerMesssage
} from "./../../actions";

const snackBarStyle = {
  backgroundColor: "#c5cae9",
  margin: "5vh"
};

class MessagesForm extends Component {
  state = {
    server_messages: "",
    serverMessagesList: []
  };

  componentDidMount() {
    const {_id} = this.props.selectedClient;
    this.props.resetFetchedServerMesssage();
    this.props.fetchServerMessage(_id);
  }

  handleMessagesChange = event => {
    this.setState({ server_messages: event.target.value });
  };

  renderClientServerMessage = () => {
    return this.props.clientServerMessages.map( message => {
      return (
        <SnackbarContent
          style={snackBarStyle}
          message={message.server_message}
          key={message._id}
        />
      );
    })
  }

  addMessages = () => {
    let list = this.state.serverMessagesList;
    list.push(
      <SnackbarContent
        style={snackBarStyle}
        message={this.state.server_messages}
        key={Math.random()}
      />
    );
    const { _id } = this.props.selectedClient;

    this.props.storeMessage(this.state.server_messages, _id);

    this.setState({
      serverMessagesList: list,
      server_messages: ""
    });
  };

  render() {
    return (
      <div>
        <div>
          <Paper style={{ maxHeight: 400, overflow: "auto" }}>
            
            <List>
              <h1>{this.state.serverMessagesList}</h1>
              {this.renderClientServerMessage()}  
            </List>
          </Paper>
        </div>
        <form onSubmit={this.addMessages}>
          <TextField
            type="text"
            label="Leave a message"
            value={this.state.server_messages}
            onChange={this.handleMessagesChange}
            multiline
            margin="normal"
            variant="outlined"
            autoComplete="off"
          />
          <div>
            {this.state.server_messages.length > 0 ? (
              <Button
                type="submit"
                value="Submit"
                onClick={this.addMessages}
                color="primary"
              >
                SEND
              </Button>
            ) : (
              <Button
                type="submit"
                value="Submit"
                onClick={this.addMessages}
                color="primary"
                disabled
              >
                SEND
              </Button>
            )}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedClient: state.selectedClient,
    clientList: Object.values(state.clients),
    clientServerMessages: Object.values(state.clientServerMessages)
  };
};

export default connect(
  mapStateToProps,
  { storeMessage, selectClient, fetchClientList, fetchServerMessage, resetFetchedServerMesssage }
)(MessagesForm);
