import React, { useContext } from 'react';
import { GrFormNext, GrFormPrevious, GrFormNextLink } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom';
import { InfoContext } from '../../App';

const Home = () => {
    const { decrease, increase, count } = useContext(InfoContext)
    const navigate = useNavigate()
    const destination = [{
        id: '1',
        name: "COX'S BAZAR",
        description: "Cox's Bazar is a city, fishing port, tourism centre, and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach. It is located 150 km  south of the city of Chittagong. Cox's Bazar is also known by the name Panowa, which translates literally as 'yellow flower'. Another old name was 'Palongkee'. The city has the longest uninterrupted natural beach in the world.The modern Cox's Bazar derives its name from Captain Hiram Cox.",
        img: "https://i.ibb.co/pvKbKZ3/Rectang.png",
    }, {
        id: '2',
        name: "SREEMANGAL",
        description: "Sreemangal is an upazila of Moulvibazar District in the Sylhet Division of Bangladesh. It is located at the southwest of the district, and borders the Habiganj District to the west and the Indian state of Tripura to the south. Sreemangal is often referred to as the 'tea capital' of Bangladesh, and is most famous for its tea fields. Other than tea, the rubber, pineapple, wood, betel, and lemon industries also exist in the upazila.",
        img: "https://i.ibb.co/7VhCHhQ/Sreemongol.png"
    }, {
        id: '3',
        name: "SUNDARBANS",
        description: "Sundarbans is a mangrove area in the delta formed by the confluence of the Padma, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans the area from the Baleswar River in Bangladesh's division of Khulna to the Hooghly River in India's state of West Bengal. It comprises closed and open mangrove forests, land used for agricultural purpose, mudflats and barren land, and is intersected by multiple tidal streams and channels.",
        img: "https://i.ibb.co/xXpQgzM/sundorbon.png"
    }, {
        id: '4',
        name: "SAJEK VALLEY",
        description: "Sajek Tripuri Valley is one of the most popular tourist spots in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in Rangamati District.The valley is 2,000 feet above sea level.Sajek Tripuri Valley is known as the Queen of Hills & Roof of Rangamati.Sajek is a union located in the north of Chittagong Hill Tracts. It's under Baghaichori Upazila in Rangamati hill district.",
        img: "https://i.ibb.co/5hf8LYs/Sajek.png"
    }]
    const bookBtn = () => {
        navigate(`book/${count + 1}`)
    }
    return (
        <div className="home">
            <div className="d-flex flex-column flex-md-row align-items-center container" style={{ minHeight: "90vh" }}>
                <div className="info text-white mb-2 mb-md-0">
                    <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>{destination[count].name}</h1>
                    <p>{destination[count].description.slice(0, 150) + "..."}</p>
                    <button className="btn btn-warning" style={{ fontSize: '20px' }} onClick={bookBtn}>Book Now
                        <GrFormNextLink className="ms-2"></GrFormNextLink></button>
                </div>
                <div className="img mt-2 mt-md-0">
                    <div className="d-flex">
                        <img src={destination[0].img} alt="" className={`w-100 ${count === 0 ? 'border border-2 border-warning' : ''}`} style={{ borderRadius: '10px' }} />
                        <img src="https://i.ibb.co/7VhCHhQ/Sreemongol.png" alt="" className={`w-100 mx-3 ${count === 1 ? 'border border-2 border-warning' : ''}`} style={{ borderRadius: '10px' }} />
                        <img src="https://i.ibb.co/xXpQgzM/sundorbon.png" alt="" className={`w-100 me-3 ${count === 2 ? 'border border-2 border-warning' : ''}`} style={{ borderRadius: '10px' }} />
                        <img src="https://i.ibb.co/5hf8LYs/Sajek.png" alt="" className={`w-100 ${count === 3 ? 'border border-2 border-warning' : ''}`} style={{ borderRadius: '10px' }} />
                    </div>
                    <div className="d-flex justify-content-center mt-2">
                        <div>
                            <button className="btn btn-transparent rounded-circle me-2 bg-light" onClick={decrease}><GrFormPrevious></GrFormPrevious></button>
                            <button className="btn btn-transparent rounded-circle ms-2 bg-light" onClick={increase}><GrFormNext></GrFormNext></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;