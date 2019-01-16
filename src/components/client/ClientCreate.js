import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createClient } from '../../actions/';
import ClientForm from './ClientForm';


class ClientCreate extends Component {
    onSubmit = (formValues) => {
        // console.log(formValues);
        this.props.createClient(formValues);
    }

    render() {
        return (
            <div>
                <h3>Client Create</h3>
                    <ClientForm onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

export default connect(null,{ createClient })(ClientCreate);