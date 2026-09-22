import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "motion/react";

import { destinations } from "../data/destinations";

function DestinationDetails() {
  const { id } = useParams();

  const destination = destinations.find(
    (item) => String(item.id) === id
  );

  if (!destination) {
    return (
      <div className="destination-not-found">
        <h1>Destination not found.</h1>
        <Link to="/destinations">
          <ArrowLeft size={18} />
          Back to destinations
        </Link>
      </div>
    );
  }

  return (
    <div className="destination-details">
      <section className="details-hero">
        <img
          src={destination.image}
          alt={destination.city}
        />

        <div className="details-hero-overlay"></div>

        <div className="details-hero-content">
          <Link
            to="/destinations"
            className="back-link"
          >
            <ArrowLeft size={17} />
            All destinations
          </Link>

          <div>
            <p>{destination.country}</p>

            <h1>{destination.city}</h1>

            <span>
              <MapPin size={15} />
              {destination.region}
            </span>
          </div>
        </div>
      </section>

      <section className="details-content">
        <motion.div
          className="details-intro"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow">
            {destination.tag}
          </p>

          <h2>
            Discover{" "}
            <span>{destination.city}.</span>
          </h2>

          <p className="details-description">
            {destination.description}
          </p>
        </motion.div>

        <div className="details-grid">
          <div className="details-block">
            <span>01</span>
            <h3>Why visit?</h3>
            <p>
              Experience the landscapes, culture and
              unforgettable atmosphere of {destination.city}.
            </p>
          </div>

          <div className="details-block">
            <span>02</span>
            <h3>Experience</h3>
            <p>
              Take your time, explore beyond the obvious
              and discover the stories that make this place
              special.
            </p>
          </div>

          <div className="details-block">
            <span>03</span>
            <h3>Travel deeper</h3>
            <p>
              From local experiences to hidden corners,
              make your journey about more than simply
              seeing a destination.
            </p>
          </div>
        </div>
      </section>

      <section className="details-cta">
        <p>READY TO EXPLORE?</p>

        <h2>
          Start your journey
          <br />
          <span>through South Asia.</span>
        </h2>

        <Link to="/plan" className="primary-button">
          Plan my journey
          <ArrowUpRight size={18} />
        </Link>
      </section>
    </div>
  );
}

export default DestinationDetails;