import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function ExperienceCard({ experience }) {
  return (
    <motion.article
      className="experience-card"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35 }}
    >
      <Link to={`/experiences/${experience.id}`}>
        <img
          src={experience.image}
          alt={experience.title}
        />

        <div className="experience-overlay"></div>

        <div className="experience-content">
          <p>{experience.subtitle}</p>

          <h3>{experience.title}</h3>

          <motion.div
            className="experience-arrow"
            whileHover={{ rotate: 45 }}
          >
            <ArrowUpRight size={20} />
          </motion.div>
        </div>
      </Link>
    </motion.article>
  );
}

export default ExperienceCard;