import React, { Component } from "react";
import { connect } from "react-redux";
import { createClient } from "../../actions/";
import ClientCreateForm from "./ClientCreateForm";
import "./../../assets/css/client/main.css";

class ClientCreate extends Component {
  onSubmit = formValues => {
    // console.log(formValues);
    this.props.createClient(formValues);
  };

  render() {
    return (
      <div className="body">
        <h3>Client Create</h3>
        <ClientCreateForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createClient }
)(ClientCreate);
