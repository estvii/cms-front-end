import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchClientList } from '../../actions/';
import { Link } from 'react-redux'

class ClientList extends Component {

    componentDidMount() {
        this.props.fetchClientList();
        // console.log(this.props.fetchClientList());
    }

    renderList() {
        console.log(this.props.clientList);
        return this.props.clientList.map( client => {
            return (
                <div className="item" key={client.id}>
                    {client.name} | 
                    {client.verification_status} | 
                    {client.account_status} | 
                    {client.server_status} 
                </div>
                
            );
        });
    }


    render() {
        // console.log(this.props);
        // console.log(this.props.clientList);
        return(
            <div>
                <div>ClientList</div>
                <div className="ui celled list">
                        {this.renderList()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        clientList: Object.values(state.clients)
    }
}

export default connect(mapStateToProps, { fetchClientList })(ClientList);
