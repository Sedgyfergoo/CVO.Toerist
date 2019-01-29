import React, { Component } from "react";
import "./App.css";
import RegionPage from "./scenes/RegionPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TopicsPage from "./scenes/TopicsPage";
import TopicDetailPage from "./scenes/TopicDetailPage";

class App extends Component {

  routeDefinition = () => {
    return (
      <Router>
        <div>
          <Route path="" exact component={RegionPage} />
          <Route path="/region/:id" exact component={RegionPage} />
          <Route path="/region/:id/topics" exact component={TopicsPage} />
          <Route path="/region/:id/topics/:id" exact component={TopicDetailPage} />

        </div>
      </Router>
    )
  }

  render() {
    return (
      <div className="App">
        {this.routeDefinition()}
      </div>
    );
  }
}

export default App;
