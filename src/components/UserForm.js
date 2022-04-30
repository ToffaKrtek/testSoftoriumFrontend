import React from "react";
import axios from "axios";
import API from "../API";

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeFunction = props.changeFunction;
    this.handleCreateUser = props.handleCreateUser;
  }
  handleChange(event) {
    this.setState({ name: event.target.value });
  }
  handleSubmit(event) {
    axios
    .post(`${axios.defaults.baseURL}/handlers/UserHandler.php`, {
      name: this.state.name
    })
    .then((res) => {
      this.changeFunction(res.data)
      this.handleCreateUser();
    });
    event.preventDefault();
  }
  render() {
    return (
      <div className="form">
        <h3>Введите имя пользователя</h3>
        <form onSubmit={this.handleSubmit} className="user-form">
          <label>
            Имя пользователя:
            <input
              type="text"
              value={this.state.name}
              name="name"
              onChange={this.handleChange}
            />
          </label>
          <input className="button-submit" type="submit" value="Отправить" />
        </form>
      </div>
    );
  }
}
export default UserForm;
