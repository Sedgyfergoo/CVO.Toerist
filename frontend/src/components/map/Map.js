import React, { Component, Fragment } from "react";

import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";

export default class Map extends Component {
  render() {
    const { latitude, longitude } = this.props;

    return (
      <Fragment>
        <LeafletMap
          center={[latitude, longitude]}
          zoom={1}
          maxZoom={10}
          attributionControl={true}
          zoomControl={true}
          doubleClickZoom={true}
          scrollWheelZoom={true}
          dragging={true}
          animate={true}
          easeLinearity={0.35}
        >
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
        </LeafletMap>
      </Fragment>
    );
  }
}
