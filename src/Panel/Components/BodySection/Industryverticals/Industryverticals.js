import React from "react";
import './style.css';
import media from '../../../../Assets/img/IndustryVertical/image_2022_10_04T07_26_53_225Z-1.png';
import medicare from '../../../../Assets/img/IndustryVertical/image_2022_10_04T07_28_01_552Z-1.png';
import finance from '../../../../Assets/img/IndustryVertical/image_2022_10_04T07_29_11_078Z-1.png';
import IT from '../../../../Assets/img/IndustryVertical/image_2022_10_04T07_30_00_061Z-1.png';
import education from '../../../../Assets/img/IndustryVertical/image_2022_10_04T07_30_54_920Z-1.png';
import automobile from '../../../../Assets/img/IndustryVertical/image_2022_10_04T07_31_53_631Z-1.png';

function Industryvertical () {
    return(
        <>
        <div className="industry-verticlas--section">
            <div className="industry-verticlas--container">
                <h2 className="section-title">Our Industry Verticals</h2>
               <ul className="industry-verticlas--list">
                <li className="industry-verticlas--item">
                    <img src={media} width={100}/>
                    <h3 className="industry-verticlas--title mt-15">Meidia Entertain</h3>
                </li>
                <li className="industry-verticlas--item">
                    <img src={medicare} width={100}/>
                    <h3 className="industry-verticlas--title mt-15">Healthcare & Pharma</h3>
                </li>
                <li className="industry-verticlas--item">
                    <img src={finance} width={100}/>
                    <h3 className="industry-verticlas--title mt-15">Banking & Financial Services</h3>
                </li>
                <li className="industry-verticlas--item">
                    <img src={IT} width={100}/>
                    <h3 className="industry-verticlas--title mt-15">Information technology</h3>
                </li>
                <li className="industry-verticlas--item">
                    <img src={education} width={100}/>
                    <h3 className="industry-verticlas--title mt-15">Education development</h3>
                </li>
                <li className="industry-verticlas--item">
                    <img src={automobile} width={100}/>
                    <h3 className="industry-verticlas--title mt-15">Automobile</h3>
                </li>
               </ul>
            </div>
        </div>
        </>
    )
}
export default Industryvertical;