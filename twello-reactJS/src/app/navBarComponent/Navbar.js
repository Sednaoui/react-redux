import React from 'react';
import './Navbar.css';

const Navbar = () => (
    <div className="topnav">
        <a
            className="active"
            href="#home">
                    Home
        </a>
        <a
            rel="noopener noreferrer"
            href=""
            target="_blank">
                    About
        </a>
        <a
            rel="noopener noreferrer"
            href=""
            target="_blank">
                    Twello
        </a>
    </div>
);

export default Navbar;
