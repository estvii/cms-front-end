import React, { Component } from "react";
import SnackbarContent from "@material-ui/core/SnackbarContent";

const snackBarStyle = {
  backgroundColor: "#c5cae9",
  margin: "5vh"
};

class ServerReports extends Component {
  state = { message: "" };

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

export default ServerReports;
