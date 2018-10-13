import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";

require("./index.scss");

export default class PageWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.activeTab,
      pageTitle: this.props.pageTitle
    };
  };

  render() {
    return (
      <div>
        <Header
          activeTab={this.state.activeTab}
          pageTitle={this.state.pageTitle}
        />
        {this.props.children}
      </div>
    );
  }
}

PageWrapper.propTypes = {
  activeTab: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  component: PropTypes.obj,
  pageTitle: PropTypes.string,
  updateHandler: PropTypes.func,
};
