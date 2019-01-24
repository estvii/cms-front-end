import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

class SmallMonthlyCardStats extends Component {
  render() {
    return (
      <div>
        <Card>
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
              <h3>444</h3>
            </Grid>
            <Grid item xs={6}>
              <h3>555</h3>
            </Grid>
            <Grid item xs={6}>
              <h3>666</h3>
            </Grid>
          </Grid>
        </Card>
      </div>
    );
  }
}

export default SmallMonthlyCardStats;
