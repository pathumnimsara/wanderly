import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight, Compass, Heart, Mountain, Waves } from "lucide-react";
import { Link } from "react-router-dom";

import SectionTitle from "../components/SectionTitle";
import DestinationCard from "../components/DestinationCard";
import ExperienceCard from "../components/ExperienceCard";

import { destinations } from "../data/destinations";
import { experiences } from "../data/experiences";

function Home() {
  return (
    <>

      {/* HERO */}

      <section className="hero">

        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2000&q=90"
        >
          <source
            src="/videos/south-asia.mp4"
            type="video/mp4"
          />
        </video>

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <motion.p
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            SOUTH ASIA / 2026
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Where every
            <br />
            <span>journey begins.</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Discover the hidden beauty, ancient cultures and
            unforgettable landscapes of South Asia.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/destinations" className="primary-button">
              Explore destinations
              <ArrowUpRight size={18} />
            </Link>

            <Link to="/plan" className="outline-button">
              Plan my journey
            </Link>
          </motion.div>

        </div>

        <div className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={18} />
        </div>

      </section>


      {/* INTRO */}

      <section className="intro-section">

        <div className="intro-number">01</div>

        <div className="intro-content">

          <p className="eyebrow">THE WANDERLY JOURNEY</p>

          <h2>
            Go beyond
            <br />
            <span>the ordinary.</span>
          </h2>

          <p>
            South Asia is more than a destination.
            It is a collection of stories, landscapes,
            flavours and people waiting to be discovered.
          </p>

          <Link to="/about" className="text-link">
            Discover our story
            <ArrowUpRight size={18} />
          </Link>

        </div>

      </section>


      {/* DESTINATIONS */}

      <section className="destinations-section">

        <SectionTitle
          eyebrow="EXPLORE SOUTH ASIA"
          title="Places worth"
          highlight="getting lost in."
          description="From misty mountain towns to tropical islands,
          discover destinations that stay with you long after the journey ends."
        />

        <div className="destination-grid">

          {destinations.slice(0, 4).map((destination, index) => (
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

        <div className="center-button">
          <Link to="/destinations" className="dark-button">
            View all destinations
            <ArrowUpRight size={18} />
          </Link>
        </div>

      </section>


      {/* EXPERIENCES */}

      <section className="experiences-section">

        <div className="experiences-header">

          <SectionTitle
            eyebrow="TRAVEL YOUR WAY"
            title="Choose your"
            highlight="experience."
            light
          />

          <Link to="/experiences" className="light-link">
            View all experiences
            <ArrowUpRight size={18} />
          </Link>

        </div>

        <div className="experience-grid">

          {experiences.slice(0, 4).map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <ExperienceCard experience={experience} />
            </motion.div>
          ))}

        </div>

      </section>


      {/* STATS */}

      <section className="stats-section">

        <div className="stat">
          <span>06</span>
          <p>Countries</p>
        </div>

        <div className="stat">
          <span>40+</span>
          <p>Destinations</p>
        </div>

        <div className="stat">
          <span>100+</span>
          <p>Experiences</p>
        </div>

        <div className="stat">
          <span>01</span>
          <p>Unforgettable journey</p>
        </div>

      </section>


      {/* WHY WANDERLY */}

      <section className="why-section">

        <SectionTitle
          eyebrow="WHY WANDERLY"
          title="Travel deeper."
          highlight="Feel more."
          description="We believe the best journeys are the ones that connect you with a place."
        />

        <div className="why-grid">

          <div className="why-card">
            <Compass size={32} />
            <h3>Local discoveries</h3>
            <p>
              Find the places beyond the usual tourist routes.
            </p>
          </div>

          <div className="why-card">
            <Heart size={32} />
            <h3>Meaningful journeys</h3>
            <p>
              Travel experiences designed to create memories.
            </p>
          </div>

          <div className="why-card">
            <Mountain size={32} />
            <h3>Wild adventures</h3>
            <p>
              From Himalayan peaks to tropical jungles.
            </p>
          </div>

          <div className="why-card">
            <Waves size={32} />
            <h3>Island escapes</h3>
            <p>
              Slow mornings, blue oceans and endless horizons.
            </p>
          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="home-cta">

        <div className="cta-overlay"></div>

        <div className="cta-content">

          <p>YOUR NEXT STORY STARTS HERE</p>

          <h2>
            Ready to explore
            <br />
            <span>South Asia?</span>
          </h2>

          <Link to="/plan" className="primary-button">
            Start your journey
            <ArrowUpRight size={18} />
          </Link>

        </div>

      </section>

    </>
  );
}

export default Home;