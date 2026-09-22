import { motion } from "motion/react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

function DestinationCard({ destination, large = false }) {
  return (
    <motion.article
      className={`destination-card ${large ? "large" : ""}`}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35 }}
    >
      <Link to={`/destinations/${destination.id}`}>
        <img
          src={destination.image}
          alt={destination.city}
        />

        <div className="destination-overlay"></div>

        <div className="destination-top">
          <span>{destination.tag}</span>

          <motion.div
            className="round-arrow"
            whileHover={{ rotate: 45 }}
          >
            <ArrowUpRight size={18} />
          </motion.div>
        </div>

        <div className="destination-content">
          <div className="location">
            <MapPin size={14} />
            {destination.country}
          </div>

          <h3>{destination.city}</h3>

          <p>{destination.description}</p>
        </div>
      </Link>
    </motion.article>
  );
}

export default DestinationCard;