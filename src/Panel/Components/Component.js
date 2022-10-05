import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Bodylayout from "./BodySection/Bodysection";
import { HashRouter, Route, Routes } from "react-router-dom";
import Aboutus from "./BodySection/AboutUs/Aboutus";
import Role from "./BodySection/Roles/Role";
import Pagenotfound from "./BodySection/pagenotfound/Pagenotfound";

function Components() {
    return (
        <>
            <Header />
                <Routes>
                    <Route path="/Demoweb" element={<Bodylayout />} />
                    <Route path="Demoweb/aboutus" element={<Aboutus />} />
                    <Route path="Demoweb/Roles" element={<Role/>} />
                    <Route path="Demoweb/Contact" element={<Pagenotfound/>} />
                </Routes>
            <Footer />
        </>
    )
}
export default Components;