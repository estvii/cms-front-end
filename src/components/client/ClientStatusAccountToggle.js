import _ from 'lodash';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleClientStatus } from '../../actions';
import Switch from 'react-switch';


class ClientStatusAccountToggle extends Component {

    state = {checked: false}
    
    componentDidMount(){
        const {account_status} = this.props.selectedClient
        this.setState({checked: account_status})
    }

    componentDidUpdate(prevProps){
        const {account_status} = this.props.selectedClient
        if (this.props.selectedClient.id !== prevProps.selectedClient.id) {
            this.setState({checked: account_status})
        }
    }

    onSubmit = (formValues) => {
        // Call edit/update action
    }

    onToggle = (status_name,status) => {
        // Call action to update the values
        this.props.toggleClientStatus(status_name,status)
    }

    renderToggleButton = (status_name, status) => {
    }

    handleChange = (checked) => {
        this.setState({ checked })
    }

    render() {
        if (_.isEmpty(this.props.selectedClient)) {
            return <div>Please select Client</div>
        }
        console.log(this.state.checked);
        const {name} = this.props.selectedClient
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
        selectedClient: state.selectedClient
    }
}

export default connect(mapStateToProps, {toggleClientStatus})(ClientStatusAccountToggle);