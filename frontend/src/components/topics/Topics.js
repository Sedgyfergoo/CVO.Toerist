import React, { Component } from "react";
import "./topic.css";
import { NavLink } from 'react-router-dom';


class Topics extends Component {
  render() {
    const { TopicName, RegionId, TopicImage, TopicId } = this.props;

    return (
      <div className="list-item">
        <img className="region-img2" src={TopicImage} alt={TopicName} />
        <p className="detailTextTopics">{TopicName}</p>

        <NavLink to={`/region/${RegionId}/topics/${TopicId}`}>
          <button className="detailsButton">Details</button>
        </NavLink>
      </div>
    );

  }
}

export default Topics;
