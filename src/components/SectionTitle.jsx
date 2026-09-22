import { motion } from "motion/react";

function SectionTitle({
  eyebrow,
  title,
  highlight,
  description,
  light = false,
}) {
  return (
    <motion.div
      className={`section-title ${light ? "light" : ""}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}

      <h2>
        {title}
        {highlight && (
          <>
            <br />
            <span>{highlight}</span>
          </>
        )}
      </h2>

      {description && <p>{description}</p>}
    </motion.div>
  );
}

export default SectionTitle;