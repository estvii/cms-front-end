import _ from 'lodash';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleClientStatus } from '../../actions';
import Switch from 'react-switch';


class ClientStatusAccountToggle extends Component {

    state = {checked: false}
    
    retrieveClient() {
        const { id } = this.props.selectedClient
        return _.find(this.props.clientList, {id})
    }

    componentDidMount(){
        // console.log('account status mounted');
        const client = this.retrieveClient();

        const {account_status} = client;
        this.setState({checked: account_status})
    }

    componentDidUpdate(prevProps){
        // console.log('account status component update');
        const client = this.retrieveClient();

        const {account_status} = client
        if (this.props.selectedClient.id !== prevProps.selectedClient.id) {
            this.setState({checked: account_status})
        }
    }

    onToggle = (status_name,status) => {
        // Call action to update the values
        this.props.toggleClientStatus(status_name,status)
    }

    handleChange = (checked) => {
        const { id } = this.props.selectedClient
        this.setState({ checked })
        this.props.toggleClientStatus('account_status',checked, id)
    }

    render() {
        const client = this.retrieveClient();
        if (_.isEmpty(client)) {
            return <div>Please select Client (ACcount Toggle)</div>
        }
        const {name} = client;
        return (
            <div>
                <h2>Client Name: {name}</h2>
                <label htmlFor="normal switch">                    
                    <Switch onChange={this.handleChange} checked={this.state.checked} id="normal switch"/>
                    <span>Switch with default style</span>
                </label>
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

export default connect(mapStateToProps, {toggleClientStatus})(ClientStatusAccountToggle);