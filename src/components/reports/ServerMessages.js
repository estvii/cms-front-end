import React, { Component } from "react";
import SnackbarContent from "@material-ui/core/SnackbarContent";

const snackBarStyle = {
  backgroundColor: "#c5cae9",
  margin: "5vh"
};

class MessagesForm extends Component {
  state = {
    messages: "",
    isSubmitted: false,
    messagesList: []
  };

  handleMessagesChange = event => {
    this.setState({ messages: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { messages } = this.state;
    this.setState({ isSubmitted: true });

    console.log(messages);
    console.log(this.state.messageList);
  };

  addMessages = () => {
    let list = this.state.messagesList;
    list.push(
      <SnackbarContent style={snackBarStyle} message={this.state.messages} />
    );
    this.setState({
      messagesList: list
    });
  };

  render() {
    return (
      <div>
        <div>
          <h1>{this.state.messagesList}</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Leave a message"
            value={this.state.messages}
            onChange={this.handleMessagesChange}
          />

          <input type="submit" value="Submit" onClick={this.addMessages} />
        </form>
      </div>
    );
  }
}

export default MessagesForm;
