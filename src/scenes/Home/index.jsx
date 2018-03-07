import React from "react";
import PropTypes from "prop-types";
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
        <PageWrapper />
      </div>

    );
  }
}

Home.propTypes = {

};
