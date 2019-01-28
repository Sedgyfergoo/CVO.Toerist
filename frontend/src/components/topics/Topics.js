import React, { Component } from "react";
import dataTopics from "../../data/data.json";
import "./topic.css";

class Topics extends Component {
  render() {
    const data = dataTopics.region[0].pois;
    const { TopicName, navText, TopicImage } = this.props;
    return (
      <div>
        <img src={TopicImage} alt="attraction" />
        <p>{TopicName}</p>

        <navlink to="/region/:id">{navText}</navlink>
      </div>
    );
  }
}

export default Topics;
