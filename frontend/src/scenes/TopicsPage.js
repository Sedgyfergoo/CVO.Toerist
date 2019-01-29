import React, { Component, Fragment } from "react";
import Topics from "../components/topics/Topics";
import dataTopics from "../data/data.json";
import { NavLink } from 'react-router-dom';

class TopicsPage extends Component {
  render() {
    const data = dataTopics.region[0].pois;
    const regionId = this.props.match.params.id;


    return (
      <Fragment>
        <NavLink to={`/region/${regionId}`}>
          <button>Home</button>
        </NavLink>
        <div className="list-items">
          {data.map(row => {
            return (
              <Topics key={row.id}
                RegionId={regionId}
                TopicId={row.id}
                TopicName={row.name}
                TopicImage={row.image}
              />);
          })}
        </div>
      </Fragment >
    );
  }
}

export default TopicsPage;
