import { motion } from "framer-motion";
import { ArrowDown, ArrowUp } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { processSteps } from "../../data/process";
import { fadeUp, staggerContainer, viewportOnce } from "../../utils/motion";

export default function Process() {
  return (
    <section id="process" className="relative bg-ink-charcoal py-24 sm:py-28">
      <div className="container-luxe">
        <div className="mb-16 flex justify-center">
          <SectionHeading
            align="center"
            eyebrow="How We Work"
            title="A Refined Six-Step"
            highlight="Design Journey"
            intro="From the first conversation to the final handover, a transparent process you can follow every step of the way."
          />
        </div>

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mx-auto max-w-5xl"
        >
          {/* Center vertical line with upward arrow at the top */}
          <span className="absolute left-1/2 top-0 -translate-x-1/2 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-gold/60 via-gold/20 to-transparent md:block" />
          <div className="absolute left-1/2 -top-10 -translate-x-1/2 hidden md:flex text-gold">
            <ArrowUp size={20} className="animate-bounce" />
          </div>

          {processSteps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={step.no}
                variants={fadeUp}
                className="relative mb-12 md:mb-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center w-full"
              >
                {/* Card Column */}
                <div className={`w-full ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"} order-1 ${isLeft ? "md:order-1" : "md:order-2"}`}>
                  <div className="rounded-2xl border border-white/10 bg-ink-black/60 p-6 transition-colors hover:border-gold/40">
                    <span className="font-serif text-xs text-gold block mb-2">{step.no}</span>
                    <h3 className="mb-2 font-serif text-2xl text-ivory">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-ivory/55">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Image Column */}
                <div className={`w-full ${isLeft ? "md:pl-12" : "md:pr-12"} order-2 ${isLeft ? "md:order-2" : "md:order-1"}`}>
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-charcoal/30 h-48 sm:h-56 md:h-60 relative group shadow-lg">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-ink-black/15 transition-opacity duration-300 group-hover:opacity-0" />
                  </div>
                </div>

                {/* Number Node on the Middle Line (Desktop only) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-ink-black font-serif text-base text-gold shadow-md">
                  {step.no}
                </div>
              </motion.div>
            );
          })}

          <motion.div variants={fadeUp} className="flex justify-center md:hidden">
            <ArrowDown className="animate-bounce text-gold" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
