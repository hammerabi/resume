import React from "react";
import ReactDOM from "react-dom";
import About from "./scenes/About";
import Skills from "./scenes/Skills";
import FourOhFour from "./scenes/FourOhFour";
import {Router, Route, browserHistory} from "react-router";

require("./index.scss");

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route
          path="/"
          component={About}
        />
        <Route
          path="/skills"
          component={Skills}
        />
        <Route path="*"
          component={FourOhFour}
        />
      </Router>
    );
  }
}



ReactDOM.render(<App/>, document.getElementById("root"));
