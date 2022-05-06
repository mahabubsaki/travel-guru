import React from 'react';

const Navbar = () => {
    const handleSearch = (e) => {
        e.preventDefault();
        e.target.reset()
    }
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container-fluid">
                <img src="https://i.ibb.co/ZxSdMdr/logo.png" alt="" width='100px' />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex ms-0 mt-2 ms-md-4 mt-md-0" onSubmit={handleSearch}>
                        <input className="form-control me-2" type="search" placeholder="Search your Destination" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Destination</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Blogs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;