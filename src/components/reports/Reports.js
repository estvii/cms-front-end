import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Tabs from "react-responsive-tabs";
import "react-responsive-tabs/styles.css";
import LongTextSnackBar from "./ServerReports";
import SimpleForm from "./ServerMessages";

const reportsForms = [
  { title: "Server Reports", body: <LongTextSnackBar /> },
  { title: "Messages", body: <SimpleForm /> }
];

function getTabs() {
  return reportsForms.map((reportsForm, index) => ({
    title: reportsForm.title,
    getContent: () => reportsForm.body,
    key: index,
    tabClassName: "tab",
    panelClassName: "panel"
  }));
}

class Reports extends Component {
  render() {
    return (
      <div className="grid-card">
        <Card>
          <CardContent>
            <Tabs items={getTabs()} />
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Reports;
