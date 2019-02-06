import React, { Component } from "react";
import { connect } from "react-redux";
import { createClient } from "../../actions/";
import ClientCreateForm from "./ClientCreateForm";
import "./../../assets/css/client/main.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

// Client Create component which has a child component Client Create Form
class ClientCreate extends Component {

  onSubmit = formValues => {
    this.props.createClient(formValues);
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
