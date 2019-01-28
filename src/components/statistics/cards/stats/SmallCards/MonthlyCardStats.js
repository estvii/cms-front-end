import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

class SmallMonthlyCardStats extends Component {
  render() {
    console.log(this.props.data.monthlyDataLine.datasets[0].data);
    console.log(this.props.data.monthlyDataLine.datasets[1].data);
    console.log(this.props.data.monthlyDataLine.datasets[2].data);

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
              <h3>{averageMonthlyInvites}</h3>
            </Grid>
            <Grid item xs={6}>
              <h3>{averageMonthlyReplies}</h3>
            </Grid>
            <Grid item xs={6}>
              <h3>{averageMonthlyConnections}</h3>
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
