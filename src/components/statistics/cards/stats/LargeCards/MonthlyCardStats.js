import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class LargeMonthlyCardStats extends Component {
  render() {
    // console.log(this.props.data.monthlyDataLine);
    return (
      <div>
        <Line
          data={this.props.data.monthlyDataLine}
          options={{ responsive: true }}
        />
      </div>
    );
  }
}

export default LargeMonthlyCardStats;
