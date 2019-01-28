import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import invitesDailyData from "./../LargeCards/DailyCardStats";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

class SmallDailyCardStats extends Component {
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
              <h3>{this.props[0]}</h3>
            </Grid>
            <Grid item xs={6}>
              <h3>222</h3>
            </Grid>
            <Grid item xs={6}>
              <h3>333</h3>
            </Grid>
          </Grid>
        </Card>
      </div>
    );
  }
}

export default SmallDailyCardStats;
