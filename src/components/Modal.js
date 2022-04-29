import React from "react";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { answer: props.answer, open: props.open };
  }
  render() {
    let modal;
    if (this.state.open) {
      modal = (
        <div className="modal">
          {this.state.answer}
          <input
            type="button"
            onClick={() => this.setState({ open: false })}
            value="Закрыть"
          />
        </div>
      );
    } else {
      modal = "";
    }
    return <div> {modal} </div>;
  }
}

export default Modal;
