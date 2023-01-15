import React from "react";
import './style.css';

function Intro () {
    return(
        <>
            <div className="Intro-section">
                <div className="intro-section--container">
                <h2 className="section-title">My Portfolio</h2>
                    <div 
                    data-aos="flip-up" 
                    className="intro-section--card vision">
                            <h2 className="intro-section--titel">Dropshipers</h2>
                            <p className="intro-section--description">I've done work on dropshipers apps like bulkupload product from one marketplace to another marketplace with attribute mapping. </p>
                    </div>
                    <div 
                    data-aos="flip-down"
                    className="intro-section--card mission">
                    <h2 className="intro-section--titel">Order Managementy System</h2>
                            <p className="intro-section--description">I,ve worked on Order Management system like update status of customized order that provided by customers.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro;