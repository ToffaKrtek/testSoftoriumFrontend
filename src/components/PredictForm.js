import React from "react";
import axios from "axios";
import Modal from './Modal';
import API from "../API";
class PredictForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { question: "", user_id: props.user_id };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidUpdate(prevProps){
    if (this.props.user_id !== this.state.user_id) {
      this.setState({user_id: this.props.user_id});
    }
  }
  handleChange(event) {
    this.setState({ question: event.target.value });
  }
  handleSubmit(event) {
    axios
      .get(`${axios.defaults.baseURL}/handlers/PredictHandler.php`, {
        params: {
          question: this.state.question,
          user_id: this.state.user_id
        }

      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        <Modal answer={res.data.answer} open={true} />
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
