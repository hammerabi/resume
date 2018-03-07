import React from "react";
import PageWrapper from "../../components/PageWrapper";

require("./index.scss");

export default class FourOhFour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  render() {
    return (
      <div>
        <PageWrapper/>
        <span className="fourohfour-container">
          404, man.
        </span>
      </div>
    );
  }
}
