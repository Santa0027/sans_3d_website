import React from 'react';

import ControllerModel from './ControllerModel'; // 👈 adjust path if necessary

// import controllerImg from '../assets/controler-2.png';
import '../App.css';

const Hero = () => {
    return (
        <>
            {/* Header */}
            <header id="head" className="header">
                <h1 className="funact-title">FUNACT</h1>
                <div className="navbar">
                    <a href="#">Home</a>
                    <a href="#">Shop</a>
                    <a href="#">Contact</a>
                </div>
            </header>

            {/* Hero Section */}
            <div className="hero">
                <div className="content">
                    <div className="hero-text-section">
                        <h1>Explore Worlds <br /> Beyond Imagination</h1>
                        <p>Discover a deeper gaming experience with the <br /> innovative PS5® controller.</p>
                    </div>
                    <div className="hero-img-section">
                        <ControllerModel />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
