import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import _ from "lodash";
import { resetSelectedClient, searchClient } from "../../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
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
  Fab
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

class NavBar extends Component {
  state = {
    mobileOpen: false
  };

  retrieveClient = () => {
    const { _id } = this.props.selectedClient;
    // console.log(this.props)
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

  onChange = (e) => {
    // console.log(`call an action and update reducer ${e}`);
    this.props.searchClient(e)
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const {
      classes,
      location: { pathname }
    } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <MenuList>
          <MenuItem component={Link} to="/" selected={"/" === pathname} className="__test__root">
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Clients" />
          </MenuItem>
          <MenuItem
            component={Link}
            to="/statistics"
            selected={"/statistics" === pathname}
          >
            <ListItemIcon>
              <BarChart />
            </ListItemIcon>
            <ListItemText primary="Statistics" />
          </MenuItem>
          <MenuItem
            component={Link}
            to="/client/filter"
            selected={"/client/filter" === pathname}
          >
            <ListItemIcon>
              <SettingsInputComponent />
            </ListItemIcon>
            <ListItemText primary="Filter" />
          </MenuItem>
          <MenuItem
            component={Link}
            to="/reports"
            selected={"/reports" === pathname}
          >
            <ListItemIcon>
              <Notifications />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </MenuItem>
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
            <IconButton color="inherit">
              <Person />
            </IconButton>
            <div>{this.totalClients()}</div>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <Search />
              </div>
              <InputBase
                placeholder="Search…"
                onChange={(e) => this.onChange(e.target.value)}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>

            <div>{this.renderSelectedClient()}</div>
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

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object
};

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
  { resetSelectedClient,
    searchClient }
)(navBarWrapper);

// const navBarWrapper =  withStyles(NavBarStyles)(NavBar);
// export default connect(mapStateToProps, { resetSelectedClient })(navBarWrapper)

// export default compose(
//   withRouter,
//   withStyles(NavBarStyles)
// )(NavBar);
