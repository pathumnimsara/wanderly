import { motion } from "motion/react";
import { ArrowUpRight, MapPin } from "lucide-react";

function DestinationCard({ destination, large = false }) {
  return (
    <motion.article
      className={`destination-card ${large ? "large" : ""}`}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.img
        src={destination.image}
        alt={`${destination.city}, ${destination.country}`}
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
      />

      <div className="card-overlay"></div>

      <div className="card-top">
        <span>{destination.tag}</span>

        <motion.button
          type="button"
          whileHover={{ rotate: 45 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUpRight size={18} />
        </motion.button>
      </div>

      <div className="card-content">
        <div className="card-location">
          <MapPin size={14} />
          <span>{destination.country}</span>
        </div>

        <motion.h3
          whileHover={{ x: 6 }}
          transition={{ duration: 0.3 }}
        >
          {destination.city}
        </motion.h3>
      </div>
    </motion.article>
  );
}

export default DestinationCard;