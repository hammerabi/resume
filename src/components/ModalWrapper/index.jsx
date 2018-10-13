import React from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";

export default class ModalWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: window.innerWidth <= 850
    };
  }

  componentDidMount() {
    window.addEventListener(
      "resize",
      this.handleResize,
    );
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    if (this.state.mobile && window.innerWidth >= 850) {
      this.setState({mobile: false});
    } else if (!this.state.mobile && window.innerWidth < 850) {
      this.setState({mobile: true});
    }
  };

  render() {

    return (
      <Modal
        contentLabel={this.props.label}
        isOpen={true}
        onRequestClose={this.props.closeModal}
        className="modal-container"
        closeTimeoutMS={250}
      >
        {this.props.contentComponent}
        {!this.state.mobile && <div className="modal__close-btn" onClick={this.props.closeModal} />}
      </Modal>
    );
  }
}

ModalWrapper.propTypes = {
  closeModal: PropTypes.func,
  contentComponent: PropTypes.object,
  contentsClass: PropTypes.string,
  label: PropTypes.string,
};
