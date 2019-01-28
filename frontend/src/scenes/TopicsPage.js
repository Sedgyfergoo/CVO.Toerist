import React, { Component } from "react";
import Topics from "../components/topics/Topics";
import dataTopics from "../data/data.json";

const WrappedLink = () => {
  return (
    <button>
      <navlink to="/region/0">{"Back Home"}</navlink>
    </button>
  );
};

class TopicsPage extends Component {
  render() {
    const data = dataTopics.region[0].pois;
    console.log(data);

    return (
      <fragment>
        <WrappedLink />
        <div>
          {data.map(row => {
            return <Topics TopicName={row.name} TopicImage={row.image} />;
          })}
        </div>
      </fragment>
    );
  }
}

export default TopicsPage;
