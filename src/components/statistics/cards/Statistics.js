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
      showComponent: false
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  state = {
    showComponent: false
  };

  onButtonClick() {
    this.setState(prevState => ({
      showComponent: !prevState.showComponent
    }));
  }
  render() {
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
                  <LargeDailyCardStats />
                ) : (
                  <LargeMonthlyCardStats />
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

// class Index extends Component {
//   render() {
//     return (
//       <div className="grid-card">
//         <Grid container spacing={24}>
//           <Grid item xs={9}>
//             <LargeCard onClick={this.onButtonClick} />
//           </Grid>
//           <Grid item xs={3}>
//             <SmallCard />
//           </Grid>
//         </Grid>
//       </div>
//     );
//   }
// }

// Index.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(Index);
