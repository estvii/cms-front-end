import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import MonthlyCardStats from "./stats/LargeCards/MonthlyCardStats";
import DailyCardStats from "./stats/LargeCards/DailyCardStats";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const styles = {
  card: {
    minWidth: 275
  }
};

class LargeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    this.setState(prevState => ({
      showComponent: !prevState.showComponent
    }));
  }
  render() {
    return (
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
          {this.state.showComponent ? <DailyCardStats /> : <MonthlyCardStats />}
        </CardContent>
      </Card>
    );
  }
}

LargeCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LargeCard);
