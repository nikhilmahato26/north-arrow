import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "../../utils/motion";

// Consistent eyebrow + title + optional intro used across sections.
export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  intro,
  align = "left",
  light = false,
}) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <motion.div
      variants={staggerContainer(0.15)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`flex max-w-3xl flex-col gap-5 ${alignment}`}
    >
      {eyebrow && (
        <motion.span variants={fadeUp} className="eyebrow">
          <span className="h-px w-8 bg-gold/60" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className={`heading-serif text-4xl sm:text-5xl lg:text-[3.4rem] ${
          light ? "text-ink-black" : "text-ivory"
        }`}
      >
        {title}{" "}
        {highlight && <span className="text-gold-gradient italic">{highlight}</span>}
      </motion.h2>
      {intro && (
        <motion.p
          variants={fadeUp}
          className={`max-w-xl text-base leading-relaxed ${
            light ? "text-ink-charcoal/70" : "text-ivory/60"
          }`}
        >
          {intro}
        </motion.p>
      )}
    </motion.div>
  );
}
