import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    // minWidth: 500, default value is 700
  },
  button: {
    margin: theme.spacing.unit,
  }
});

// pass 2 props down the full list and the filter list if filtered list is empty render client List

function SimpleTable(props) {
    const { classes, clientList } = props;
    // console.log(props)

    const onSelectClient = (client) => {
        props.onSelectClient(client);
    }

    const renderAccountStatus = (clientAccountStatus) => {
        if (clientAccountStatus) {
          return <div>ON</div>;
        } else if (!clientAccountStatus) {
          return <div>OFF</div>;
        } else {
          return <div>ERROR</div>;
        }
      }
    
      const renderServerStatus = (clientServerStatus) => {
        if (clientServerStatus) {
          return <div>ON</div>;
        } else if (!clientServerStatus) {
          return <div>OFF</div>;
        } else {
          return <div>ERROR</div>;
        }
      }

    const renderList = () => {
        // console.log(this.props.clientList);
        return clientList.map( client => {
            return (
                <TableRow key={client._id}>
                    <TableCell component="th" scope="row">
                        <Button className={classes.button} onClick={()=>onSelectClient(client)}>
                            {client.name}
                        </Button>
                    </TableCell>
                    <TableCell align="center">
                        {client.verification_status}
                    </TableCell>
                    <TableCell align="center">
                        {renderAccountStatus(client.account_status)}
                    </TableCell>
                    <TableCell align="center">
                        {renderServerStatus(client.server_status)}
                    </TableCell>                    
                </TableRow>
            );
        });
    }

  return (
    <Paper className={classes.root}  style={{ width: 500 }}>
        <Typography variant="h6">
            Clients
          </Typography>
        
      <Table className={classes.table} >
        <TableHead>
          <TableRow >
            <TableCell >Name</TableCell>
            <TableCell align="right" >Verfication Status</TableCell>
            <TableCell align="right">Account Status</TableCell>
            <TableCell align="right">Server Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderList()}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
