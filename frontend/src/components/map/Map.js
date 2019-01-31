import React, { Component, Fragment } from "react";

import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";

export default class Map extends Component {
  render() {
    const { center, name } = this.props;

    return (
      <Fragment>
        <LeafletMap
          center={center}
          zoom={14}
          maxZoom={200}
          attributionControl={true}
          zoomControl={true}
          doubleClickZoom={true}
          scrollWheelZoom={true}
          dragging={true}
          animate={true}
          easeLinearity={0.35}
        >
          <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
          <Marker position={center}>
            <Popup>
              <h3>{name}</h3>
            </Popup>
          </Marker>
        </LeafletMap>
      </Fragment>
    );
  }
}
