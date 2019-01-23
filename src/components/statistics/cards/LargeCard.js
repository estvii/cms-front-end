import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import LargeCardStats from "./stats/LargeCardStats";

const styles = {
  card: {
    minWidth: 275
  }
};

function LargeCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <LargeCardStats />
      </CardContent>
    </Card>
  );
}

LargeCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LargeCard);
