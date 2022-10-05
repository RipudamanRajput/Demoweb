import React from "react";
import './style.css';

function Pagenotfound() {
    return (
        <>
            <div className="page-banner">
                <div className="page-banner--container">
                    <h2 className="section-title">Error</h2>
                </div>
            </div>
            <div className="aboutus-content--section">
                <div className="aboutus-content--container">
                    <h1 className="page-notfound--title">404</h1>
                    <p className="page-notfound--subtitle">Page Not Found</p>
                </div>
            </div>
        </>
    )
}
export default Pagenotfound;