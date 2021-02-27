import './App.css';
import Logo from "./Assets/LOGO.png"
function App() {
  return (
    <div className="appBase">
    <div className="introBackground" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/image.png'})` }}>
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
    <div>
      Another one
    </div>
    </div>
  );
}

export default App;
