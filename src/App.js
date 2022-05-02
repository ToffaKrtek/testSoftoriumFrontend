import React from 'react'
import SwitchForm from './components/SwitchForm'
import Modal from './components/Modal';

import "./styles.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user_id: null, new_user: true, answer: "", openModal: false, reload: false };
    console.log("constructor")
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeAnswer = this.handleChangeAnswer.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.didReload = this.didReload.bind(this);
  }

  componentDidMount(){
    if( window.sessionStorage.getItem("user_id")){
      const get_user_id =  window.sessionStorage.getItem("user_id");
      this.setState({user_id: get_user_id, new_user: false});
      console.log("componentDidMount")
    }
  }

  handleChange(data){
    this.setState({new_user: false, user_id: data.user_id, name: data.name})
    window.sessionStorage.setItem("user_id", data.user_id);
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
