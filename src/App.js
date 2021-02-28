// import './App.css';
import Footer from "./Pages/Footer"
import Intro from "./Pages/Intro"
import Main from "./Pages/Main"
import Navigation from "./Pages/Navigation"
import {Route, Switch, useLocation} from "react-router-dom";
import react, {useState} from "react"

function App() {

  const location = useLocation();
  const [Email, setEmail] = useState('')

  function handleEmailChange(e){
    e.preventDefault()
    console.log(e.target.value)
  }
  function handleLoginChange(e){
    e.preventDefault()
    console.log(e.target.value)
  }
  return (
    <div className="appBase">
      
      {location.pathname !== '/'? <Navigation Email={Email}></Navigation> : null}
    <Switch>
      <Route path="/" exact render={(props)=><Intro handleEmailChange={handleEmailChange} handleLoginChange={handleLoginChange}></Intro>}></Route>
      <Route path="/main" exact component={Main}></Route>
    </Switch>
    <section>
    <Footer></Footer>
    </section>
    </div>
  );
}

export default App;
