import React from "react";
import PageWrapper from "../../components/PageWrapper";

require("./index.scss");

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  render() {
    return (
      <div>
        <PageWrapper
          activeTab="home"
        />
      </div>

    );
  }
}
