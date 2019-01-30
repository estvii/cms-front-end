import React, { Component } from "react";
import PropTypes from "prop-types";
import SnackbarContent from "@material-ui/core/SnackbarContent";

const snackBarStyle = {
  backgroundColor: "#c5cae9",
  margin: "5vh"
};

// function LongTextSnackbar(props) {
//   const { classes } = props;

//   return (
//     <div>
//       <SnackbarContent
//         // className={classes.snackbar}
//         message="01/01/2019 - System updated"
//       />
//       <SnackbarContent
//         // className={classes.snackbar}
//         message={"03/01/2019 - Server updated"}
//       />
//       <SnackbarContent
//         // className={classes.snackbar}
//         message="04/01/2019 - Security protocol updated"
//       />
//     </div>
//   );
// }

class LongTextSnackbar extends Component {
  state = {};

  render() {
    return (
      <div>
        {" "}
        <SnackbarContent
          style={snackBarStyle}
          message="01/01/2019 - System updated"
        />
        <SnackbarContent
          style={snackBarStyle}
          message={"03/01/2019 - Server updated"}
        />
        <SnackbarContent
          style={snackBarStyle}
          message="04/01/2019 - Security protocol updated"
        />
      </div>
    );
  }
}

LongTextSnackbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default LongTextSnackbar;
