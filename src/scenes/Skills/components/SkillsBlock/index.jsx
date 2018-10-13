import React from "react";
import InfoBlock from "commonComponents/InfoBlock";
import {skills} from "utils/skills.js";

require("./index.scss");

export default class SkillsBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  render() {
    return (
      <div className="skills-block">
        <InfoBlock
          imageUrl={skills.python.icon}
          title="Python"
          details={skills.python.details}
        />
        <InfoBlock
          imageUrl={skills.django.icon}
          title="Django"
          details={skills.django.details}
        />
        <InfoBlock
          imageUrl={skills.js.icon}
          title="Javascript"
          details={skills.js.details}
        />
        <InfoBlock
          imageUrl={skills.react.icon}
          title="React"
          details={skills.react.details}
        />
        <InfoBlock
          imageUrl={skills.mysql.icon}
          title="MySQL"
          details={skills.mysql.details}
        />
        <InfoBlock
          imageUrl={skills.postgres.icon}
          title="Postgres"
          details={skills.postgres.details}
        />
        <InfoBlock
          imageUrl={skills.mongo.icon}
          title="Mongo DB"
          details={skills.mongo.details}
        />
        <InfoBlock
          imageUrl={skills.docker.icon}
          title="Docker"
          details={skills.docker.details}
        />
        <InfoBlock
          imageUrl={skills.node.icon}
          title="Node.js"
          details={skills.node.details}
        />
        <InfoBlock
          imageUrl={skills.aws.icon}
          title="Amazon Web Services"
          details={skills.aws.details}
        />
      </div>
    );
  }
}

SkillsBlock.PropTypes = {

};
