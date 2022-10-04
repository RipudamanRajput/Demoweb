import React from "react";
import './style.css';

function Intro () {
    return(
        <>
            <div className="Intro-section">
                <div className="intro-section--container">
                <h2 className="section-title">Our Goals</h2>
                    <div className="intro-section--card vision">
                            <h2 className="intro-section--titel">Vision</h2>
                            <p className="intro-section--description">With a close-knit organized team that
                            consists of drive, dynamic and talented
                            professional,our vision is to be one of the
                            premium hr. service providers.</p>
                    </div>
                    <div className="intro-section--card mission">
                    <h2 className="intro-section--titel">Mission</h2>
                            <p className="intro-section--description">With a close-knit organized team that
                            consists of drive, dynamic and talented
                            professional, our vision is to be one of
                            the premium hr. service providers.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro;