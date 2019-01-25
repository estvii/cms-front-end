import React, { Component } from "react";
import { connect } from "react-redux";
// import axios from "axios";
import { createClient } from "../../actions/";
import ClientCreateForm from "./ClientCreateForm";
import "./../../assets/css/client/main.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";


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
      <div>
        <div className="large-card">
          <Card>
            <CardContent>
              <h3>Client Create</h3>
              <ClientCreateForm onSubmit={this.onSubmit} />
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { createClient }
)(ClientCreate);
