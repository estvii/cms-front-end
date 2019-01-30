import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class SimpleForm extends Component {
  state = {
    message: ""
  };

  handleMessageChange = event => {
    this.setState({ message: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { message } = this.state;
    alert(`Your message: \n
    message: ${message}`);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <div>
            <Field
              name="notes"
              component="textarea"
              placeholder="Leave a message"
              value={this.state.message}
              onChange={this.handleMessageChange}
            />
          </div>
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "simple" // a unique identifier for this form
})(SimpleForm);
