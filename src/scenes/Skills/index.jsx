import React from "react";
import PageWrapper from "../../components/PageWrapper";

require("./index.scss");

export default class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  render() {
    return (
      <div>
        <PageWrapper
          activeTab="skills"
        />
      </div>
    );
  }
}
