import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import MonthlyCardStats from "./stats/SmallCards/MonthlyCardStats";
import DailyCardStats from "./stats/SmallCards/DailyCardStats";

const styles = {
  card: {
    flexGrow: 1
  }
};

class SmallCard extends Component {
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
      <Card>
        <CardContent>
          <DailyCardStats />
        </CardContent>
      </Card>
    );
  }
}

SmallCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SmallCard);
