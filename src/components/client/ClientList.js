import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchClientList, selectClient } from '../../actions/';
// import { Link } from 'react-redux'
import "./../../assets/css/client/main.css";

class ClientList extends Component {

    componentDidMount() {
        this.props.fetchClientList();
        // console.log(this.props.fetchClientList());
    }



    renderList() {
        // console.log(this.props.clientList);
        return this.props.clientList.map( client => {
            return (
                <div className="item" key={client.id}>
                    <button onClick={()=>this.props.selectClient(client.name)}>{client.name}</button>
                    <p>{client.verification_status}</p>
                    <p>{client.account_status}</p>
                    <p>{client.server_status}</p>
                </div>

            );
        });
    }


    render() {
        console.log(this.props.selectedClient);
        // console.log(this.props.clientList);
        return(
            <div className="body">
                <div>Currently Selected: {this.props.selectedClient}</div>

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
        clientList: Object.values(state.clients),
        selectedClient: state.selectedClient
    }
}

export default connect(mapStateToProps, { fetchClientList, selectClient })(ClientList);
