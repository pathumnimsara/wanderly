import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DestinationDetails from "./pages/DestinationDetails";
import ExperienceDetails from "./pages/ExperienceDetails";

import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Experiences from "./pages/Experiences";
import About from "./pages/About";
import Plan from "./pages/Plan";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Routes>
          <Route
  path="/destinations/:id"
  element={<DestinationDetails />}
/>
<Route
  path="/experiences/:id"
  element={<ExperienceDetails />}
/>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/about" element={<About />} />
          <Route path="/plan" element={<Plan />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;