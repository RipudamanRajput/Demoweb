import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Bodylayout from "./BodySection/Bodysection";
import { HashRouter, Route, Routes } from "react-router-dom";
import Aboutus from "./BodySection/AboutUs/Aboutus";

function Components() {
    return (
        <>
            <Header />
                <Routes>
                    <Route path="/Demoweb" element={<Bodylayout />} />
                    <Route path="Demoweb/aboutus" element={<Aboutus />} />
                    <Route path="Demoweb/Policy" element={<h1>Policy</h1>} />
                    <Route path="Demoweb/Contact" element={<h1>Contact Us</h1>} />
                </Routes>
            <Footer />
        </>
    )
}
export default Components;