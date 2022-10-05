import React from "react";
import Hero from "../HeroSection/Hero";
import Industryvertical from "./Industryverticals/Industryverticals";
import Intro from "./Intro/Intro";
import OurServices from "./OurServices/Ourserrvices";

function Bodylayout() {
    return (
        <>
            <Hero />
            <div className="main-layout">
                <Intro />
                <Industryvertical />
                <OurServices />
            </div>
        </>
    )
}
export default Bodylayout;