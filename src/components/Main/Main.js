import React from 'react';
import './Main.css';
import img from '../../images/nahid.jpeg';

const Main = () => {
    return (
        <div className="main-section row ms-3 mt-5 ">
            
            <div className="images col col-lg-6 col-sm-12 ">

                <img className="img1" src={img} alt="" />
                <img className="img2" src={img} alt="" />
                <img className="img3" src={img} alt="" /> 
            </div>

            <div className="info col col-lg-6 col-sm-12">
                <h1>About US</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas unde quo odit maiores, quibusdam esse accusantium repellat illum eligendi assumenda nostrum vel nihil deleniti labore impedit dolore. Quisquam, ex! Aperiam?</p>
            </div>
            
        </div>
    );
};

export default Main;