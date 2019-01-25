import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import LargeMonthlyCardStats from "./stats/LargeCards/MonthlyCardStats";
import LargeDailyCardStats from "./stats/LargeCards/DailyCardStats";
import SmallMonthlyCardStats from "./stats/SmallCards/MonthlyCardStats";
import SmallDailyCardStats from "./stats/SmallCards/DailyCardStats";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const styles = {
  card: {
    minWidth: 275
  }
};

class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
      dailyDataLine: {
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
      },
      monthlyDataLine: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
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
            data: [1500, 2000, 2666, 3000, 3300, 2700, 1200]
          },
          {
            label: "Replies",
            fill: false,
            backgroundColor: "rgba(159, 90, 253, 1)",
            borderColor: "rgba(159, 90, 253, 1)",
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(159, 90, 253, 1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(255,255,255, 1)",
            pointHoverBorderColor: "rgba(159, 90, 253, 1)",
            data: [1300, 2111, 2666, 3000, 3600, 2400, 2000]
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
            data: [2300, 1236, 3000, 2500, 4111, 3233, 2200]
          }
        ]
      }
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    this.setState(prevState => ({
      showComponent: !prevState.showComponent
    }));
  }
  render() {
    // console.log(this.state.test);

    return (
      <div className="large-card">
        <Grid container spacing={12} justify="space-evenly">
          <Grid item xs={12} sm={9}>
            <Card>
              <CardContent>
                <Grid container spacing={12}>
                  <Grid item xs={6}>
                    <h3>Statistics</h3>
                  </Grid>
                  <Grid item xs={4}>
                    {" "}
                  </Grid>
                  <Grid item xs={2}>
                    <Button onClick={this.onButtonClick}>
                      {this.state.showComponent ? `Daily` : `Monthly`}
                    </Button>
                  </Grid>
                </Grid>
                {this.state.showComponent ? (
                  <LargeDailyCardStats data={this.state.test} />
                ) : (
                  <LargeMonthlyCardStats data={this.state.test} />
                )}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={2} alignItems="center">
            {this.state.showComponent ? (
              <SmallDailyCardStats />
            ) : (
              <SmallMonthlyCardStats />
            )}
          </Grid>
        </Grid>
      </div>
    );
  }
}

Statistics.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Statistics);
