import React, { Component } from "react";

import "./topic.css";

class Topics extends Component {
  render() {
    const { TopicName, TopicImage } = this.props;
    return (
      <div>
        <h3>{TopicName}</h3>
        <img src={TopicImage} alt={TopicName} />
      </div>
    );
  }
}

export default Topics;
