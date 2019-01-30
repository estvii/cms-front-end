import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

import SnackbarContent from "@material-ui/core/SnackbarContent";

const snackBarStyle = {
  backgroundColor: "#c5cae9",
  margin: "5vh"
};

class SimpleForm extends Component {
  state = {
    notes: "",
    isSubmitted: false,
    notesList: []
  };

  handleNotesChange = event => {
    this.setState({ notes: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { notes } = this.state;
    this.setState({ isSubmitted: true });
    // event.target.reset();
    console.log(notes);
  };

  addNotes = () => {
    let list = this.state.notesList;
    list.push(
      <SnackbarContent style={snackBarStyle} message={this.state.notes} />
    );
    this.setState({
      notesList: list
    });
  };

  render() {
    // const { handleSubmit } = this.props;
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <div>{this.state.notesList}</div>
          <Field
            name="notes"
            component="textarea"
            placeholder="Leave a message"
            value={this.state.notes}
            onChange={this.handleNotesChange}
          />
        </div>
        <div>
          <button type="submit" onClick={this.addNotes}>
            Send
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "simple" // a unique identifier for this form
})(SimpleForm);
