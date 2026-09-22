import "./App.css";

function App() {
  return (
    <div className="page">
      <nav>
        <div className="logo">WANDERLY</div>

        <div className="links">
          <a href="#">Discover</a>
          <a href="#">Destinations</a>
          <a href="#">About</a>
        </div>
      </nav>

      <section className="hero">
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
    </div>
  );
}

export default App;