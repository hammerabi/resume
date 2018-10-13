import React from "react";
import PageWrapper from "../../components/PageWrapper";

require("./index.scss");
const fourohfour = require("styles/icons/404.gif");

export default class FourOhFour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  render() {
    return (
      <div>
        <PageWrapper pageTitle="Four Oh Four"/>
        <span className="fourohfour-container">
          <img src={fourohfour} />
        </span>
      </div>
    );
  }
}
