import React from "react";
import axios from "axios";
import API from "../API";

class ListPredicts extends React.Component {
  predicts = [];
  constructor(props) {
    super(props);
    this.state = { user_id: props.user_id };
    if(this.state.user_id != null){
      this.getData();
    }
  }
  componentDidUpdate(prevProps){
    if (this.props.user_id !== this.state.user_id) {
      this.setState({user_id: this.props.user_id});
      this.getData();
    }
  }
  getData(){
    axios.get(`${axios.defaults.baseURL}/handlers/ListHandler.php`, {
      params: {
        user_id: this.state.user_id,
      }
    }).then((res) => {
      this.predicts = res.map((predict) => (
        <li>
          {predict.question} -- {predict.count}
        </li>
      ));
    });
  }
  render() {
    return <ul>{this.predicts}</ul>;
  }
}
export default ListPredicts;
