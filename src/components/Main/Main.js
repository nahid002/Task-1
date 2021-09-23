import React from 'react';
import './Main.css';
import img from '../../images/hero.jpg';

const Main = () => {
    return (
        <div className="main-section">
            <div className="images">

                <img className="img1" src={img} alt="" />
                <img className="img2" src={img} alt="" />
                <img className="img3" src={img} alt="" /> 
            </div>

            <div className="info">
                <h1>About US</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas unde quo odit maiores, quibusdam esse accusantium repellat illum eligendi assumenda nostrum vel nihil deleniti labore impedit dolore. Quisquam, ex! Aperiam?</p>
            </div>
            
        </div>
    );
};

export default Main;