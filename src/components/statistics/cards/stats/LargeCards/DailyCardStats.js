import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class LargeDailyCardStats extends Component {
  render() {
    // console.log(this.props.data.dailyDataLine)

    return (
      <div>
        <Line
          data={this.props.data.dailyDataLine}
          options={{ responsive: true }}
        />
      </div>
    );
  }
}

export default LargeDailyCardStats;
