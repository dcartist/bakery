import React from 'react'
import Logo from "../Assets/LOGO.png"
import About from "./About"

export default function Intro(props) {
    return (
        <div>
            <section className="introBackground" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/image.jpg'})` }}>
      <div>
      <img src={Logo} alt="Amelia's Bakery Logo"/>
      <h3>JOIN THE TEAM</h3>
      <form>
        <p>
        <input type="text" placeholder="Email Address" onChange={props.handleEmailChange}></input>
        </p>
        <button className="smallButton greenFilledButton"> SIGN UP</button>
        <button className="smallButton greenBorderButton">Login</button>
      </form>
    </div>
    </section>
    
    <section>
      <About></About>
    </section>
        </div>
    )
}
