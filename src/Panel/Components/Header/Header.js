import React, { useState } from "react";
import { Menu } from "react-feather";
import Topbar from "./Topbar/Topbar";
import './Topbar/style.css'
function Header() {
    const [show, setshow] = useState(false)
    return(
        <>
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