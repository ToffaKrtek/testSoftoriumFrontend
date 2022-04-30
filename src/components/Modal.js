import React from "react";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.showHideClassName = props.open ? "modal display-block" : "modal display-none";
    this.state = { answer: props.answer, open: props.open, classes: this.showHideClassName };
    this.handleClose = props.handleClose;
  }
  componentDidUpdate(prevProps){
    if (this.props.open !== this.state.open) {
      this.showHideClassName = this.props.open ? "modal display-block" : "modal display-none";

      this.setState({open: this.props.open, answer: this.props.answer, classes: this.showHideClassName});
    }
  }

  render() {
    return (
        <div className={this.state.classes}>
          <div className="modal-main">
            <h2 className="modal-text">Ваш Ответ</h2>
            <p className="modal-text">{this.state.answer}</p>
            <input
              type="button"
             onClick={this.handleClose}
              value="Закрыть"
            />
          </div>
        </div>
      )
    }
}

export default Modal;
