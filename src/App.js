import React from 'react'
import SwitchForm from './components/SwitchForm'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user_id: null, new_user: true };
    if(props.user_id != null){
      this.setState({user_id: props.user_id, new_user: false});
    }
  }


  render() {
    return (
      <div className="App">
        <SwitchForm user_id={this.state.user_id} new_user={this.state.new_user}/>
      </div>
    )
  }
}
export default App;
