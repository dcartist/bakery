// import './App.css';
import Logo from "./Assets/LOGO.png"
import About from "./Pages/About"
import Footer from "./Pages/Footer"
function App() {
  return (
    <div className="appBase">
    <section className="introBackground" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/image.png'})` }}>
      <div>
      <img src={Logo}/>
      <h3>JOIN THE TEAM</h3>
      <form>
        <p>
        <input type="text" placeholder="Email Address"></input>
        </p>
        <button className="smallButton greenFilledButton"> SIGN UP</button>
        <button className="smallButton greenBorderButton">Login</button>
      </form>
    </div>
    </section>
    
    <section>
      <About></About>
    </section>
    <section>
    <Footer></Footer>
    </section>
    </div>
  );
}

export default App;
