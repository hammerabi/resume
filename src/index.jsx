import React from "react";
import ReactDOM from "react-dom";
import PageWrapper from "./components/PageWrapper";
import {Router, Route} from "react-router";

require("./index.scss");

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "home",
    };
  }
  render() {
    return (
      <PageWrapper />
    );
  }
}



ReactDOM.render(<App/>, document.getElementById("root"));
