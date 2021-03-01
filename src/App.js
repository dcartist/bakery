import Footer from "./Pages/Footer"
import Intro from "./Pages/Intro"
import Main from "./Pages/Main"
import Navigation from "./Pages/Navigation"
import {Route, Switch, useLocation} from "react-router-dom";
import { useHistory } from "react-router-dom";
import {useState} from "react"

function App() {
  let history = useHistory();
  const location = useLocation();
  const [message, setMessage] = useState(`${String.fromCharCode(160)}`)
  const [Email, setEmail] = useState('')
  console.log("Hi!!!")
  function handleEmailChange(e){
    e.preventDefault()
    setEmail(e.target.value)
  }
  function handleLoginChange(e){
    e.preventDefault()
    setEmail(e.target.value)
  }
  function validateEmail(){
    let emailValidate = /^[^@]+@\w+(\.\w+)+\w$/
    if (Email.match(emailValidate) ){
      setMessage("Congrats Your email Works")
      history.push('/main')

    } else {
      setMessage("I'm sorry your email is invalid")
    }
  }

  return (
    <div className="appBase">
      
      {location.pathname !== '/'? <Navigation Email={Email}></Navigation> : null}
    <Switch>
      <Route path="/" exact render={(props)=><Intro handleEmailChange={handleEmailChange} handleLoginChange={handleLoginChange} message={message} validateEmail={validateEmail} setEmail={setEmail} setMessage={setMessage}></Intro>}></Route>
      <Route path="/main" exact component={Main}></Route>
    </Switch>
    <section>
    <Footer></Footer>
    </section>
    </div>
  );
}

export default App;
