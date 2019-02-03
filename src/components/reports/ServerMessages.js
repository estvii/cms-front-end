import React, { Component } from "react";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

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

  // onSubmit = formValues => {
  //   this.props.onSubmit(formValues);
  // };

  addMessages = () => {
    let list = this.state.serverMessagesList;
    list.push(
      <SnackbarContent
        style={snackBarStyle}
        message={this.state.server_messages}
      />
    );
    this.setState({
      serverMessagesList: list,
      server_messages: ""
    });
  };

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

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      message: this.state.server_message
    };

    axios.post(`http://localhost:3000/log/:id`, { user }).then(res => {
      console.log(res);
      console.log(res.data);
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          <h1>{this.state.serverMessagesList}</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            type="text"
            value={this.state.value}
            // onChange={this.handleChange}
            label="Leave a message"
            value={this.state.server_messages}
            onChange={this.handleMessagesChange}
            multiline
            margin="normal"
            variant="outlined"
            autocomplete="off"
          />
        </form>
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
      </div>
    );
  }
}

// export default MessagesForm;

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

// import React, { Component } from "react";
// import axios from "axios";

// class MessageForm extends Component {
//   state = {
//     server_message: ""
//   };

//   handleChange = event => {
//     this.setState({ server_message: event.target.value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();

//     const user = {
//       message: this.state.server_message
//     };

//     axios.post(`http://localhost:3000/log/:id`, { user }).then(res => {
//       console.log(res);
//       console.log(res.data);
//     });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Message
//           <input type="text" name="message" onChange={this.handleChange} />
//         </label>
//         <button type="submit">Send</button>
//       </form>
//     );
//   }
// }

// export default MessageForm;
