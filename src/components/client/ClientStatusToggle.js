import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleClientStatus } from "../../actions";
import Switch from "react-switch";

class ClientStatusToggle extends Component {
  state = { checked: false };

  retrieveClient = () => {
    const { _id } = this.props.selectedClient;
    return _.find(this.props.clientList, { _id });
  };

  componentDidMount() {
    // console.log('account status mounted');
    const client = this.retrieveClient();
    const { status_type } = this.props;
    const { account_status, server_status } = client;

    if (status_type === "account_status") {
      this.setState({ checked: account_status });
      // console.log('here: account_status');
    } else if (status_type === "server_status") {
      this.setState({ checked: server_status });
      // console.log('here_server_status');
    }
  }

  componentDidUpdate(prevProps) {
    // console.log('account status component update');
    const client = this.retrieveClient();
    const { status_type } = this.props;
    const { account_status, server_status } = client;

    if (status_type === "account_status") {
      if (this.props.selectedClient._id !== prevProps.selectedClient._id) {
        this.setState({ checked: account_status });
      }
    } else if (status_type === "server_status") {
      if (this.props.selectedClient._id !== prevProps.selectedClient._id) {
        this.setState({ checked: server_status });
      }
    }
  }

  handleChange = checked => {
    const { _id } = this.props.selectedClient;
    const { status_type } = this.props;
    this.setState({ checked });
    console.log(status_type);
    this.props.toggleClientStatus(status_type, checked, _id);
  };

  renderLabel = () => {
    const { status_type } = this.props;
    if (status_type === "account_status") {
      return <span>Account Status</span>;
    } else if (status_type === "server_status") {
      return <span>Server Status</span>;
    }
  };

  render() {
    // console.log(this.state.checked);
    return (
      <div>
        <label htmlFor="normal switch">
          <Switch
            onChange={this.handleChange}
            checked={this.state.checked}
            id="normal switch"
          />
          {this.renderLabel()}
        </label>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedClient: state.selectedClient,
    clientList: Object.values(state.clients)
  };
};

export default connect(
  mapStateToProps,
  { toggleClientStatus }
)(ClientStatusToggle);
