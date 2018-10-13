import React from "react";
import InfoBlock from "commonComponents/InfoBlock";
import {icons} from "utils/icons.js";

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
          imageUrl={icons.js}
          title="Javascript"
          details="details"
        />
        <InfoBlock
          imageUrl={icons.python}
          title="Python"
          details="details"
        />
        <InfoBlock
          imageUrl={icons.postgres}
          title="Postgres"
          details="details"
        />
        <InfoBlock
          imageUrl={icons.react}
          title="React"
          details="details"
        />
        <InfoBlock
          imageUrl={icons.mongo}
          title="Mongo DB"
          details="details"
        />
        <InfoBlock
          imageUrl={icons.django}
          title="Django"
          details="details"
        />
        <InfoBlock
          imageUrl={icons.docker}
          title="Docker"
          details="details"
        />
        <InfoBlock
          imageUrl={icons.node}
          title="Node.js"
          details="details"
        />
        <InfoBlock
          imageUrl={icons.mysql}
          title="MySQL"
          details="details"
        />
        <InfoBlock
          imageUrl={icons.aws}
          title="Amazon Web Services"
          details="details"
        />
      </div>
    );
  }
}

SkillsBlock.PropTypes = {

};
