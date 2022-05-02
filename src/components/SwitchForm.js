import React from 'react'
import UserForm from './UserForm'
import PredictForm from './PredictForm'
import ListPredicts from './ListPredicts'



class SwitchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {new_user:  props.new_user, user_id: props.user_id, reload: props.reload};
    this.changeFunction = props.changeFunction;
    this.handleChangeAnswer = props.handleChangeAnswer;
    this.didReload = props.didReload;
    this.handleCreateUser = this.handleCreateUser.bind(this);
    this.user_id = props.user_id;
  }
  componentDidUpdate(prevProps){
    if (this.props.new_user !== this.state.new_user || this.props.user_id !== this.state.user_id || this.props.reload !== this.state.reload) {
      this.setState({new_user: this.props.new_user, user_id: this.props.user_id, reload: this.props.reload});
    }
  }
  handleCreateUser() {
    this.setState({new_user: false});
  }

  render() {
    const forms = [
      <UserForm changeFunction={this.changeFunction} handleCreateUser={this.handleCreateUser} />,
      <div className="predicts">
          <PredictForm user_id={this.state.user_id} handleChangeAnswer={this.handleChangeAnswer} />
          <ListPredicts user_id={this.state.user_id} reload={this.state.reload}  handleChangeAnswer={this.handleChangeAnswer} didReload={this.didReload} />
      </div>,
    ];
    const correctForm = forms[this.state.new_user ? 0 : 1];
    return (
      <div className="switch-container">
       {correctForm}
      </div>
    );
  }
}

export default SwitchForm
