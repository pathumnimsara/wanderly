import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <Link to="/" className="logo" onClick={closeMenu}>
        WANDER<span>LY</span>
      </Link>

      <nav className={`nav-links ${open ? "open" : ""}`}>
        <NavLink to="/" end onClick={closeMenu}>
          Discover
        </NavLink>

        <NavLink to="/destinations" onClick={closeMenu}>
          Destinations
        </NavLink>

        <NavLink to="/experiences" onClick={closeMenu}>
          Experiences
        </NavLink>

        <NavLink to="/about" onClick={closeMenu}>
          About
        </NavLink>

        <Link
          to="/plan"
          className="nav-cta"
          onClick={closeMenu}
        >
          Plan My Trip
        </Link>
      </nav>

      <button
        className="menu-button"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? <X size={25} /> : <Menu size={25} />}
      </button>
    </header>
  );
}

export default Navbar;