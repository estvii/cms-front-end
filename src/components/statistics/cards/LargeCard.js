import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import SimpleListMenu from "./button/Button";
import Grid from "@material-ui/core/Grid";

class LargeCard extends Component {
  state = {
    dataLine: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Invites sent x10",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(123, 239, 178, 1)",
          borderColor: "rgba(123, 239, 178, 1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(123, 239, 178, 1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(255,255,255, 1)",
          pointHoverBorderColor: "rgba(123, 239, 178, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: "Replies",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(159, 90, 253, 1)",
          borderColor: "rgba(159, 90, 253, 1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(159, 90, 253, 1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(255,255,255, 1)",
          pointHoverBorderColor: "rgba(159, 90, 253, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [10, 50, 10, 45, 56, 45, 23]
        },
        {
          label: "Connections made",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(0, 181, 204, 1)",
          borderColor: "rgba(0, 181, 204, 1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(255,255,255, 1)",
          pointHoverBorderColor: "rgba(0, 181, 204, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [20, 40, 15, 56, 34, 77, 14]
        }
      ]
    }
  };

  render() {
    return (
      <div>
        <div>
          <Grid container spacing={12}>
            <Grid item xs={6}>
              <h3>Statistics</h3>
            </Grid>
            <Grid item xs={3}>
              {" "}
            </Grid>
            <Grid item xs={3}>
              <SimpleListMenu />
            </Grid>
          </Grid>
        </div>
        <MDBContainer>
          <Line data={this.state.dataLine} options={{ responsive: true }} />
        </MDBContainer>
      </div>
    );
  }
}

export default LargeCard;
