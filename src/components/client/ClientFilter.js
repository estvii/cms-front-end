import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
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

  onSubmit = filterFormValues => {
    const { _id } = this.props.selectedClient;
    this.props.updateClientFilter(filterFormValues, _id);
  };

  retrieveClient = () => {
    const { _id } = this.props.selectedClient;
    return _.find(this.props.clientList, { _id });
  };

  passInitialFormValues = () => {
    const client = this.retrieveClient();
    // console.log(client);
    const initialValues = _.pick(
      client,
      "job_title",
      "industry",
      "location",
      "company_size",
      "company_exclusion",
      "message"
    );
    // console.log(initialValues);
    return initialValues;
  };

  render() {
    // console.log(this.props.selectedClient)
    // console.log(this.props);
    return (
      <div className="large-card">
        <Card>
          <CardContent>
            <h1>Filters</h1>
            <ClientFilterForm
              initialValues={this.passInitialFormValues()}
              onSubmit={this.onSubmit}
            />
          </CardContent>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    clientList: Object.values(state.clients),
    selectedClient: state.selectedClient
  };
};

export default connect(
  mapStateToProps,
  { updateClientFilter }
)(ClientFilter);
