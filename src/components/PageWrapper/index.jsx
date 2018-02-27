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

    this.updateActiveTab = this.updateActiveTab.bind(this);
  };

  updateActiveTab(newActiveTab) {
    this.props.updateHandler(newActiveTab);
  }

  render() {
    return (
      <Header
        activeTab={this.state.activeTab}
        updateHandler={this.updateActiveTab}
      />

    );
  }
}

PageWrapper.propTypes = {
  activeTab: PropTypes.string,
  updateHandler: PropTypes.func,
};
