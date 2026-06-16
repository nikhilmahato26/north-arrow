import { motion } from "framer-motion";
import SectionHeading from "../common/SectionHeading";
import { whyChooseUs } from "../../data/whyChooseUs";
import { fadeUp, staggerContainer, viewportOnce } from "../../utils/motion";

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-ink-black py-24 sm:py-28">
      {/* Ambient gold glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/5 blur-3xl" />

      <div className="container-luxe relative">
        <div className="mb-16 flex justify-center">
          <SectionHeading
            align="center"
            eyebrow="Why North Arrow"
            title="Built On Trust,"
            highlight="Delivered With Care"
            intro="Eight reasons families and businesses across Hyderabad hand us the keys to their dream spaces."
          />
        </div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {whyChooseUs.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-charcoal/60 p-7 transition-colors hover:border-gold/40"
              >
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold transition-all duration-500 group-hover:bg-gold-grad group-hover:text-ink-black">
                  <Icon size={22} />
                </span>
                <h3 className="mb-2 font-serif text-xl text-ivory">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-ivory/55">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
