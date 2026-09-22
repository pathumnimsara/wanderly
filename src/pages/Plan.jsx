import { motion } from "motion/react";
import { ArrowRight, MapPin, Calendar, Users } from "lucide-react";
import { useState } from "react";

function Plan() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="plan-page">

      <section className="plan-hero">

        <div className="plan-hero-overlay"></div>

        <div className="plan-hero-content">

          <p>YOUR NEXT ADVENTURE</p>

          <h1>
            Let's plan
            <br />
            <span>your journey.</span>
          </h1>

        </div>

      </section>


      <section className="plan-section">

        <div className="plan-copy">

          <p className="eyebrow">
            START HERE
          </p>

          <h2>
            Tell us what
            <br />
            <span>you are dreaming of.</span>
          </h2>

          <p>
            Tell us a little about your ideal trip and
            we'll help you imagine the possibilities.
          </p>

        </div>


        <motion.form
          className="plan-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <div className="form-group">

            <label>Your name</label>

            <input
              type="text"
              placeholder="Enter your name"
              required
            />

          </div>


          <div className="form-group">

            <label>Email address</label>

            <input
              type="email"
              placeholder="you@example.com"
              required
            />

          </div>


          <div className="form-row">

            <div className="form-group">

              <label>
                <MapPin size={15} />
                Destination
              </label>

              <select required>
                <option value="">
                  Choose a destination
                </option>

                <option>Sri Lanka</option>
                <option>Maldives</option>
                <option>Nepal</option>
                <option>India</option>
                <option>Bhutan</option>
              </select>

            </div>


            <div className="form-group">

              <label>
                <Users size={15} />
                Travellers
              </label>

              <select>
                <option>1 Traveller</option>
                <option>2 Travellers</option>
                <option>3–5 Travellers</option>
                <option>6+ Travellers</option>
              </select>

            </div>

          </div>


          <div className="form-group">

            <label>
              <Calendar size={15} />
              When are you travelling?
            </label>

            <input
              type="text"
              placeholder="e.g. December 2026"
            />

          </div>


          <div className="form-group">

            <label>
              Tell us more
            </label>

            <textarea
              rows="5"
              placeholder="What kind of experience are you looking for?"
            />

          </div>


          <button
            type="submit"
            className="form-button"
          >
            Send enquiry
            <ArrowRight size={18} />
          </button>


          {submitted && (
            <p className="success-message">
              Thanks! Your journey request has been received.
            </p>
          )}

        </motion.form>

      </section>

    </div>
  );
}

export default Plan;