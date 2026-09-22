import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import DestinationCard from "../components/DestinationCard";
import { destinations } from "../data/destinations";

function Destinations() {
  return (
    <div className="inner-page">

      <section className="page-hero destinations-hero">

        <div className="page-hero-overlay"></div>

        <div className="page-hero-content">

          <p>SOUTH ASIA / DESTINATIONS</p>

          <h1>
            Places that
            <br />
            <span>stay with you.</span>
          </h1>

        </div>

      </section>


      <section className="all-destinations">

        <div className="destination-intro">

          <p className="eyebrow">
            DISCOVER SOUTH ASIA
          </p>

          <h2>
            From mountains
            <br />
            <span>to oceans.</span>
          </h2>

          <p>
            Explore a region where every country offers
            a completely different way to experience the world.
          </p>

        </div>


        <div className="full-destination-grid">

          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: (index % 2) * 0.1,
              }}
            >
              <DestinationCard
                destination={destination}
                large={index % 3 === 0}
              />
            </motion.div>
          ))}

        </div>

      </section>


      <section className="destination-banner">

        <div>

          <p>NOT SURE WHERE TO GO?</p>

          <h2>
            Let the journey
            <br />
            <span>choose you.</span>
          </h2>

        </div>

        <a href="/plan" className="primary-button">
          Plan my journey
          <ArrowUpRight size={18} />
        </a>

      </section>

    </div>
  );
}

export default Destinations;