import React from "react";
import heroimg from '../../../Assets/img/StockSnap_1WY4L3TRRC.jpg';
import './style.css';

 function Hero () {
    return(
        <>
        <div 
        data-aos="fade-up" 
        data-aos-once="false"
        className="Hero-section">
            <div className="hero-banner">
                <img src={heroimg} height={700} width={'100%'}/>
                <div className="hero-title">
                    <h1 className="hero-section--tittleheading">Hi,</h1>
                    <h1 className="hero-section--tittleheading">I'm Ripu,</h1>
                    <h1 className="hero-section--tittleheading">Backend developer</h1>
                    <p className="hero-section--subheading">Backend Developer / Javascript Developer </p>
                </div>
            </div>
        </div>
        </>
    )
 }
  export default Hero;