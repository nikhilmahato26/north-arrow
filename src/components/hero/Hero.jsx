import { motion } from "framer-motion";
import { Star, ArrowRight, Check, Sparkles, ArrowDown } from "lucide-react";
import { brand, heroHighlights } from "../../data/site";
import { fadeUp, staggerContainer } from "../../utils/motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink-black pt-28 pb-16"
    >
      {/* Background image + overlays */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80"
          alt="Luxury living room interior by North Arrow Interiors"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-black via-ink-black/90 to-ink-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-black via-transparent to-ink-black/60" />
      </div>

      {/* Decorative floating arrow */}
      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[8%] top-[22%] hidden opacity-10 lg:block"
      >
        <svg width="180" height="180" viewBox="0 0 64 64" fill="none">
          <path d="M32 6 L52 50 L32 40 L12 50 Z" stroke="#D4A017" strokeWidth="1.2" />
        </svg>
      </motion.div>

      <div className="container-luxe relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left */}
          <motion.div
            variants={staggerContainer(0.14)}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-7"
          >
            <motion.div variants={fadeUp}>
              <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wide2 text-ivory">
                <Star size={14} className="fill-gold text-gold" />
                {brand.badge}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="heading-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[5.2rem]"
            >
              Designing Spaces That
              <br />
              Reflect Your{" "}
              <span className="text-gold-gradient italic">Lifestyle</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="flex items-center gap-2 text-sm uppercase tracking-luxe text-gold/90"
            >
              <Sparkles size={15} /> {brand.name}
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="max-w-lg text-base leading-relaxed text-ivory/65 sm:text-lg"
            >
              End-to-end interior solutions crafted with precision, elegance, and
              functionality — for homes and spaces that tell your story.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn-gold">
                Get Free Consultation <ArrowRight size={17} />
              </a>
              <a href="#projects" className="btn-ghost">
                View Projects
              </a>
            </motion.div>
          </motion.div>

          {/* Right — floating glass card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:justify-self-end"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="glass relative w-full max-w-sm rounded-3xl p-8 shadow-glass"
            >
              <div className="absolute -right-3 -top-3 h-16 w-16 rounded-full bg-gold/20 blur-2xl" />
              <p className="mb-1 text-xs uppercase tracking-luxe text-gold">
                The North Arrow Promise
              </p>
              <h3 className="mb-6 font-serif text-2xl text-ivory">
                Why families choose us
              </h3>
              <ul className="flex flex-col gap-4">
                {heroHighlights.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className="flex items-center gap-3 text-sm text-ivory/85"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-grad text-ink-black">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#services"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ivory/40 hover:text-gold transition-colors sm:flex cursor-pointer"
      >
        <span className="text-[0.6rem] uppercase tracking-luxe">Scroll</span>
        <div className="flex flex-col items-center">
          <span className="h-10 w-px bg-gradient-to-b from-gold to-transparent" />
          <ArrowDown size={12} className="text-gold -mt-1" />
        </div>
      </motion.a>
    </section>
  );
}
