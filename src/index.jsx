import React from "react";
import ReactDOM from "react-dom";
import PageWrapper from "./components/PageWrapper";

require("./index.scss");

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="">

      </div>
    );
  }
}



ReactDOM.render(<App/>, document.getElementById("root"));
