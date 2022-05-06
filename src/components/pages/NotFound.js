import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center">
            <div className="text-center">
                <h1>404 Not Found</h1>
                <h1>You are looking for a page that doesn't exist</h1>
                <button className="btn btn-success" onClick={() => navigate('/')}>Back To Home</button>
            </div>
        </div>
    );
};

export default NotFound;