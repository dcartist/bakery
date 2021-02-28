import React from 'react'
import Facebook from "../Assets/FACEBOOK.png"
import Instagram from "../Assets/INSTA.png"

export default function Footer() {
    return (
        <section className="footer">
            <div>
                <img src={Facebook} alt="Facebook"/>
                <img src={Instagram} alt="Instagram"/>
            </div>
            <p>Privacy Policy</p>
        </section>
    )
}
