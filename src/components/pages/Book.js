import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NotFound from './NotFound';

const Book = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [place, setPlace] = useState({})
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
        name: "Sundarbans",
        description: "Sundarbans is a mangrove area in the delta formed by the confluence of the Padma, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans the area from the Baleswar River in Bangladesh's division of Khulna to the Hooghly River in India's state of West Bengal. It comprises closed and open mangrove forests, land used for agricultural purpose, mudflats and barren land, and is intersected by multiple tidal streams and channels.",
        img: "https://i.ibb.co/xXpQgzM/sundorbon.png"
    }, {
        id: '4',
        name: "Sajek Valley",
        description: "Sajek Tripuri Valley is one of the most popular tourist spots in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in Rangamati District.The valley is 2,000 feet above sea level.Sajek Tripuri Valley is known as the Queen of Hills & Roof of Rangamati.Sajek is a union located in the north of Chittagong Hill Tracts. It's under Baghaichori Upazila in Rangamati hill district.",
        img: "https://i.ibb.co/5hf8LYs/Sajek.png"
    }]
    useEffect(() => {
        if (id) {
            setPlace(destination.find(i => i.id === id))
        }
    }, [id])
    const { name, description } = place || {}
    const handleBooking = (e) => {
        e.preventDefault()
        const origin = e.target.origin.value
        const from = new Date(e.target.from.value).getTime()
        const to = new Date(e.target.to.value).getTime()
        const current = new Date().getTime()
        if (from < current) {
            window.alert('Invalid Booking date')
            return
        }
        if (to - from < 172800000) {
            window.alert('You need to set booking day at least 3 days')
            return
        }
        if (to - from > 518400000) {
            window.alert('You cannot set booking more than 7 days')
            return
        }
        navigate(`/destination/${parseInt(id)}`)
    }
    if (!place) {
        return <NotFound></NotFound>
    }
    return (
        <div className="home">
            <div className="d-flex flex-column flex-md-row align-items-center container" style={{ minHeight: "90vh" }}>
                <div className="w-100 w-md-50 text-white">
                    <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>{name}</h1>
                    <p>{description}</p>
                </div>
                <div className="w-100 w-md-50">
                    <div className="w-75 bg-light p-4 mx-auto rounded-3">
                        <form onSubmit={handleBooking}>
                            <label htmlFor="origin" className="mb-1 book-label">Origin</label>
                            <input type="text" name="origin" id="origin" className="w-100 book-input" required />
                            <label htmlFor="origin" className="mb-1 book-label">Destination</label>
                            <input type="text" name="destination" id="origin" className="w-100 book-input" value={name ? name : ""} readOnly={true} disabled />
                            <div className="d-flex my-2">
                                <div className='w-50 me-2'>
                                    <label htmlFor="for" className="book-label">From</label>
                                    <input type="date" name="from" id="from" className="w-100 book-input" required />
                                </div>
                                <div className='w-50 ms-2'>
                                    <label htmlFor="to" className="book-label">To</label>
                                    <input type="date" name="to" id="to" className="w-100 book-input" required />
                                </div>
                            </div>
                            <button className="w-100 mt-2 btn btn-warning" type="submit">Start Booking</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;