import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import LargeCardStats from "./stats/LargeCardStats";

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px 0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12,
    marginLeft: 12
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
