import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, TileLayer, Tooltip } from 'react-leaflet';


const Map = ({ place }) => {
    const { name, center, marker1, marker2, marker3, title1, title2, title3 } = place
    console.log(center)
    return (
        <MapContainer className='input-map' center={center ? center : [2, 2]} zoom={14}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={[22.184758676550782, 89.12548560280793]}>
                <Tooltip>{title1}</Tooltip>
            </Marker>
            {/* <Marker position={[22.184758676550782, 89.12548560280793]} title={title2} />
        <Marker position={[22.184758676550782, 89.12548560280793]} title={title3} /> */}
        </MapContainer>
    );
};

export default Map;