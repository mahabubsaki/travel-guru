import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';


const Map = ({ place }) => {
    const [myTitle1, setMyTitle1] = useState('')
    const { name, center, marker1, marker2, marker3, title1, title2, title3 } = place
    useEffect(() => {
        if (title1) {
            setMyTitle1(title1)
        }
    }, [title1])
    return (
        <MapContainer className='input-map' center={[22.184758676550782, 89.12548560280793]} zoom={14}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={[22.184758676550782, 89.12548560280793]} title={`${myTitle1}`} />
            {/* <Marker position={[22.184758676550782, 89.12548560280793]} title={title2} />
        <Marker position={[22.184758676550782, 89.12548560280793]} title={title3} /> */}
        </MapContainer>
    );
};

export default Map;