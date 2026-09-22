import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            WANDER<span>LY</span>
          </Link>

          <p>
            Discover the beauty, culture and unforgettable
            journeys of South Asia.
          </p>
        </div>

        <div className="footer-column">
          <h4>Explore</h4>

          <Link to="/destinations">Destinations</Link>
          <Link to="/experiences">Experiences</Link>
          <Link to="/about">About Us</Link>
          <Link to="/plan">Plan Your Journey</Link>
        </div>

        <div className="footer-column">
          <h4>Regions</h4>

          <span>Sri Lanka</span>
          <span>Maldives</span>
          <span>Nepal</span>
          <span>India</span>
          <span>Bhutan</span>
        </div>

        <div className="footer-column">
          <h4>Follow</h4>

          <a href="#instagram">
            Instagram <ArrowUpRight size={14} />
          </a>

          <a href="#facebook">
            Facebook <ArrowUpRight size={14} />
          </a>

          <a href="#youtube">
            YouTube <ArrowUpRight size={14} />
          </a>
        </div>

      </div>

      <div className="footer-bottom">

        <span>© 2026 Wanderly</span>

        <span>
          South Asia / Explore More
        </span>

        <span>
          Made for curious travellers.
        </span>

      </div>

    </footer>
  );
}

export default Footer;