import React from 'react'
import Facebook from "../Assets/FACEBOOK.png"
import Instagram from "../Assets/INSTA.png"

export default function Footer() {
    return (
        <div className="footer">
            <div>
                <img src={Facebook} alt="Facebook"/>
                <img src={Instagram} alt="Instagram"/>
            </div>
            <p>Privacy Policy</p>
        </div>
    )
}
