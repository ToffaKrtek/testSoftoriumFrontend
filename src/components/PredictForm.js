import React from "react";
import axios from "axios";
import API from "../API";
class PredictForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { question: "", user_id: props.user_id };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeAnswer = props.handleChangeAnswer;
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
        this.handleChangeAnswer(res.data)
      });
    event.preventDefault();
  }
  render() {
    return (
      <div className=" predict-form">
        <h3>Задайте вопрос</h3>
        <form onSubmit={this.handleSubmit} className="">
          <label>
            Вопрос:
            <input
              type="text"
              value={this.state.question}
              name="question"
              onChange={this.handleChange}
            />
          </label>
          <input className="button-submit" type="submit" value="Отправить" />
        </form>
      </div>
    );
  }
}
export default PredictForm;
