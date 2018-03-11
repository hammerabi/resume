import React from "react";
import PageWrapper from "commonComponents/PageWrapper";
import SkillsBlock from "./components/SkillsBlock";

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
        >
          <SkillsBlock/>
        </PageWrapper>
      </div>
    );
  }
}
