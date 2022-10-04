import React from "react";
import Hero from "../HeroSection/Hero";
import Industryvertical from "./Industryverticals/Industryverticals";
import Intro from "./Intro/Intro";
import OurServices from "./OurServices/Ourserrvices";

function Bodylayout () {
    return(
    <>
    <Hero/>
    <Intro/>
    <Industryvertical/>
    <OurServices/>
    </>
    )
}
export default Bodylayout;