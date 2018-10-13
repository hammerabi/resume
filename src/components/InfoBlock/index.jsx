import React from "react";
import PropTypes from "prop-types";
import ModalWrapper from "../ModalWrapper";

require("./index.scss");

export default class InfoBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
      detailsText: "More Info",
      modalIsOpen: false
    };

    this.closeModal = this.closeModal.bind(this);
    this.onHover = this.onHover.bind(this);
  }

  onHover() {
    this.setState({showDetails: true});
  }

  onLeave() {
    this.setState({showDetails: false});
  }

  onSkillClick() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }


  render() {
    const style = {
      backgroundImage: `url(${this.props.imageUrl})`,
      backgroundSize: "100% 100%"
    };
    const content = (
      <div>
        <div className="content-title">{this.props.title}</div>
        <div className="content-detail">{this.props.details}</div>
      </div>
    );

    return (
      <div className="info-block-container"
        style={style}
        title={this.props.title}
        onMouseEnter={() => {this.onHover();}}
        onMouseLeave={() => {this.onLeave();}}
      >
        {this.state.showDetails &&
          <div className="info-block-container__more_info"
            onClick={() => {this.onSkillClick();}}
          >
            <span>{this.state.detailsText}</span>
          </div>
        }
        {
          this.state.modalIsOpen && 
          <ModalWrapper
            contentComponent={content}
            closeModal={this.closeModal}
          />
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
