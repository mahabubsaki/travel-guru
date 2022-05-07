import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { useNavigate, useParams } from 'react-router-dom';
import NotFound from './NotFound';

const Destination = () => {
    const destination = [{
        id: '1',
        name: "Cox's Bazar",
        description: "Cox's Bazar is a city, fishing port, tourism centre, and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach. It is located 150 km  south of the city of Chittagong. Cox's Bazar is also known by the name Panowa, which translates literally as 'yellow flower'. Another old name was 'Palongkee'. The city has the longest uninterrupted natural beach in the world.The modern Cox's Bazar derives its name from Captain Hiram Cox.",
        img: "https://i.ibb.co/pvKbKZ3/Rectang.png",
    }, {
        id: '2',
        name: "Sreemangal",
        description: "Sreemangal is an upazila of Moulvibazar District in the Sylhet Division of Bangladesh. It is located at the southwest of the district, and borders the Habiganj District to the west and the Indian state of Tripura to the south. Sreemangal is often referred to as the 'tea capital' of Bangladesh, and is most famous for its tea fields. Other than tea, the rubber, pineapple, wood, betel, and lemon industries also exist in the upazila.",
        img: "https://i.ibb.co/7VhCHhQ/Sreemongol.png"
    }, {
        id: '3',
        name: "Sundarabans",
        description: "Sundarbans is a mangrove area in the delta formed by the confluence of the Padma, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans the area from the Baleswar River in Bangladesh's division of Khulna to the Hooghly River in India's state of West Bengal. It comprises closed and open mangrove forests, land used for agricultural purpose, mudflats and barren land, and is intersected by multiple tidal streams and channels.",
        img: "https://i.ibb.co/xXpQgzM/sundorbon.png"
    }, {
        id: '4',
        name: "Sajek Valley",
        description: "Sajek Tripuri Valley is one of the most popular tourist spots in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in Rangamati District.The valley is 2,000 feet above sea level.Sajek Tripuri Valley is known as the Queen of Hills & Roof of Rangamati.Sajek is a union located in the north of Chittagong Hill Tracts. It's under Baghaichori Upazila in Rangamati hill district.",
        img: "https://i.ibb.co/5hf8LYs/Sajek.png"
    }]
    const navigate = useNavigate()
    const { id } = useParams()
    const [place, setPlace] = useState({})
    useEffect(() => {
        if (id) {
            setPlace(destination.find(i => i.id === id))
        }
    }, [id])
    const { name } = place || {}
    if (!place) {
        return <NotFound></NotFound>
    }
    return (
        <div className="container" style={{ minHeight: "550px" }}>
            <hr style={{ marginTop: "75px" }}></hr>
            <div className="d-flex align-items-center flex-column-reverse flex-md-row">
                <div className="w-100 w-md-50">
                    <h2 className="fw-bolder">Stay In {name}</h2>
                </div>
                <div className="w-100 w-md-50">
                    <MapContainer className='input-map' center={[51.505, -0.09]} zoom={13}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                        />
                        <Marker position={[51.505, -0.09]} />
                    </MapContainer>
                </div>
            </div>
        </div>
    );
};

export default Destination;