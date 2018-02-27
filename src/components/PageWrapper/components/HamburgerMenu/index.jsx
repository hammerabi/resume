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
    // I hate that this method of class toggling is standard practice
    // Verbose logic in the render method doesn't feel very React-y
    // inb4 I replace everything with redux and ternarys

    let className = "hamburger-menu-container hamburger hamburger--elastic";
    if (this.state.menuOpen) {
      className += " is-active";
    }
    return (
      <div className={className}>
        <span className="hamburger-box">
          <span className="hamburger-inner"/>
        </span>
      </div>
    );
  }
}

HamburgerMenu.propTypes = {
  activeTab: PropTypes.string,
};
