import React from "react";
import axios from "axios";
import API from "../API";

class ListPredicts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user_id: props.user_id, predicts: [], reload:  props.reload };
    if(this.state.user_id != null){
      this.getData();
    }

  }
  componentDidUpdate(prevProps){
    if (this.props.user_id !== this.state.user_id || this.props.reload !== this.state.reload) {
      this.setState({user_id: this.props.user_id, reaload: false});
      this.getData();
    }
  }


  componentDidMount() {
        this.getData();
    }
  getData(){
     axios.get(`${axios.defaults.baseURL}/handlers/ListHandler.php`, {
      params: {
        user_id: this.state.user_id,
      }
    }).then((res) => {
      this.setState({predicts: res.data})
    });
  }

  render() {
    return <ul>{this.state.predicts.map((predict, i) => {
      return (
      <li key={"li-"+i}>
        {predict.question} -- {predict.count}
      </li>
    )})}</ul>
  }
}
export default ListPredicts
