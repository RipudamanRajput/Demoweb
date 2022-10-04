import React from "react";
import './style.css';
import Slider from "react-slick";
import video from '../../../../Assets/img/OurServices/sam-mcghee-KieCLNzKoBo-unsplash.jpg';
import testing from '../../../../Assets/img/OurServices/ux-indonesia-5QiGvmyJTsc-unsplash.jpg';
import staff from '../../../../Assets/img/OurServices/joao-viegas-IYLL5obdJhY-unsplash.jpg';
import development from '../../../../Assets/img/OurServices/fotis-fotopoulos-DuHKoV44prg-unsplash.jpg';
import AV from '../../../../Assets/img/OurServices/emily-lewis-JMVDrEfp9Q0-unsplash.jpg';
import contact from '../../../../Assets/img/OurServices/berkeley-communications-WEDDt-u3q3o-unsplash.jpg';

function OurServices () {
    var settings = {
        dots: false,
        infinite: true,
        arrows:true,
        speed: 500,
        slidesToShow: 4.5,
        slidesToScroll: 1.5,
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
                <h2  className="section-title">Our services</h2>
                <div className="ourservice-list" data-aos="zoom-in-left">
                <Slider {...settings} >
                    <div className="ourservice-item">
                        <img src={video} width={250}/>
                        <h3>Video Analytics</h3>
                    </div>
                    <div className="ourservice-item">
                        <img src={testing} width={250}/>
                        <h3>User Testing</h3>
                    </div>
                    <div className="ourservice-item">
                        <img src={staff} width={250}/>
                        <h3>Recruitment & Staffing</h3>
                    </div>
                    <div className="ourservice-item">
                        <img src={development} width={250}/>
                        <h3>Development Solutions</h3>
                    </div>
                    <div className="ourservice-item">
                        <img src={AV} width={250}/>
                        <h3>AV Services</h3>
                    </div>
                    <div className="ourservice-item">
                        <img src={contact} width={250}/>
                        <h3>Contact Centre Solutions</h3>
                    </div>
                </Slider>
                </div>
            </div>
        </div>
        </>
    )
}
export default OurServices;