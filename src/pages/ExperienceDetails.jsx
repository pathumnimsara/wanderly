import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { experiences } from "../data/experiences";

function ExperienceDetails() {
  const { id } = useParams();

  const experience = experiences.find(
    (item) => String(item.id) === id
  );

  if (!experience) {
    return (
      <div className="destination-not-found">
        <h1>Experience not found.</h1>

        <Link to="/experiences">
          <ArrowLeft size={18} />
          Back to experiences
        </Link>
      </div>
    );
  }

  return (
    <div className="destination-details">
      <section className="details-hero">
        <img
          src={experience.image}
          alt={experience.title}
        />

        <div className="details-hero-overlay"></div>

        <div className="details-hero-content">
          <Link
            to="/experiences"
            className="back-link"
          >
            <ArrowLeft size={17} />
            All experiences
          </Link>

          <div>
            <p>{experience.subtitle}</p>

            <h1>{experience.title}</h1>
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
            WANDERLY EXPERIENCE
          </p>

          <h2>
            Experience it
            <br />
            <span>your way.</span>
          </h2>

          <p className="details-description">
            {experience.subtitle} Discover a different
            side of South Asia through this unforgettable
            travel experience.
          </p>
        </motion.div>

        <div className="details-grid">
          <div className="details-block">
            <span>01</span>
            <h3>Discover</h3>
            <p>
              Explore places, landscapes and moments
              beyond the ordinary.
            </p>
          </div>

          <div className="details-block">
            <span>02</span>
            <h3>Experience</h3>
            <p>
              Slow down, connect with the destination
              and enjoy the journey.
            </p>
          </div>

          <div className="details-block">
            <span>03</span>
            <h3>Create memories</h3>
            <p>
              Turn every moment into a story worth
              remembering.
            </p>
          </div>
        </div>
      </section>

      <section className="details-cta">
        <p>YOUR NEXT EXPERIENCE</p>

        <h2>
          Find your way
          <br />
          <span>through South Asia.</span>
        </h2>

        <Link
          to="/plan"
          className="primary-button"
        >
          Plan my journey
          <ArrowUpRight size={18} />
        </Link>
      </section>
    </div>
  );
}

export default ExperienceDetails;