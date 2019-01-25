import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class LargeDailyCardStats extends Component {
  state = {
    dataLine: {
      labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      datasets: [
        {
          label: "Invites sent x10",
          fill: false,
          backgroundColor: "rgba(123, 239, 178, 1)",
          borderColor: "rgba(123, 239, 178, 1)",
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(123, 239, 178, 1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(255,255,255, 1)",
          pointHoverBorderColor: "rgba(123, 239, 178, 1)",
          data: [1112, 2000, 3000, 3500, 2500, 2000, 3000]
        },
        {
          label: "Replies",
          fill: false,
          backgroundColor: "rgba(159, 90, 253, 1)",
          borderColor: "rgba(159, 90, 253, 1)",
          borderDash: [],
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(159, 90, 253, 1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(255,255,255, 1)",
          pointHoverBorderColor: "rgba(159, 90, 253, 1)",
          data: [1000, 1456, 2666, 3000, 4000, 3000, 1200]
        },
        {
          label: "Connections made",
          fill: false,
          backgroundColor: "rgba(0, 181, 204, 1)",
          borderColor: "rgba(0, 181, 204, 1)",
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(255,255,255, 1)",
          pointHoverBorderColor: "rgba(0, 181, 204, 1)",

          data: [1500, 2400, 4400, 1200, 2000, 3444, 2000]
        }
      ]
    }
  };

  render() {
    // console.log(this.state.dataLine.datasets[0].data);
    return (
      <div>
        <MDBContainer>
          <Line data={this.state.dataLine} options={{ responsive: true }} />
        </MDBContainer>
      </div>
    );
  }
}

export default LargeDailyCardStats;
