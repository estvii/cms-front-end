import _ from 'lodash';
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Field, reduxForm} from 'redux-form';
import { toggleClientStatus } from '../../actions';

import ClientStatusToggle from './ClientStatusToggle';

// toggle requires boolean, get its current values from the reducers and set the class componenet state to 
// its value, when we toggle it the state will change on the class component. Only
//when we submit it will the reducers actually get updated

class ClientStatus extends Component {

    onSubmit = (formValues) => {
        // Call edit/update action
    }

    retrieveClient() {
        const { id } = this.props.selectedClient
        return _.find(this.props.clientList, {id})
    }

    render() {
        if (_.isEmpty(this.props.selectedClient)) {
            return <div>Please Select Client Status</div>
        }
        const client = this.retrieveClient();
        return (
            <div>
                <h2>Client Name: {client.name}</h2>
                <ClientStatusToggle status_type="account_status"/>
                <ClientStatusToggle status_type="server_status"/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        selectedClient: state.selectedClient,
        clientList: Object.values(state.clients)
    }
}

export default connect(mapStateToProps, {toggleClientStatus})(ClientStatus);