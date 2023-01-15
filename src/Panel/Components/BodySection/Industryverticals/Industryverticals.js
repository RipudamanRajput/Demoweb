import React from "react";
import './style.css';
// import Node from '../../../../Assets/img/IndustryVertical/nodejs.png';
// import Mongodb from '../../../../Assets/img/IndustryVertical/Mongodb.png';
// import JS from '../../../../Assets/img/IndustryVertical/js.png';
// import php from '../../../../Assets/img/IndustryVertical/php.png';
// import MySQL from '../../../../Assets/img/IndustryVertical/mysql.png';
import {Node, Mongodb, JS, Php, Mysql} from './skillsvgs'

function Industryvertical () {
    return(
        <>
        <div className="industry-verticlas--section">
            <div className="industry-verticlas--container">
                <h2 className="section-title">My Skills</h2>
               <ul className="industry-verticlas--list">
                <li data-aos="slide-up" className="industry-verticlas--item">
                    <Node/>
                    <h3 className="industry-verticlas--title mt-15">Node</h3>
                </li>
                <li data-aos="slide-up" className="industry-verticlas--item">
                    <Mongodb/>
                    <h3 className="industry-verticlas--title mt-15">MongoDB </h3>
                </li>
                <li data-aos="slide-up" className="industry-verticlas--item">
                    <JS/>
                    <h3 className="industry-verticlas--title mt-15">Javascript</h3>
                </li>
                <li data-aos="slide-up" className="industry-verticlas--item">
                    <Php/>
                    <h3 className="industry-verticlas--title mt-15">Php</h3>
                </li>
                <li data-aos="slide-up" className="industry-verticlas--item">
                    <Mysql/>
                    <h3 className="industry-verticlas--title mt-15">MySQL</h3>
                </li>
               </ul>
            </div>
        </div>
        </>
    )
}
export default Industryvertical;