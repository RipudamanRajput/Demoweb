import React from "react";
import heroimg from '../../../Assets/img/StockSnap_1WY4L3TRRC.jpg';
import './style.css';

 function Hero () {
    return(
        <>
        <div className="Hero-section">
            <div className="hero-banner">
                <img src={heroimg} height={700} width={'100%'}/>
                <div className="hero-title">
                    <h1 className="hero-section--tittleheading">Inland	Solutions</h1>
                    <p className="hero-section--subheading">We connect your path</p>
                </div>
            </div>
        </div>
        </>
    )
 }
  export default Hero;