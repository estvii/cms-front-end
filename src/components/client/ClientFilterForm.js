import React, { Component } from 'react';
import {Field, reduxForm } from 'redux-form'

// React Widgets
import DropdownList from 'react-widgets/lib/DropdownList'
import SelectList from 'react-widgets/lib/SelectList'
import Multiselect from 'react-widgets/lib/Multiselect'
import 'react-widgets/dist/css/react-widgets.css'

class ClientFilterForm extends Component {


    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
        // Sends it to ClientFilter for it to send an action
    }

    industryList() {
        return [
            'Apple',
            'Samsung'
        ]
    }

    locationList() {
        return [
            'Sydney',
            'Melbourne',
            'Perth',
            'Brisbane'
        ]
    }

    companyExclusion() {
        return [
            'http://www.apple.com.au',
            'www.google.com',
            'www.microsoft.com'
        ]
    }

    renderMultiSelect = (selectValues) => {
        const {input, data, valueField, textField} = selectValues;
        return (
            <Multiselect {...input}
            onBlur = {() => input.onBlur()}
            value = {input.value || []}
            data = {data}
            valueField = {valueField}
            textField = {textField}
            />
        );
    }

    render() {
        console.log(this.props);
        const { handleSubmit, pristine, submitting} = this.props;
        return(
            <div>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                <label>Job Title </label>
                <Field name="job_title" component="input" label="job_title" placeholder="Job Title: " autoComplete="off"/>
                <br/>
                <label>Industry:</label>
                <Field name="industry" component={this.renderMultiSelect} data={this.industryList()} placeholder="Industry: " autoComplete="off"/>
                <br/>
                <label>Location:</label>
                <Field name="location" component={this.renderMultiSelect} data={this.locationList()} placeholder="location: " autoComplete="off"/>
                <br/>
                <label>Company Size:</label>
                <Field name="company_size" component="input" label="company_size" placeholder="Company Size: " autoComplete="off"/>
                <br/>
                <label>Company Exclusion:</label>
                <Field name="company_exclusion" component={this.renderMultiSelect} data={this.companyExclusion()} placeholder="Company Exclusion: " autoComplete="off"/>
                <br/>
                <label>Message:</label>
                <Field name="message" component="textarea" label="message" placeholder="Message: " autoComplete="off"/>
                <br/>
                <button className="ui primary button" type="submit" >Submit</button>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'ClientFilterForm'
})(ClientFilterForm);