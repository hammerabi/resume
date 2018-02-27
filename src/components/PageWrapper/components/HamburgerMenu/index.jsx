import React from "react";
import PropTypes from "prop-types";

require("./index.scss");

export default class HamburgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: this.props.activeTab,
      menuOpen: false,
    };

    this.onMenuItemClick = this.onMenuItemClick.bind(this);
  };

  onMenuItemClick(event) {

  }

  onCloseButtonClicked(event) {

  }

  render() {
    return (
      
    );
  }
}

HamburgerMenu.propTypes = {
  activeTab: PropTypes.string,
};
