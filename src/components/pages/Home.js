import React from 'react';

const Home = () => {
    const destination = [{
        name: "COX'S BAZAR",
        description: "Cox's Bazar is a city, fishing port, tourism centre, and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach. It is located 150 km  south of the city of Chittagong. Cox's Bazar is also known by the name Panowa, which translates literally as 'yellow flower'. Another old name was 'Palongkee'. The city has the longest uninterrupted natural beach in the world.",
        img: "https://i.ibb.co/pvKbKZ3/Rectang.png",
    }, {}, {}]
    return (
        <div className="home">
            <div className="d-flex flex-column flex-md-row align-items-center container" style={{ minHeight: "90vh" }}>
                <div className="w-md-50 w-100 text-white">
                    <h1 style={{ fontSize: "50px", fontWeight: "bold" }}>{destination[0].name}</h1>
                    <p>{destination[0].description}</p>
                </div>
                <div className="w-md-50 w-100">
                    <div className="d-flex">
                        <img src="https://i.ibb.co/pvKbKZ3/Rectang.png" alt="" className='w-100 h-100' style={{ borderRadius: '10px' }} />
                        <img src="https://i.ibb.co/7VhCHhQ/Sreemongol.png" alt="" className='w-100 h-100 mx-3' />
                        <img src="https://i.ibb.co/xXpQgzM/sundorbon.png" alt="" className='w-100 h-100 me-3' />
                        <img src="https://i.ibb.co/5hf8LYs/Sajek.png" alt="" className='w-100 h-100' />
                    </div>
                    <div className="d-flex justify-content-center">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;