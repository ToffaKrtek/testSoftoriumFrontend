import React from 'react'
import SwitchForm from './components/SwitchForm'
import Modal from './components/Modal';

import "./styles.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user_id: null, new_user: true, reload: false };
    if(props.user != "null"){
      console.log(props.user)
      this.setState({user_id: props.user, new_user: false,
                    answer: "", openModal: false, reload: false});
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeAnswer = this.handleChangeAnswer.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.didReload = this.didReload.bind(this);
  }

  handleChange(data){
    this.setState({isNewUser:  false, user_id: data.user_id, name: data.name})
  }
  handleChangeAnswer(data){
    this.setState({openModal:  true, answer: data.answer, reload: true})
  }
  hideModal = () => {
    this.setState({ openModal: false });
  };
  didReload() {
    console.log("didReload")
    this.setState({ reload: false });
  };
  render() {
    return (
      <div className="App">
        <SwitchForm user_id={this.state.user_id} new_user={this.state.new_user} changeFunction={this.handleChange}
            handleChangeAnswer={this.handleChangeAnswer}
            reload={this.state.reload} didReload={this.didReload}/>
        <Modal answer={this.state.answer} open={this.state.openModal} handleClose={this.hideModal} />
      </div>
    )
  }
}
export default App;
