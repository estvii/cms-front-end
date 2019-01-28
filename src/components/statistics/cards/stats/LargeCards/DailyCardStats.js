import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class LargeDailyCardStats extends Component {
  render() {
    console.log(this.props.data.dailyDataLine);
    return (
      <div>
        <MDBContainer>
          <Line
            data={this.props.data.dailyDataLine}
            options={{ responsive: true }}
          />
        </MDBContainer>
      </div>
    );
  }
}

export default LargeDailyCardStats;
