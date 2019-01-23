import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

class SmallCardStats extends Component {
  render() {
    return (
      <div>
        <Grid
          container
          spacing={24}
          direction="column"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs={6}>
            <h1>Average</h1>
          </Grid>
          <Grid item xs={6}>
            <h3>111</h3>
          </Grid>
          <Grid item xs={6}>
            <h3>222</h3>
          </Grid>
          <Grid item xs={6}>
            <h3>333</h3>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default SmallCardStats;
