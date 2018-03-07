import React from "react";
import PropTypes from "prop-types";
import {browserHistory, Link} from "react-router";

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

  onMenuItemClick(item) {
    // if (item === "home") {
    //   browserHistory.push("/");
    // } else {
    //   browserHistory.push(item);
    // }
    this.setState({menuOpen: false}, () => {
      this.props.updateHandler(item);
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
          <div className="menu-wrapper__menu">
            <ul className="menu-wrapper__menu__list">
              <li onClick={() => {this.onMenuItemClick("home");}}>
                <Link to="/">Home</Link>
              </li>
              <li onClick={() => {this.onMenuItemClick("about");}}>
                <Link to="about">About</Link>
              </li>
              <li onClick={() => {this.onMenuItemClick("skills");}}>
                <Link to="skills">Skills</Link>
              </li>
              <li>
                Github
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
