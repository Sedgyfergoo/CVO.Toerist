import React, { Component } from "react";
import "./App.css";
import RegionPage from "./scenes/RegionPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Topics from "./components/topics/Topics";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/regions" exact component={RegionPage} />
            <Route path="/region/:id" exact component={RegionPage} />
            <Route path="/region/:id/topics" exact component={Topics} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
