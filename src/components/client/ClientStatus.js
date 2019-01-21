import _ from 'lodash';
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Field, reduxForm} from 'redux-form';
import { toggleClientStatus } from '../../actions';

import ClientStatusToggle from './ClientStatusToggle';
import "./../../assets/css/client/main.css";

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
            return <div className="client-status">Please Select Client</div>
        }
        const client = this.retrieveClient();
        return (
            <div className="client-status">
                <h2>Client Name: {client.name}</h2>
                <ClientStatusToggle status_type="account_status"/>
                <ClientStatusToggle status_type="server_status"/>
                <h2>Client Info: </h2>
                <div>
                    Client Name: {client.name}
                    <br/>
                    Email: {client.email}                    
                    <br/>
                    Password: {client.password}
                    <br/>
                </div>
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