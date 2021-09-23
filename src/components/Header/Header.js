import React from 'react';
import './Header.css';


const Header = () => {
    return (
        <div className="header" id="amir">
            {/* //Header Section */}
            <nav className="nav-items">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Service & Package</a>
                <a href="">Gallery</a>
                <a href="">FAQ</a>
                <a href="">Contact</a>
            </nav>

            {/* carosol adding */}

            <div className="texts">
                <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">

                            <h1>A Picture is worth of Thousands Words</h1>
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi facilis necessitatibus <br/> tempore et cumque corrupti quidem dolorem odit adipisci.</h3>
                        </div>
                        <div className="carousel-item">
                        <h1>A Picture is worth of Thousands Words</h1>
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi facilis necessitatibus <br/> tempore et cumque corrupti quidem dolorem odit adipisci.</h3>
                        </div>
                        <div className="carousel-item">
                        <h1>A Picture is worth of Thousands Words</h1>
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi facilis necessitatibus <br/> tempore et cumque corrupti quidem dolorem odit adipisci.</h3>
                        </div>
                    </div>
                    
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    
                </div>
                <input type="button" value="View Gallery" />
            </div>

        </div>
    );
};

export default Header;