import React from "react";
import PropTypes from "prop-types";

require("./index.scss");

export default class HamburgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: this.props.activeTab,
      menuOpen: this.props.menuOpen,
    };

    this.onMenuItemClick = this.onMenuItemClick.bind(this);
  };

  onMenuItemClick(event) {
    event.preventDefault();
    this.setState({menuOpen: false}, () => {
      this.props.updateHandler(this.state.activeMenuItem);
    });
  }

  toggleMenuState() {
    this.setState({menuOpen: !this.state.menuOpen});
  }

  onCloseButtonClicked(event) {
    this.setState({
      menuOpen: false,
    });
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
      <div className="menu-wrapper">
        <div className={className}
          onClick={(event) => {
            this.toggleMenuState();

        }}>
          <span className="hamburger-box">
            <span className="hamburger-inner"/>
          </span>
        </div>
        {this.state.menuOpen &&
          <div className="menu-wrapper__menu-list">
            <ul>
              <li>
                1
              </li>
            </ul>
          </div>
        }
      </div>

    );
  }
}

HamburgerMenu.propTypes = {
  activeTab: PropTypes.string,
  menuOpen: PropTypes.bool,
  updateHandler: PropTypes.func,
};
