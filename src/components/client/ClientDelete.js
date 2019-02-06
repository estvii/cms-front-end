import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

// opens modal up to delete a client

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
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

class SimpleModal extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  deleteClient = () => {
      this.props.deleteClient()
  }

  render() {
    // console.log(this.props);
    const { classes, client_name } = this.props;
    return (
      <div>

        
          <Button variant="contained" color="secondary" onClick={this.handleOpen}>
            Delete Client
            <DeleteIcon className={classes.rightIcon} />
          </Button>
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
          >
            <div style={getModalStyle()} className={classes.paper}>
              <Typography variant="h6" id="modal-title">
                Deleting <b>{client_name}</b>
              </Typography>
              <Typography variant="subtitle1" id="simple-modal-description">
                Are you sure you want to delete <b>{client_name}</b> ?
              </Typography>
              <Button variant="contained" color="secondary" onClick={this.deleteClient}>DELETE</Button>
              <Button variant="contained" color="primary" onClick={this.handleClose}>Cancel</Button>
            </div>
          </Modal>
        
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

const ClientDeleteModal = withStyles(styles)(SimpleModal);

export default ClientDeleteModal;
