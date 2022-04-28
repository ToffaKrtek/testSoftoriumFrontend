import React from "react";
import axios from "axios";

class ListPredicts extends React.Component {
  predicts = [];
  constructor(props) {
    axios.get(`http://localhost:8100/PredictController.php`).then((res) => {
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
