import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { Field, reduxForm } from "redux-form";
import Button from "@material-ui/core/Button";

class ClientNotesForm extends Component {
  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  renderTextField = formProps => {
    const { input, label } = formProps;
    return (
      <TextField
        id="outlined-multiline-flexible"
        label={label}
        multiline
        rowsMax="4"
        margin="normal"
        variant="outlined"
        {...input}
      />
    );
  };

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    console.log(this.props);
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            name="client_notes"
            component={this.renderTextField}
            label="Client Notes"
            autoComplete="off"
          />
          <br />
          <Button
            type="submit"
            color="primary"
            disabled={pristine || submitting}
          >
            Save Notes
          </Button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "Client Notes Form",
  enableReinitialize: true
})(ClientNotesForm);
