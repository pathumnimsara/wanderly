import { motion } from "motion/react";
import DestinationCard from "./DestinationCard";
import { destinations } from "../data/destinations";

function Destinations() {
  return (
    <section className="destinations-section" id="destinations">
      <div className="section-heading">
        <div>
          <p>EXPLORE THE WORLD</p>

          <h2>
            Places worth
            <br />
            <span>getting lost in.</span>
          </h2>
        </div>

        <p className="section-description">
          From peaceful islands to dramatic mountains, discover places
          that make every journey unforgettable.
        </p>
      </div>

      <div className="destination-grid">
        {destinations.map((destination, index) => (
          <motion.div
            key={destination.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
            }}
          >
            <DestinationCard
              destination={destination}
              large={index === 0}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Destinations;