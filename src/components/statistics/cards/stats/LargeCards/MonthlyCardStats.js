import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class LargeMonthlyCardStats extends Component {
  render() {
    console.log(this.props.data.monthlyDataLine);
    return (
      <div>
        <MDBContainer>
          <Line
            data={this.props.data.monthlyDataLine}
            options={{ responsive: true }}
          />
        </MDBContainer>
      </div>
    );
  }
}

export default LargeMonthlyCardStats;
