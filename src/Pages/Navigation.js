import React from 'react'
import Logo from "../Assets/LOGO.png"
import {Link} from "react-router-dom"
export default function Navigation(props) {
    return (
        <div>
        <div className="navigation">
        <img src={Logo} alt="Amelia's Bakery Logo"/>
        <ul>
            <li><Link to="/">Intro</Link></li>
            <li><Link to="/main">Main</Link></li>
        </ul>
        </div>
        <div className="welcome">
            Welcome {props.Email.length === 0 ? "Now known as Bob Ross" : props.Email}
        </div>
        </div>
       
    )
}
