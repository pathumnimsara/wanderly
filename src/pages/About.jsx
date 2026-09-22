import { motion } from "motion/react";
import {
  Compass,
  Heart,
  Globe,
  Sparkles,
} from "lucide-react";

function About() {
  return (
    <div className="inner-page">

      <section className="page-hero about-hero">

        <div className="page-hero-overlay"></div>

        <div className="page-hero-content">

          <p>THE WANDERLY STORY</p>

          <h1>
            Travel with
            <br />
            <span>curiosity.</span>
          </h1>

        </div>

      </section>


      <section className="about-story">

        <div className="about-story-label">
          OUR PHILOSOPHY
        </div>

        <div className="about-story-content">

          <h2>
            South Asia is not
            <br />
            just a place.
            <br />
            <span>It is a feeling.</span>
          </h2>

          <p>
            Wanderly was created for travellers who want
            more than a checklist of destinations.
          </p>

          <p>
            We believe travel is about getting lost in
            unfamiliar streets, sharing food with strangers,
            watching the sunrise over mountains and finding
            stories in places you never expected.
          </p>

          <p>
            Our goal is simple — inspire you to discover
            South Asia differently.
          </p>

        </div>

      </section>


      <section className="values-section">

        <div className="values-heading">

          <p className="eyebrow">
            WHAT WE BELIEVE
          </p>

          <h2>
            Travel with
            <br />
            <span>intention.</span>
          </h2>

        </div>


        <div className="values-grid">

          <motion.div
            className="value-card"
            whileHover={{ y: -8 }}
          >
            <Compass size={32} />
            <h3>Curiosity</h3>
            <p>
              Always look beyond the obvious.
            </p>
          </motion.div>

          <motion.div
            className="value-card"
            whileHover={{ y: -8 }}
          >
            <Heart size={32} />
            <h3>Connection</h3>
            <p>
              Meet people and experience cultures.
            </p>
          </motion.div>

          <motion.div
            className="value-card"
            whileHover={{ y: -8 }}
          >
            <Globe size={32} />
            <h3>Discovery</h3>
            <p>
              Find the stories hidden within every place.
            </p>
          </motion.div>

          <motion.div
            className="value-card"
            whileHover={{ y: -8 }}
          >
            <Sparkles size={32} />
            <h3>Wonder</h3>
            <p>
              Leave room for unexpected moments.
            </p>
          </motion.div>

        </div>

      </section>


      <section className="about-quote">

        <h2>
          Go somewhere
          <br />
          <span>you have never been.</span>
        </h2>

      </section>

    </div>
  );
}

export default About;