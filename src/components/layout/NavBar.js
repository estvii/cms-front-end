import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import _ from "lodash";
import { resetSelectedClient, searchClient } from "../../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';

import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  InputBase,
  Toolbar,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Fab,
  Typography
} from "@material-ui/core";
import {
  Person,
  Search,
  BarChart,
  Menu,
  Notifications,
  SettingsInputComponent,
  HighlightOff,
  PersonAdd
} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import NavBarStyles from "./../../assets/styles/Navbar/NavBarStyles";
import { compose } from "recompose";

const appBarStyle = {
  color: "#56565b"
};

class NavBar extends Component {
  state = {
    mobileOpen: false,
    active: false,
  };

  retrieveClient = () => {
    const { _id } = this.props.selectedClient;
    return _.find(this.props.clientList, { _id });
  };

  renderSelectedClient = () => {
    const client = this.retrieveClient();
    if (!client) {
      return <div>Please Select Client</div>;
    }
    return (
      <div>
        {client.name}
        <IconButton onClick={() => this.removeSelectedClient()}>
          <HighlightOff />
        </IconButton>
      </div>
    );
  };

  removeSelectedClient = () => {
    this.props.resetSelectedClient();
  };

  
  totalClients = () => {
    return this.props.clientList.length;
  };

  onChange = e => {
    // console.log(`call an action and update reducer ${e}`);
    this.props.searchClient(e);
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  toggleClass = () => {
    // console.log(this.state.active);
    this.setState({
      active: true
    });
  };

  render() {
    console.log(this.props.selectedClient);
    const {
      classes,
      location: { pathname }
    } = this.props;

    // console.log(this.props);

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <MenuList>
          <MenuItem
            component={Link}
            to="/"
            selected={"/" === pathname}
            onClick={this.toggleClass.bind(this)}
          >
            <ListItemIcon
              className={
                this.props.location.pathname === "/" ? classes.icon : null
              }
            >
              <Person />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography style={{ color: "#fafafa" }}>Clients</Typography>
              }
            />
          </MenuItem>
  
          {_.isEmpty(this.props.selectedClient) || <MenuItem
            component={Link}
            to="/statistics"
            selected={"/statistics" === pathname}
          >
            <ListItemIcon
              className={
                this.props.location.pathname === "/statistics"
                  ? classes.icon
                  : null
              }
            >
              <BarChart />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography style={{ color: "#fafafa" }}>Statistics</Typography>
              }
            />
          </MenuItem>}

          {_.isEmpty(this.props.selectedClient) || <MenuItem
            component={Link}
            to="/client/filter"
            selected={"/client/filter" === pathname}
          >
            <ListItemIcon
              className={
                this.props.location.pathname === "/client/filter"
                  ? classes.icon
                  : null
              }
            >
              <SettingsInputComponent />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography style={{ color: "#fafafa" }}>Filters</Typography>
              }
            />
          </MenuItem>}

          {_.isEmpty(this.props.selectedClient) || <MenuItem
            component={Link}
            to="/reports"
            selected={"/reports" === pathname}
          >
            <ListItemIcon
              className={
                this.props.location.pathname === "/reports"
                  ? classes.icon
                  : null
              }
            >
              <Notifications />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography style={{ color: "#fafafa" }}>Reports</Typography>
              }
            />
          </MenuItem>}
        </MenuList>
        <div className={classes.toolbar} />
        <div className={classes.toolbar} />
        <div className={classes.toolbar} />
        <div className={classes.toolbar} />
        <div className="new-client">
          <Fab variant="extended" color="primary" component={Link} to="/create">
            <PersonAdd />
            New Client
          </Fab>
        </div>
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
            <IconButton component={Link} to="/">
              <Person />
            </IconButton>
            <div style={appBarStyle}>{this.totalClients()}</div>

            <div className={classes.search} style={appBarStyle}>
              <div className={classes.searchIcon} style={appBarStyle}>
                <Search style={appBarStyle} />
              </div>
              <InputBase
                placeholder="Search…"
                onChange={e => this.onChange(e.target.value)}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                style={appBarStyle}
              />
            </div>

            <div style={appBarStyle}>{this.renderSelectedClient()}</div>

            <div style={{position: 'absolute', right: 0}}>
              <Link to="/logout"> 
                <Button  className={classes.button}>
                  Logout
                </Button>
              </Link>
            </div>


          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
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

const navBarWrapper = compose(
  withRouter,
  withStyles(NavBarStyles)
)(NavBar);
export default connect(
  mapStateToProps,
  { resetSelectedClient, searchClient }
)(navBarWrapper);
