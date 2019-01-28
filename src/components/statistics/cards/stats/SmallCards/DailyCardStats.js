import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

class SmallDailyCardStats extends Component {
  render() {
    console.log(this.props.data.dailyDataLine.datasets[0].data);
    console.log(this.props.data.dailyDataLine.datasets[1].data);
    console.log(this.props.data.dailyDataLine.datasets[2].data);

    const sumDailyInvites = this.props.data.dailyDataLine.datasets[0].data.reduce(
      (total, amount, index, array) => {
        total += amount;
        if (index === array.length - 1) {
          return total / array.length;
        } else {
          return total;
        }
      }
    );

    const averageDailyInvites = Math.round(sumDailyInvites);

    const sumDailyReplies = this.props.data.dailyDataLine.datasets[1].data.reduce(
      (total, amount, index, array) => {
        total += amount;
        if (index === array.length - 1) {
          return total / array.length;
        } else {
          return total;
        }
      }
    );

    const averageDailyReplies = Math.round(sumDailyReplies);

    const sumDailyConnections = this.props.data.dailyDataLine.datasets[2].data.reduce(
      (total, amount, index, array) => {
        total += amount;
        if (index === array.length - 1) {
          return total / array.length;
        } else {
          return total;
        }
      }
    );

    const averageDailyConnections = Math.round(sumDailyConnections);

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
              <h3>{averageDailyInvites}</h3>
            </Grid>
            <Grid item xs={6}>
              <h3>{averageDailyReplies}</h3>
            </Grid>
            <Grid item xs={6}>
              <h3>{averageDailyConnections}</h3>
            </Grid>
          </Grid>
        </Card>
      </div>
    );
  }
}

export default SmallDailyCardStats;
