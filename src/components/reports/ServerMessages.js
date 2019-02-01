import React, { Component } from "react";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const snackBarStyle = {
  backgroundColor: "#c5cae9",
  margin: "5vh"
};

// renderTextField = formProps => {
//   const { input, label } = formProps;
//   return (
//     <TextField
//       id="outlined-multiline-flexible"
//       label={label}
//       multiline
//       margin="normal"
//       variant="outlined"
//       {...input}
//     />
//   );
// };

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
      messagesList: list,
      messages: ""
    });
  };

  // renderSendButton = () => {
  //   if (this.state.messages.length > 0) {
  //     return (
  //       <Button
  //         type="submit"
  //         value="Submit"
  //         onClick={this.addMessages}
  //         color="primary"
  //         disabled
  //       >
  //         SEND
  //       </Button>
  //     );
  //   } else {
  //     return (
  //       <Button
  //         type="submit"
  //         value="Submit"
  //         onClick={this.addMessages}
  //         color="primary"
  //         disabled={pristine || submitting}
  //       >
  //         SEND
  //       </Button>
  //     );
  //   }
  // };

  render() {
    const { pristine, submitting } = this.props;
    return (
      <div>
        <div>
          <h1>{this.state.messagesList}</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            label="Leave a message"
            value={this.state.messages}
            onChange={this.handleMessagesChange}
            multiline
            margin="normal"
            variant="outlined"
            autocomplete="off"
          />
        </form>
        <div>
          {this.state.messages.length > 0 ? (
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
          {/* <Button
          type="submit"
          value="Submit"
          onClick={this.addMessages}
          color="primary"
          disabled={pristine || submitting}
        >
          SEND
        </Button> */}
        </div>
      </div>
    );
  }
}

export default MessagesForm;
