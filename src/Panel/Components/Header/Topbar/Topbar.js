import React from "react";
import img from '../../../../Assets/img/cool-background.png';
import './style.css';
import {Youtube, UserCheck, User, Server, Film , PhoneCall} from 'react-feather'

function Topbar () {
    return(
        <div className="top-bar" style={{backgroundImage:`url(${img})`}}>
            
            <div className="top-bar-menus">
                <div className="tob-bar--sidemenus">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Policy</li>
                        <li>Contact Us</li>
                    </ul> 
                </div>
                <div className="top-bar--srvicemenu">
                    <div className="top-bar-servicemenuconiner">
                        <div className="top-bar--servicelist">
                            <Youtube size={70}/>
                            <h3 className="service-menu-title">Video Analytics</h3>
                        </div>
                        <div className="top-bar--servicelist">
                            <UserCheck size={70}/>
                            <h3 className="service-menu-title">User Testing</h3>
                        </div>
                        <div className="top-bar--servicelist">
                            <User size={70}/>
                            <h3 className="service-menu-title">Recruitment & Staffing</h3>
                        </div>
                        <div className="top-bar--servicelist">
                            <Server size={70}/>
                            <h3 className="service-menu-title">Development Solutions</h3>
                        </div>
                        <div className="top-bar--servicelist">
                            <Film size={70}/>
                            <h3 className="service-menu-title">AV Services</h3>
                        </div>
                        <div className="top-bar--servicelist">
                            <PhoneCall size={70}/>
                            <h3 className="service-menu-title">Contact Centre Solutions</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Topbar;