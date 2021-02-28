import React, {useState} from 'react'
import Logo from "../Assets/LOGO.png"
import About from "./About"

export default function Intro(props) {
    const [toggleLogin, settoggleLogin] = useState('hide')
    function toggleButton(){
        toggleLogin === "hide" ? settoggleLogin("show") : settoggleLogin("hide")
    }
    return (
        <div>
            <section className="introBackground" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/image.jpg'})` }}>
      <div>
    {/* Begin of Modal */}
    <div className={toggleLogin}>
      <div className="login-overlay"></div>
          <div className="login">  <form>
        <p>Please enter your email to login </p>
        <p>
        <input type="text" placeholder="Email Address" onChange={props.handleEmailChange}></input>
        </p>
      </form>
        <button className="smallButton greenBorderButton loginButton" onClick={toggleButton}>Login</button>
      </div>
      </div>

        {/* End of MODAL */}
      <img src={Logo} alt="Amelia's Bakery Logo"/>
      <h3>JOIN THE TEAM</h3>
      <form>
        <p>
        <input type="text" placeholder="Email Address" onChange={props.handleEmailChange}></input>
        </p>
      </form>
        <button className="smallButton greenFilledButton loginButton"> SIGN UP</button>
        <button className="smallButton greenBorderButton loginButton" onClick={toggleButton}>Login</button>
    </div>
    
    </section>
    
    <section>
      <About></About>
    </section>
        </div>
    )
}
