import logo from './logo.svg';
import './App.css';
import './App.scss';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-container">
          <div className="header-navbar">
            <span>Home</span>
            <span>About</span>
            <span>Solutions</span>
            <span>Client</span>
            <button>Login / Register</button>
          </div>
        </div>
      </header>
      <body>
        <div className="main-content">
          <div className="main-content-container">
          <div className="main-content-header">
            <h1>Artificial Intelligence</h1>
            <h6>The new normal is here now</h6>
          </div>
          <div className="main-content-body">
            <div className="main-content-quote">
            <h2 >“Robots are not going to replace humans, they are going to make their jobs much more humane.
               Difficult, demeaning, demanding, dangerous, dull – these are the jobs robots will be taking.”
            </h2>
            <h5>-Sabine Hauert, Co-founder of Robohub.org </h5>
            </div>
            
          </div>
        </div>
        </div>
      </body>
      <footer className="App-footer">
        <div className="footer-container">
          <span>Terms and Conditions</span>
          <span>FAQ</span>
          <span>Contact Us</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
