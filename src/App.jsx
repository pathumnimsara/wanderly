import "./App.css";

import About from "./components/About";
import Destinations from "./components/Destinations";


function App() {
  return (
    <div className="page">
      <nav>
        <div className="logo">WANDERLY</div>

       <div className="links">
  <a href="#discover">Discover</a>
  <a href="#destinations">Destinations</a>
  <a href="#about">About</a>
</div>
      </nav>

      <section className="hero" id="discover">
        <div className="hero-text">
          <p className="location">📍 Dolomites, Italy</p>

          <h1>
            The world
            <br />
            is waiting.
          </h1>

          <p className="description">
            Discover breathtaking places and unforgettable journeys
            from every corner of the world.
          </p>

          <button>Explore destinations →</button>
        </div>
      </section>

     <Destinations /> 
     <About />
    <footer>
  <div className="footer-logo">WANDERLY</div>

  <div className="footer-text">
    © 2026 Wanderly. Explore more.
  </div>
</footer>

    </div>
  );
}

export default App;