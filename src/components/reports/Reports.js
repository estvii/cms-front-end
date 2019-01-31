import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Tabs from "react-responsive-tabs";
import "react-responsive-tabs/styles.css";
import ServerReports from "./ServerReports";
import MessagesForm from "./ServerMessages";

const reportsForms = [
  { title: "Server Reports", body: <ServerReports /> },
  { title: "Messages", body: <MessagesForm /> }
];

const getTabs = () => {
  return reportsForms.map((reportsForm, index) => ({
    title: reportsForm.title,
    getContent: () => reportsForm.body,
    key: index,
    tabClassName: "tab",
    panelClassName: "panel"
  }));
};

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
