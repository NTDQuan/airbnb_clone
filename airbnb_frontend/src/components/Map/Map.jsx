import React from 'react'
import classNames from 'classnames/bind'
import styles from './Map.module.scss'
import L from 'leaflet'
import { MapContainer, Maker, TileLayer } from 'react-leaflet'

import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon2x.src,
    shadowUrl: markerShadow.src
});

const cx = classNames.bind(styles)

const Map = ({ center }) => {
  return (
    <MapContainer 
        center={center ? center : [51.505, -0.09]} 
        zoom={center ? 4 : 2} 
        className={cx('map')}
    >
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    </MapContainer>
  )
}

export default Map
