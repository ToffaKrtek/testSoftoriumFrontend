import React from 'react'
import SwitchForm from './components/SwitchForm'
import Modal from './components/Modal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user_id: null, new_user: true };
    if(props.user_id != null){
      this.setState({user_id: props.user_id, new_user: false,
                    answer: "", openModal: false, reload: false});
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeAnswer = this.handleChangeAnswer.bind(this);
  }

  handleChange(data){
    this.setState({isNewUser:  false, user_id: data.user_id, name: data.name})
  }
  handleChangeAnswer(data){
    this.setState({openModal:  true, answer: data.answer, reload: true})
  }
  render() {
    return (
      <div className="App">
        <SwitchForm user_id={this.state.user_id} new_user={this.state.new_user} changeFunction={this.handleChange} handleChangeAnswer={this.handleChangeAnswer}/>
        <Modal answer={this.state.answer} open={this.state.openModal} handleChangeAnswer={this.handleChangeAnswer} />
      </div>
    )
  }
}
export default App;
