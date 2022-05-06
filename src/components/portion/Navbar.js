import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomLink from '../utilities/CustomLink';

const Navbar = () => {
    const navigate = useNavigate()
    const handleSearch = (e) => {
        e.preventDefault();
        e.target.reset();
        //disabling form default behavior and reseting the input
    }
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light" style={{ position: "fixed", top: "0", left: "0", right: "0", zIndex: '1' }}>
            <div className="container-fluid">
                <Link to="/">
                    <img src="https://i.ibb.co/ZxSdMdr/logo.png" alt="" width='100px' />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex ms-auto mt-2 mt-md-0" onSubmit={handleSearch}>
                        <input className="form-control me-2" type="search" placeholder="&#xF002; Search Destination" aria-label="Search" style={{ fontFamily: "Arial, FontAwesome" }} />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <CustomLink to="/news" className="nav-link">News</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink to="/destination" className="nav-link">Destination</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink to="/blogs" className="nav-link">Blogs</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink to="/contact" className="nav-link">Contact</CustomLink>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-warning p-2" onClick={() => navigate('/login')}>Login</button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-info p-2 ms-0 ms-md-2 mt-2 mt-md-0" onClick={() => navigate('/register')}>Register</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;