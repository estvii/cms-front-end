import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import LargeCard from "./cards/LargeCard";
import SmallCard from "./cards/SmallCard";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class Index extends Component {
  render() {
    return (
      <div className="grid-card">
        <Grid container spacing={24}>
          <Grid item xs={9}>
            <LargeCard onClick={this.onButtonClick} />
          </Grid>
          <Grid item xs={3}>
            <SmallCard />
          </Grid>
        </Grid>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Index);
