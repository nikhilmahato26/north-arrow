import { motion } from "framer-motion";
import { Award, Compass, Heart, ShieldCheck } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "../../utils/motion";

export default function About() {
  const highlights = [
    {
      icon: Award,
      title: "5+ Years",
      desc: "Delivering top-tier luxury design across South India.",
    },
    {
      icon: Compass,
      title: "100% Custom",
      desc: "No templates. Every layout designed around your lifestyle.",
    },
    {
      icon: Heart,
      title: "120+ Homes",
      desc: "Transforming penthouses, villas, and premium apartments.",
    },
    {
      icon: ShieldCheck,
      title: "10-Year Warranty",
      desc: "Backed by premium materials and rigorous quality audits.",
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-ink-black py-24 sm:py-28">
      {/* Subtle decorative glow */}
      <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-gold/5 blur-[120px]" />

      <div className="container-luxe relative z-10">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

          {/* Left Column — Text content & Stats */}
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-8"
          >
            <motion.div variants={fadeUp}>
              <SectionHeading
                eyebrow="Our Studio"
                title="Every Space Tells"
                highlight="A Beautiful Story"
              />
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-5 text-ivory/65 leading-relaxed text-sm sm:text-base">
              <p>
                At North Arrow Interiors, we believe your home should be a direct reflection
                of your journey, tastes, and aspirations. Based in Hyderabad, our studio is dedicated
                to crafting high-end bespoke residential spaces that seamlessly merge sophisticated
                aesthetics with functional everyday luxury.
              </p>
              <p>
                From structural space planning to final stylistic flourishes, our design journey is
                characterized by transparent processes, premium materials, and end-to-end execution.
                Our team of passionate designers, coordinators, and master craftsmen handle all
                complexity, giving you a smooth, stress-free interior transformation.
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              variants={fadeUp}
              className="grid gap-5 sm:grid-cols-2 mt-2"
            >
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-2xl border border-white/10 bg-ink-charcoal/30 p-5 transition-colors hover:border-gold/30 hover:bg-ink-charcoal/50"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold/5 text-gold">
                      <Icon size={18} />
                    </span>
                    <div>
                      <h4 className="font-serif text-lg text-ivory mb-1">{item.title}</h4>
                      <p className="text-xs text-ivory/50 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Column — Premium Overlapping Image Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative justify-self-center lg:justify-self-end w-full max-w-lg mt-8 lg:mt-0"
          >
            {/* Main Image Container */}
            <div className="relative overflow-hidden rounded-3xl border border-white/15 shadow-2xl h-[340px] sm:h-[420px] w-[90%] ml-auto group">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
                alt="Luxury living room styled by North Arrow Interiors"
                className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-ink-black/10 group-hover:opacity-0 transition-opacity duration-500" />
            </div>

            {/* Overlapping Image Container */}
            <div className="absolute -bottom-8 left-0 overflow-hidden rounded-2xl border-2 border-gold/40 shadow-[0_20px_50px_rgba(0,0,0,0.7)] h-[180px] sm:h-[220px] w-[50%] bg-ink-charcoal group/overlap">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl-y0pZUXzwm6KvcSirr-roz07YSeaqeFZTWAvqLB_zGET-WJa03Iy1fzT&s=10"
                alt="Detailed interior wood and material textures"
                className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover/overlap:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-ink-black/5" />
            </div>

            {/* Background design frame element */}
            <div className="absolute -top-6 left-6 -z-10 h-[calc(100%+12px)] w-[85%] rounded-3xl border border-gold/20" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
