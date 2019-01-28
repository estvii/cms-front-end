import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import _ from "lodash";

// React Widgets
import SelectList from "react-widgets/lib/SelectList";
import Multiselect from "react-widgets/lib/Multiselect";
import "react-widgets/dist/css/react-widgets.css";

class ClientFilterForm extends Component {
  onSubmit = filterFormValues => {
    this.props.onSubmit(filterFormValues);
    // Sends it to ClientFilter for it to send an action
  };

  industryList() {
    return ["Apple", "Samsung"];
  }

  locationList() {
    return ["Sydney", "Melbourne", "Perth", "Brisbane"];
  }

  companyExclusion() {
    return ["http://www.apple.com.au", "www.google.com", "www.microsoft.com"];
  }

  companySize() {
    return ["1-49", "50-199", "200", "All"];
  }

  renderMultiSelect = selectValues => {
    const { input, data, valueField, textField } = selectValues;
    return (
      <Multiselect
        {...input}
        onBlur={() => input.onBlur()}
        value={input.value || []}
        data={data}
        valueField={valueField}
        textField={textField}
      />
    );
  };

  renderSelectList = selectValues => {
    const { input, data } = selectValues;
    return <SelectList {...input} onBlur={() => input.onBlur()} data={data} />;
  };

  retrieveClient = () => {
    const { id } = this.props.selectedClient;
    // console.log(`Retrieved id:${id}`)
    return _.find(this.props.clientList, { id });
  };

  // componentDidMount() {
  //     const client = this.retrieveClient();
  //     console.log(client);
  // }

  renderMultiSelect = selectValues => {
    const { input, data, valueField, textField } = selectValues;
    return (
      <Multiselect
        {...input}
        onBlur={() => input.onBlur()}
        value={input.value || []}
        data={data}
        valueField={valueField}
        textField={textField}
      />
    );
  };

  renderSelectList = selectValues => {
    const { input, data } = selectValues;
    return <SelectList {...input} onBlur={() => input.onBlur()} data={data} />;
  };

  render() {
    // console.log(this.props);
    
    // console.log(client);
    // console.log(this.props)
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <label>Job Title </label>
          <Field
            name="job_title"
            component="input"
            label="job_title"
            placeholder="Job Title: "
            autoComplete="off"
            value="test"
          />
          <br />
          <label>Industry:</label>
          <Field
            name="industry"
            component={this.renderMultiSelect}
            data={this.industryList()}
            placeholder="Industry: "
            autoComplete="off"
          />
          <br />
          <label>Location:</label>
          <Field
            name="location"
            component={this.renderMultiSelect}
            data={this.locationList()}
            placeholder="location: "
            autoComplete="off"
          />
          <br />
          <label>Company Size:</label>
          <Field
            name="company_size"
            component={this.renderSelectList}
            data={this.companySize()}
            placeholder="Company Size: "
            autoComplete="off"
          />
          <br />
          <label>Company Exclusion:</label>
          <Field
            name="company_exclusion"
            component={this.renderMultiSelect}
            data={this.companyExclusion()}
            placeholder="Company Exclusion: "
            autoComplete="off"
          />
          <br />
          <label>Message:</label>
          <Field
            name="message"
            component="textarea"
            label="message"
            placeholder="Message: "
            autoComplete="off"
          />
          <br />
          <button className="ui primary button" type="submit">
            Submit
          </button>
        </form>
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

const formWrapper = reduxForm({ form: "ClientFilterForm" })(ClientFilterForm);
export default connect(mapStateToProps)(formWrapper);
