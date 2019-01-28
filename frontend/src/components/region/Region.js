import React, { Component, Fragment } from "react";
import "./region.css";
import { NavLink } from "react-router-dom";

class Region extends Component {
  render() {
    const { name, image, navText } = this.props;

    return (
      <Fragment>
        <h1>{name}</h1>
        <img className="region-img" alt="region" src={image} />
        <br />
        <NavLink to="/region/:id/topics">{navText}</NavLink>
      </Fragment>
    );
  }
}

export default Region;
