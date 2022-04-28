import React from "react";
import axios from "axios";
class PredictForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { question: "", user_id: props.user_id };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ question: event.target.value });
  }
  handleSubmit(event) {
    axios
      .post(`http://localhost:8100/PredictController.php`, {
        name: this.state.question,
        user_id: this.state.user_id
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Вопрос:
          <input
            type="text"
            value={this.state.question}
            name="question"
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}
export default PredictForm;
