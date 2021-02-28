import React, {useState} from 'react'
import Logo from "../Assets/LOGO.png"
import About from "./About"

export default function Intro(props) {
    const [toggleLogin, settoggleLogin] = useState('hide')
    function toggleButton(){
        props.setEmail("")
        props.setMessage(`${String.fromCharCode(160)}`)
        toggleLogin === "hide" ? settoggleLogin("show") : settoggleLogin("hide")
    }

    return (
        <div>
            <section className="introBackground" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/image.jpg'})` }}>
      <div>
    {/* Begin of Modal */}
    <div className={toggleLogin}>
      <div className="login-overlay"></div>
          <div className="login">  
          <p class="close" id="close">
                                <button class="closeButton" onClick={toggleButton}> X Close</button>
                            </p>
          <form>
        <p>Please enter your email to login </p>
        <p>
        <input type="text" placeholder="Email Address" onChange={props.handleEmailChange}></input>
        </p>
      </form>
        <button className="smallButton greenBorderButton loginButton" onClick={props.validateEmail}>Login</button>
        <p>{props.message}</p>
      </div>
      </div>

        {/* End of MODAL */}
      <img src={Logo} alt="Amelia's Bakery Logo"/>
      <h3>JOIN THE TEAM</h3>
      <p>{props.message}</p>
      <form>
        <p>
        <input type="text" placeholder="Email Address" onChange={props.handleEmailChange}></input>
        </p>
      </form>
        <button className="smallButton greenFilledButton loginButton" onClick={props.validateEmail}> SIGN UP</button>
        <button className="smallButton greenBorderButton loginButton" onClick={toggleButton}>Login</button>
    </div>
    
    </section>
    
    <section>
      <About></About>
    </section>
        </div>
    )
}
