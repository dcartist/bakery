// import './App.css';
import Footer from "./Pages/Footer"
import Intro from "./Pages/Intro"
import Main from "./Pages/Main"
import Navigation from "./Pages/Navigation"
import {Route, Switch, useLocation} from "react-router-dom";

function App() {

  const location = useLocation();

  return (
    <div className="appBase">
      {location.pathname !== '/'? <Navigation></Navigation> : null}
    <Switch>
      <Route path="/" exact component={Intro}></Route>
      <Route path="/main" exact component={Main}></Route>
    </Switch>
    <section>
    <Footer></Footer>
    </section>
    </div>
  );
}

export default App;
