import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import LargeCard from "./../statistics/cards/LargeCard";
import SmallCard from "./../statistics/cards/SmallCard";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

function index(props) {
  const { classes } = props;

  return (
    <div className="grid-card">
      <Grid container spacing={24}>
        <Grid item xs={9}>
          <LargeCard />
        </Grid>
        <Grid item xs={3}>
          <SmallCard />
        </Grid>
      </Grid>
    </div>
  );
}

index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(index);
