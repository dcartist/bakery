// import './App.css';
import "./style.scss"
import Logo from "./Assets/LOGO.png"
import About from "./Pages/About"
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
        <button> SIGN UP</button>
      </form>
      <button>Login</button>
    </div>
    </section>
    
    <section>
      <About></About>
    </section>
    </div>
  );
}

export default App;
