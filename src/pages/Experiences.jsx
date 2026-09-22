import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import ExperienceCard from "../components/ExperienceCard";
import { experiences } from "../data/experiences";

function Experiences() {
  return (
    <div className="inner-page">

      <section className="page-hero experiences-hero">

        <div className="page-hero-overlay"></div>

        <div className="page-hero-content">

          <p>WANDERLY / EXPERIENCES</p>

          <h1>
            Travel your
            <br />
            <span>own way.</span>
          </h1>

        </div>

      </section>


      <section className="experiences-page">

        <div className="destination-intro">

          <p className="eyebrow">
            FIND YOUR EXPERIENCE
          </p>

          <h2>
            There is a journey
            <br />
            <span>for everyone.</span>
          </h2>

        </div>


        <div className="experience-page-grid">

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
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
                duration: 0.6,
                delay: (index % 2) * 0.1,
              }}
            >
              <ExperienceCard experience={experience} />
            </motion.div>
          ))}

        </div>

      </section>


      <section className="experience-quote">

        <p>
          “The journey is not about the places
          you visit. It is about who you become
          along the way.”
        </p>

      </section>

    </div>
  );
}

export default Experiences;