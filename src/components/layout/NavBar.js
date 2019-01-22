import React, { Component } from "react";
import { Link } from "react-router-dom";
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
  ListItemText
} from "@material-ui/core";
import {
  Person,
  Search,
  BarChart,
  Menu,
  Notifications,
  SettingsInputComponent
} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import NavBarStyles from "./../../assets/styles/Navbar/NavBarStyles";

class NavBar extends Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <MenuList>
          <MenuItem component={Link} to="/">
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Clients" />
          </MenuItem>
          <MenuItem component={Link} to="/statistics">
            <ListItemIcon>
              <BarChart />
            </ListItemIcon>
            <ListItemText primary="Statistics" />
          </MenuItem>
          <MenuItem component={Link} to="/filter">
            <ListItemIcon>
              <SettingsInputComponent />
            </ListItemIcon>
            <ListItemText primary="Filter" />
          </MenuItem>
          <MenuItem component={Link} to="/reports">
            <ListItemIcon>
              <Notifications />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </MenuItem>
        </MenuList>
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
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <Search />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
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

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object
};

export default withStyles(NavBarStyles)(NavBar);
