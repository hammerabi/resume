import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";

require("./index.scss");

export default class PageWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.activeTab,
    };

  };

  render() {
    return (
      <Header
        activeTab={this.state.activeTab}
      />
    );
  }
}

PageWrapper.propTypes = {
  activeTab: PropTypes.string,
  updateHandler: PropTypes.func,
};
