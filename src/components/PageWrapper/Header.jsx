import React from "react";
import PropTypes from "prop-types";

require("./index.scss");

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.activeTab,
    };
  };

  render() {
    return (
      <div className="header-top-bar">

      </div>
    );
  }
}

Header.propTypes = {
  activeTab: PropTypes.string,
};
