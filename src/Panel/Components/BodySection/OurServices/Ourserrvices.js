import React from "react";
import './style.css';
import Slider from "react-slick";
import video from '../../../../Assets/img/OurServices/sam-mcghee-KieCLNzKoBo-unsplash.jpg';
import testing from '../../../../Assets/img/OurServices/ux-indonesia-5QiGvmyJTsc-unsplash.jpg';
import staff from '../../../../Assets/img/OurServices/joao-viegas-IYLL5obdJhY-unsplash.jpg';
import development from '../../../../Assets/img/OurServices/fotis-fotopoulos-DuHKoV44prg-unsplash.jpg';
import AV from '../../../../Assets/img/OurServices/emily-lewis-JMVDrEfp9Q0-unsplash.jpg';

import { Alliexpress,Tiktok, Social, Unified, OMS } from "./Projectslogo";

function OurServices () {
    var settings = {
        dots: false,
        infinite: true,
        arrows:true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint:1024,
            settings: {slidesToShow : 3}
            },
            {
                breakpoint:768,
                settings: {slidesToShow : 2}
            },
            {
                breakpoint:420,
                settings: {slidesToShow : 1}
            },
        ]
      };
    return(
        <>
        <div className="ourservices--section">
            <div className="ourservices--container">
                <h2  className="section-title">Projects & Apps</h2>
                <div className="ourservice-list">
                <Slider {...settings} >
                    <div className="ourservice-item">
                        <Alliexpress/>
                        <h3>Alliexpress</h3>
                    </div>
                    <div className="ourservice-item">
                        <Tiktok/>
                        <h3>Tiktok</h3>
                    </div>
                    <div className="ourservice-item">
                        <Social/>
                        <h3>Social Media feeds</h3>
                    </div>
                    <div className="ourservice-item">
                        <Unified/>
                        <h3>Unified</h3>
                    </div>
                    <div className="ourservice-item">
                        <OMS/>
                        <h3>Order Management System</h3>
                    </div>
                </Slider>
                </div>
            </div>
        </div>
        </>
    )
}
export default OurServices;