import React, { useState } from "react";
import { Menu } from "react-feather";
import Topbar from "./Topbar/Topbar";
import './Topbar/style.css';
import logo from '../../../Assets/img/logo/logo.png';
import { useNavigate } from "react-router-dom";

function Header() {
    const history = useNavigate();
    const [show, setshow] = useState(false)
    return(
        <>
        <span className="header-logo">
            <span className="logo-container">
                <img 
                 src={logo} 
                 width={100}
                 style={{cursor:"pointer"}}
                 onClick={()=>history('/Demoweb')}/>
            </span>
        </span>
       <span 
         className="top-bar--toggler"
         onClick={()=>setshow(!show)}
         >
            <Menu size={20}/>
        </span>
        {show &&  <Topbar/>}
        </>
    )
}
 
export default Header;