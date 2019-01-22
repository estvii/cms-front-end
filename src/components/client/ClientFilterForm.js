import React, { Component } from 'react';
import {Field, reduxForm } from 'redux-form'


class ClientFilterForm extends Component {

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
        // Sends it to ClientFilter for it to send an action
    }



    render() {
        console.log(this.props);
        const { handleSubmit, pristine, submitting} = this.props;
        return(

            <div>
            
                <form onSubmit={handleSubmit(this.onSubmit)}>
                <Field name="job_title" component="input" label="job_title" placeholder="Job Title: " autoComplete="off"/>
                <br/>
                <Field name="industry" component="input" label="industry" placeholder="Industry: " autoComplete="off"/>
                <br/>
                <Field name="location" component="input" label="location" placeholder="location: " autoComplete="off"/>
                <br/>
                <Field name="company_size" component="input" label="company_size" placeholder="Company Size: " autoComplete="off"/>
                <br/>
                <Field name="company_exclusion" component="input" label="company_exclusion" placeholder="Company Exclusion: " autoComplete="off"/>
                <br/>
                <Field name="message" component="textarea" label="message" placeholder="Message: " autoComplete="off"/>


                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'ClientFilterForm'
})(ClientFilterForm);