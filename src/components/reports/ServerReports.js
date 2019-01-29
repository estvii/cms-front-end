import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SnackbarContent from "@material-ui/core/SnackbarContent";

const styles = theme => ({
  snackbar: {
    margin: theme.spacing.unit,
    backgroundColor: "#c5cae9"
  }
});

function LongTextSnackbar(props) {
  const { classes } = props;

  return (
    <div>
      <SnackbarContent
        className={classes.snackbar}
        message="01/01/2019 - System updated"
      />
      <SnackbarContent
        className={classes.snackbar}
        message={"03/01/2019 - Server updated"}
      />
      <SnackbarContent
        className={classes.snackbar}
        message="04/01/2019 - Security protocol updated"
      />
    </div>
  );
}

LongTextSnackbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LongTextSnackbar);
