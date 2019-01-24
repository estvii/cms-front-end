import React, { Component } from "react";
import { connect } from "react-redux";
// import axios from "axios";
import { createClient } from "../../actions/";
import ClientCreateForm from "./ClientCreateForm";
import "./../../assets/css/client/main.css";


class ClientCreate extends Component {
  // state = {
  //   email: "",
  //   password: ""
  // }

  onSubmit = formValues => {
    // console.log(formValues);
    this.props.createClient(formValues);
    // const { email, password } = this.state;

    // axios.post("http://localhost:3000/clients", { email, password})
    // .then(res => console.log(res))
    // .catch(err => console.log(err))
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
