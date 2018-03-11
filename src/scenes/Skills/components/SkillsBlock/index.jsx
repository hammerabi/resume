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
          imageUrl={icons.sass}
          title="Sass"
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
          imageUrl={icons.nginx}
          title="nginx"
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
          imageUrl={icons.webpack}
          title="Webpack"
          details="details"
        />
        <InfoBlock
          imageUrl={icons.apache}
          title="Apache"
          details="details"
        />
        <InfoBlock
          imageUrl={icons.aws}
          title="Amazon Web Services"
          details="details"
        />
        <InfoBlock
          imageUrl={icons.html}
          title="HTML5"
          details="details"
        />
        <InfoBlock
          imageUrl={icons.jquery}
          title="jquery"
          details="details"
        />
      </div>
    );
  }
}

SkillsBlock.PropTypes = {

};
