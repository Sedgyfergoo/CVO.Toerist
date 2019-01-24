import React, { Component, Fragment } from "react";
import "./region.css";

class Region extends Component {
  render() {
    const { id, name, image, enterText, onClick } = this.props;

    return (
      <Fragment>
        <h1>{name}</h1>
        <img className="region-img" alt="region" src={image} />
        <br />
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
