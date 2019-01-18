import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, redux} from 'redux-form';

class ClientStatus extends Component {
    render() {
        const {name, account_status, verification_status, server_status} = this.props.selectedClient
        return (
            <div>
                <h2>Client Name: {name}</h2>
                <h2>Account Status: {account_status}</h2>
                <h2>Verification Status: {verification_status}</h2>
                <h2>Server Status: {server_status}</h2>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        selectedClient: state.selectedClient
    }
}

export default connect(mapStateToProps)(ClientStatus);