import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import ReactCodeInput from 'react-code-input';
import { connect } from 'react-redux';
import { pinCodeVerification, toggleClientStatus, resetSelectedClient } from '../../actions';

// Child component of client list table, component checks whether the pin the user inputs is correct with the backend,
// if correct the user is able to toggle the switches

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 80,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 2,
    outline: 'none',
  },
  root: {
      flexGrow: 1,
  },
  control: {
      padding: theme.spacing.unit * 2,
  }
});



class ClientVerificationModal extends Component {
    state = {
        open: false,
        pinInputCode: "",
        pinResponse: ""
    };

    handleOpen = () => {
        this.setState({ open: true });
        this.props.resetSelectedClient();
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    onSubmit = () => {
        const { _id } = this.props.client
        this.props.pinCodeVerification(this.state.pinInputCode, _id)
            .then(res => this.setState({pinResponse: res}));
    } 

    onChange = (value) => {
        this.setState({pinInputCode: value})
    }

    onStartAccountAndServer = () => {
        const { _id } = this.props.client
        this.props.toggleClientStatus('account_status', true, _id);
        this.props.toggleClientStatus('server_status', true, _id);
        this.handleClose();
    }

    renderInputPin = () => {
        if (this.state.pinResponse.verification_status === true) {
            return <ReactCodeInput fields={6} type="text" disabled/>
        }
        return <ReactCodeInput fields={6} type="text" onChange={(value) => this.onChange(value)}/>
    }

    renderVerificationSubmitButton = () => {
        if (this.state.pinResponse.verification_status === true) {
            return <Button variant="contained" type="submit" disabled style={{fontSize:'0.8rem', minWidth:'120px'}}>Account Verified</Button>
        } else if (this.state.pinInputCode.length !== 6) {
            return <Button variant="contained" type="submit" disabled >Submit</Button>
        }
        return <Button variant="contained" color="primary" type="submit" value="submit" onClick={this.onSubmit}>Submit</Button>
        }

    renderStartServerButton = () => {
        if (!this.state.pinResponse.verification_status) {
            return <Button variant="contained" color="primary" disabled style={{fontSize:'0.8rem', minWidth:'120px'}}>Start Server</Button>
        }
        return <Button variant="contained" color="primary" onClick={this.onStartAccountAndServer} style={{fontSize:'0.8rem', minWidth:'120px'}}>Start Server</Button>
    }

  render() {
    const { classes, client } = this.props;
    
    return (
      <div>
          <Button variant="contained" onClick={this.handleOpen}>
            Verify
          </Button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open}
                onClose={this.handleClose}
            >
                <div style={getModalStyle()} className={classes.paper}>
                    <div className="ui container grid">
                        <div className="ui row">
                            <div className="column four wide right aligned">
                            <Typography variant="h6" id="modal-title">
                                Verification
                            </Typography>
                            </div>
                        </div>
                        <div className="ui row">
                            <div className="column four wide right aligned">
                                <Typography variant="subtitle2" id="simple-modal-description">
                                    Client Name: 
                                </Typography>
                            </div>
                            <div className="column twelve wide">
                                <Typography variant="subtitle2" id="simple-modal-description">
                                    {client.name}
                                </Typography>
                            </div>
                        </div>
                        <div className="ui row">
                            <div className="column four wide"></div>
                            <div className="column twleve wide">
                                {/* <Button variant="contained" color="primary" style={{fontSize:'0.8rem', minWidth:'120px'}}>Start Server</Button> */}
                                {this.renderStartServerButton()}
                            </div>
                        </div>
                        <div className="ui row">
                            <div className="column four wide right aligned">
                                <Typography variant="subtitle2" id="simple-modal-description">
                                    Verification: 
                                </Typography>
                            </div>
                            <div className="column twelve wide">
                                {this.renderInputPin()}
                            </div>
                        </div>
                        <div className="ui row">
                            <div className="column four wide"></div>
                            <div className="column twleve wide">
                                {this.renderVerificationSubmitButton()}
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
      </div>
    );
  }
}

ClientVerificationModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const ClientVerification = withStyles(styles)(ClientVerificationModal);

export default connect(null,{ pinCodeVerification, toggleClientStatus, resetSelectedClient })(ClientVerification);
