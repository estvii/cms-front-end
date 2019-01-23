import React, { Component } from "react";
import { connect } from "react-redux";
// Actions import to update existing user
import { updateClientFilter } from "./../../actions/";
import ClientFilterForm from "./ClientFilterForm";
// import "./../../assets/css/client/main.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

class ClientFilter extends Component {
  onSubmit = filterFormValues => {
    // Call the action to update the existing user
    //with user ID being passed either grabbed here in or in forms
    // console.log(filterFormValues);
    this.props.updateClientFilter(filterFormValues);
  };

  render() {
    console.log(this.props.selectedClient);
    return (
      <div className="large-card">
        <Card>
          <CardContent>
            <h1>Filters</h1>
            <ClientFilterForm onSubmit={this.onSubmit} />
          </CardContent>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedClient: state.selectedClient
  };
};

export default connect(
  mapStateToProps,
  { updateClientFilter }
)(ClientFilter);

// treat like the update
