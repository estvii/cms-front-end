import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { updateClientFilter } from "./../../actions/";
import ClientFilterForm from "./ClientFilterForm";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

// Client filter component which renders a child component containing the form for it
// ClientFilterForm. Also prepopulates the form fields if existing data exist

class ClientFilter extends Component {
  
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
    const initialValues = _.pick(
      client,
      "job_title",
      "industry",
      "location",
      "company_size",
      "company_exclusion",
      "message"
    );
    return initialValues;
  };

  render() {
    return (
      <div className="filter-card">
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
