import React from "react";
import PropTypes from "prop-types";

require("./index.scss");

export default class InfoBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
    };

    this.onHover = this.onHover.bind(this);
  }

  onHover() {
    this.setState({showDetails: true});
  }

  onLeave() {
    this.setState({showDetails: false});
  }

  render() {
    const style = {
      backgroundImage: `url(${this.props.imageUrl})`,
      backgroundSize: "100% 100%"
    };
    return (
      <div className="info-block-container"
        style={style}
        title={this.props.title}
        onMouseEnter={() => {this.onHover();}}
        onMouseLeave={() => {this.onLeave();}}
      >
        {this.state.showDetails &&
          <div className="info-block-container__details">
            {this.props.details}
          </div>
        }
      </div>
    );
  }
}

InfoBlock.propTypes = {
  details: PropTypes.string,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
};
