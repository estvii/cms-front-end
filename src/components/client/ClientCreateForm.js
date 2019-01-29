import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class ClientForm extends Component {

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    renderError = (formProps) => {
        const {error,touched} = formProps;
        if (touched && error) {
            return (
                <div className="ui error mini message">
                    <div>{error}</div>
                </div>
            )
        }
    }

    renderTextField = (formProps) => {
        // console.log(formProps);
        const { input, label, meta, type } = formProps;
        const className = `field ${meta.error && meta.touched ? 'error':''}`;
        return (
                <div className={className}>
                    <label>{label}</label>
                    <input {...input} type={type} autoComplete="off" />
                    {this.renderError(meta)}
                </div>
        )
    }

    render() {
        const { handleSubmit, pristine, submitting }= this.props
        console.log(`here`);
        console.log(this.props);
        return(
            <div>
                <form onSubmit={handleSubmit(this.onSubmit)}>      
                    <Field name="name" component={this.renderTextField} label="Enter Name: " placeholder="Name" autoComplete="off"/>
                    <br/>
                    <Field name="email" component={this.renderTextField} label="Enter email: " placeholder="Email" autoComplete="off"/>
                    <br/>
                    <Field name="password" type="password" component={this.renderTextField} label="Enter password: " placeholder="Password" autoComplete="off" />
                    <br />
                    <br />
                    <button className="ui primary button"type="submit" disabled={pristine || submitting}>Submit</button>
                </form>
            </div>
        );
    }
}

const validate = (formValues) => {
    const errors = {};
    if(!formValues.name) {
        errors.name = "Required";
    }
    if(!formValues.email) {
        errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
        errors.email = 'Invalid email address'
    }
    if(!formValues.password) {
        errors.password = "Required"
    }
    return errors;
}

export default reduxForm({
    form: 'ClientForm',
    validate: validate,
    enableReinitialize: true
})(ClientForm);