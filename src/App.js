// import './App.css';
import Footer from "./Pages/Footer"
import Intro from "./Pages/Intro"
import Main from "./Pages/Main"
import {Route} from "react-router-dom";

function App() {
  return (
    <div className="appBase">
    <switch>
      <Route path="/" exact component={Intro}></Route>
      <Route path="/main" exact component={Main}></Route>
    </switch>
    <section>
    <Footer></Footer>
    </section>
    </div>
  );
}

export default App;
