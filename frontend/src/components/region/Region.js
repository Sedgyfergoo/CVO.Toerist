import React, { Component, Fragment } from "react";
import "./region.css";
import { NavLink } from "react-router-dom";

class Region extends Component {
  render() {
    const { id, name, image, enterText, onClick, navText } = this.props;

    return (
      <Fragment>
        <h1>{name}</h1>
        <img className="region-img" alt="region" src={image} />
        <br />
        <NavLink to="/region/:id/topics">{navText}</NavLink>
        <button
          type="button"
          onClick={() => {
            onClick(id);
          }}
        >
          {enterText}
        </button>
      </Fragment>
    );
  }
}

export default Region;
