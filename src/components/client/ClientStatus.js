import _ from 'lodash';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm} from 'redux-form';
import { toggleClientStatus } from '../../actions';
import Switch from 'react-switch';

import ClientStatusAccountToggle from './ClientStatusAccountToggle';

// toggle requires boolean, get its current values from the reducers and set the class componenet state to 
// its value, when we toggle it the state will change on the class component. Only
//when we submit it will the reducers actually get updated

class ClientStatus extends Component {

    onSubmit = (formValues) => {
        // Call edit/update action
    }

    onToggle = (status_name,status) => {
        // Call action to update the values
        this.props.toggleClientStatus(status_name,status)
    }

    handleChange = (checked) => {
        this.setState({ checked })
    }

    render() {
        if (_.isEmpty(this.props.selectedClient)) {
            return <div>Please select Client</div>
        }

        return (
            <div>
                <ClientStatusAccountToggle/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        selectedClient: state.selectedClient
    }
}

export default connect(mapStateToProps, {toggleClientStatus})(ClientStatus);