import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class LargeMonthlyCardStats extends Component {
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
          data: [1500, 2000, 2666, 3000, 3300, 2700, 1200]
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
          data: [1300, 2111, 2666, 3000, 3600, 2400, 2000]
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
          data: [2300, 1236, 3000, 2500, 4111, 3233, 2200]
        }
      ]
    }
  };

  render() {
    return (
      <div>
        <MDBContainer>
          <Line data={this.state.dataLine} options={{ responsive: true }} />
        </MDBContainer>
      </div>
    );
  }
}

// export const invitesMonthlyData = () => {
//   return this.state.dataline.datasets[0].data;
// };

// export const repliesMonthlyData = () => {
//   return this.state.dataline.datasets[1].data;
// };

// export const connectionsMonthlyData = () => {
//   return this.state.dataline.datasets[2].data;
// };

export default LargeMonthlyCardStats;
