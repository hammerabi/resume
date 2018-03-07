import React from "react";
import PropTypes from "prop-types";
import PageWrapper from "../../components/PageWrapper";

require("./index.scss");

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  render() {
    return (
      <div>
        <PageWrapper />
      </div>
    );
  }
}

About.propTypes = {

};
