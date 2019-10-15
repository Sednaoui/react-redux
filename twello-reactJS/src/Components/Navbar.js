import React from 'react';
import './Styles/Navbar.css';

const Navbar = () => (
    <div className="topnav">
        <a
            className="active"
            href="#home">
                    Home
        </a>
        <a
            rel="noopener noreferrer"
            href="https://docs.google.com/spreadsheets/d/199B5X84m8ON6ov7QrVw5DeF20KfWScvVOnVeB9v4pWs/edit?usp=sharing"
            target="_blank">
                    About
        </a>
        <a
            rel="noopener noreferrer"
            href="https://bitbucket.org/willo32/twello"
            target="_blank">
                    Twello
        </a>
        <a
            rel="noopener noreferrer"
            href="https://www.willo.com"
            target="_blank">
                    Willo
        </a>
    </div>
);

export default Navbar;
