import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

class SmallMonthlyCardStats extends Component {
  render() {
    const sumMonthlyInvites = this.props.data.monthlyDataLine.datasets[0].data.reduce(
      (total, amount, index, array) => {
        total += amount;
        if (index === array.length - 1) {
          return total / array.length;
        } else {
          return total;
        }
      }
    );

    const averageMonthlyInvites = Math.round(sumMonthlyInvites);

    const sumMonthlyReplies = this.props.data.monthlyDataLine.datasets[1].data.reduce(
      (total, amount, index, array) => {
        total += amount;
        if (index === array.length - 1) {
          return total / array.length;
        } else {
          return total;
        }
      }
    );

    const averageMonthlyReplies = Math.round(sumMonthlyReplies);

    const sumMonthlyConnections = this.props.data.monthlyDataLine.datasets[2].data.reduce(
      (total, amount, index, array) => {
        total += amount;
        if (index === array.length - 1) {
          return total / array.length;
        } else {
          return total;
        }
      }
    );

    const averageMonthlyConnections = Math.round(sumMonthlyConnections);

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
              <h3 style={inviteColor}>{averageMonthlyInvites}</h3>
            </Grid>
            <Grid item xs={6}>
              <h3 style={repliesColor}>{averageMonthlyReplies}</h3>
            </Grid>
            <Grid item xs={6}>
              <h3 style={connectionsColor}>{averageMonthlyConnections}</h3>
            </Grid>
          </Grid>
        </Card>
      </div>
    );
  }
}

// averageMonthlyInvites() {
//   this.props.data.monthlyDataLine.datasets[0].data[0];
// }

// averageMonthlyReplies() {
//   this.props.data.monthlyDataLine.datasets[1].data[1];
// }

// averageMonthlyReplies() {
//   this.props.data.monthlyDataLine.datasets[2].data[1];
// }

export default SmallMonthlyCardStats;
