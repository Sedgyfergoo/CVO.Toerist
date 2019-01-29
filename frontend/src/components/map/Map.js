import React, { Component, Fragment } from 'react';

import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet'

export default class Map extends Component {

    render() {
        const { Center } = this.props;

        return (
            <Fragment>
                <LeafletMap
                    center={Center}
                    zoom={1}
                    maxZoom={10}
                    attributionControl={true}
                    zoomControl={true}
                    doubleClickZoom={true}
                    scrollWheelZoom={true}
                    dragging={true}
                    animate={true}
                    easeLinearity={0.35}
                />

            </Fragment>
        )
    }
}
