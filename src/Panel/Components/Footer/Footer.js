import React from "react";
import './style.css';

function Footer () {
    return(
        <>
        <div className="footer-section">
            <div className="footer-content">
                <h2 className="footer-section--title">Contact me</h2>
                <p>I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.</p>
                <button 
                className="aboutus-link"
                onClick={()=>{
                    window.open("https://www.linkedin.com/in/ripudaman-rajpoot-b79584160?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BKub1ECM9R7W2ehOE5XjCvA%3D%3D")
                }}
                >Contact me</button>
            </div>
        </div>
        </>
    )
}

export default Footer;