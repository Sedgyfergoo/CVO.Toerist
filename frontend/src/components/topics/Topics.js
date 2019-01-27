import React, { Component } from "react";
import dataTopics from "../../../public/data/data.json";

class Topics extends Component {
  data = dataTopics;
  render() {
    return (
      <div>
        <img src="https://via.placeholder.com/140x100" alt="attraction" />
        <p>Capitole Washington</p>
        <button />
        <navlink to="/region/:id">back home</navlink>
      </div>
    );
  }
}

export default Topics;
