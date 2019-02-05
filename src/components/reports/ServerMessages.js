import React, { Component } from "react";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { connect } from "react-redux";
import { storeMessage, selectClient, fetchClientList } from "./../../actions";

const snackBarStyle = {
  backgroundColor: "#c5cae9",
  margin: "5vh"
};

class MessagesForm extends Component {
  state = {
    server_messages: "",
    serverMessagesList: []
  };

  handleMessagesChange = event => {
    this.setState({ server_messages: event.target.value });
  };

  addMessages = () => {
    console.log("here");
    let list = this.state.serverMessagesList;
    list.push(
      <SnackbarContent
        style={snackBarStyle}
        message={this.state.server_messages}
      />
    );
    const { _id } = this.props.selectedClient;

    this.props.storeMessage(this.state.server_messages, _id);

    this.setState({
      serverMessagesList: list,
      server_messages: ""
    });
  };

  // onSubmit = formValues => {
  //   this.props.onSubmit(formValues);
  // };

  // formHandler(server_messages) {
  //   axios
  //     .post(`/log/:id`, server_messages)
  //     .then(function(response) {
  //       console.log(response);
  //       //Perform action based on response
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //       //Perform action based on error
  //     });
  // }

  // handleSubmit = event => {
  //   console.log("here");
  //   event.preventDefault();
  //   const { _id } = this.props.selectedClient;
  //   console.log(_id);
  //   const user = {
  //     message: this.state.server_message
  //   };

  //   this.props.storeMessages(user.message, _id);
  //   axios.post(`http://localhost:3000/log/:id`, { user }).then(res => {
  //     console.log(res);
  //     console.log(res.data);
  //   });
  // };

  render() {
    // console.log(this.props);
    return (
      <div>
        <div>
          <h1>{this.state.serverMessagesList}</h1>
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
    clientList: Object.values(state.clients)
  };
};

export default connect(
  mapStateToProps,
  { storeMessage, selectClient, fetchClientList }
)(MessagesForm);
