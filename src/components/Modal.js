import React from "react";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { answer: props.answer, open: props.open };
  }
  componentDidUpdate(prevProps){
    console.log("ddd")
    if (this.props.open !== this.state.open) {
      this.setState({open: this.props.open, answer: this.props.answer});
    }
  }
  render() {
    return (
        <div className="modal">
          {this.state.answer}
          <input
            type="button"
            onClick={() => this.setState({ open: false })}
            value="Закрыть"
          />
        </div>
      )
    }
}

export default Modal;
