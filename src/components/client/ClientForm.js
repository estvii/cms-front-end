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
                <div className="ui error message">
                    {/* <div className=></div> */}
                </div>
            )
        }
    }

    renderInput = (formProps) => {
        console.log(formProps);
        const { input, label, meta } = formProps;
        const className = `field ${meta.error && meta.touched ? 'error':''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        )
    }

    render() {
        const { handleSubmit }= this.props
        // console.log(this.props);
        return(
            <div>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <label>Name: </label>
                    <Field name="name" component="input" label="enter name" placeholder="Name" autoComplete="off"/>
                    
                    <label>Email: </label>
                    <Field name="email" component="input" label="enter email" placeholder="Email" autoComplete="off"/>
                    
                    <label>Password: </label>
                    <Field name="password" component="input" label="enter password" placeholder="Password" autoComplete="off"/>

                    <button className="ui primary button">Submit</button>

                    <Field name="password" component={this.renderInput} label="enter password" placeholder="Password" autoComplete="off"/>
                </form>
            </div>
        );
    }
}

const validate = (formValues) => {
    const errors = {};
    if(!formValues.name) {
        errors.name = "You must enter a name";
    }
    if(!formValues.email) {
        errors.email = "You must enter a valid email";
    }
    if(!formValues.password) {
        errors.password = "You must enter a password"
    }
    return errors;
}

export default reduxForm({
    form: 'ClientForm',
    validate: validate
})(ClientForm);