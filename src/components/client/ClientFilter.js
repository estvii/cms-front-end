import React, { Component } from 'react';
import { connect } from 'react-redux';
// Actions import to update existing user
import { updateClientFilter }  from './../../actions/'
import ClientFilterForm from './ClientFilterForm';
import "./../../assets/css/client/main.css";

class ClientFilter extends Component {

    onSubmit = (filterFormValues) => {
        // Call the action to update the existing user 
        //with user ID being passed either grabbed here in or in forms
        // console.log(filterFormValues);
        this.props.updateClientFilter(filterFormValues);
    }


    render(){
        console.log(this.props.selectedClient)
        return (
            <div className="body">
                <h1>Filters</h1>
                <ClientFilterForm onSubmit={this.onSubmit}/>
            </div>
        );
    }
} 

const mapStateToProps = (state) => {
    return {
        selectedClient: state.selectedClient
    }
}

export default connect(mapStateToProps, {updateClientFilter})(ClientFilter);

// treat like the update