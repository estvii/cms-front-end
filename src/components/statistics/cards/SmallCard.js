import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import SmallCardStats from "./stats/SmallCardStats";

const styles = {
  card: {
    minWidth: 275
  }
};

class SmallCard extends Component {
  state = {
    showComponent: false
  };

  onButtonClick() {
    this.setState({
      showComponent: true
    });
  }
  render() {
    return (
      <Card>
        <CardContent>
          <SmallCardStats />
        </CardContent>
      </Card>
    );
  }
}

SmallCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SmallCard);
