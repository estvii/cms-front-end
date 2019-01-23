import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
// Actions import to update existing user
import { updateClientFilter }  from './../../actions/'
import ClientFilterForm from './ClientFilterForm';
import "./../../assets/css/client/main.css";

class ClientFilter extends Component {

    onSubmit = (filterFormValues) => {
        const { id } = this.props.selectedClient
        this.props.updateClientFilter(filterFormValues, id);
    }

    retrieveClient() {
        const { id } = this.props.selectedClient
        return _.find(this.props.clientList, {id})
    }

    passInitialFormValues() {
        const client = this.retrieveClient();
        const initialValues = _.pick(client,'job_title','industry','location','company_size','company_exclusion','message');
        return initialValues;
    }

    render(){
        // console.log(this.props.selectedClient)
        // console.log(this.props);
        return (
            <div className="body">
                <h1>Filters</h1>
                <ClientFilterForm  initialValues={this.passInitialFormValues()} onSubmit={this.onSubmit}/>
            </div>
        );
    }
} 

const mapStateToProps = (state) => {
    return {
        clientList: Object.values(state.clients),
        selectedClient: state.selectedClient
    }
}

export default connect(mapStateToProps, {updateClientFilter})(ClientFilter);
