import { motion } from "framer-motion";
import StatCounter from "./StatCounter";
import { stats } from "../../data/stats";
import { fadeUp, staggerContainer, viewportOnce } from "../../utils/motion";

export default function Stats() {
  return (
    <section className="relative border-y border-white/10 bg-ink-charcoal py-16">
      <motion.div
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="container-luxe grid grid-cols-2 gap-10 lg:grid-cols-4"
      >
        {stats.map((s) => (
          <motion.div key={s.label} variants={fadeUp}>
            <StatCounter {...s} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
