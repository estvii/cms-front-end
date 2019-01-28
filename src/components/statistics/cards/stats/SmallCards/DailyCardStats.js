import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

class SmallDailyCardStats extends Component {
  render() {
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

    //styling

    const inviteColor = {
      color: "rgba(123, 239, 178, 1)"
    };

    const repliesColor = {
      color: "rgba(159, 90, 253, 1)"
    };

    const connectionsColor = {
      color: "rgba(0, 181, 204, 1)"
    };

    const smallCardStyle = {
      height: "35vw",
      width: "10vw"
    };

    return (
      <div>
        <Card style={smallCardStyle}>
          <Grid
            container
            spacing={24}
            direction="column"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item xs={6}>
              <h4>Average</h4>
            </Grid>
            <Grid item xs={6}>
              <h3 style={inviteColor}>{averageDailyInvites}</h3>
            </Grid>
            <Grid item xs={6}>
              <h3 style={repliesColor}>{averageDailyReplies}</h3>
            </Grid>
            <Grid item xs={6}>
              <h3 style={connectionsColor}>{averageDailyConnections}</h3>
            </Grid>
          </Grid>
        </Card>
      </div>
    );
  }
}

export default SmallDailyCardStats;
