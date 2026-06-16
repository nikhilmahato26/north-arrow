import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
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
          className="relative mx-auto max-w-4xl"
        >
          {/* Center vertical line */}
          <span className="absolute left-[27px] top-2 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-gold/60 via-gold/20 to-transparent md:left-1/2 md:block" />

          {processSteps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={step.no}
                variants={fadeUp}
                className={`relative mb-8 flex items-center gap-6 md:mb-12 md:w-1/2 ${
                  isLeft ? "md:ml-0 md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                }`}
              >
                {/* Number node */}
                <div
                  className={`order-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-ink-black font-serif text-lg text-gold md:absolute md:order-none ${
                    isLeft ? "md:-right-7" : "md:-left-7"
                  }`}
                >
                  {step.no}
                </div>

                {/* Card */}
                <div className="flex-1 rounded-2xl border border-white/10 bg-ink-black/60 p-6 transition-colors hover:border-gold/40">
                  <h3 className="mb-2 font-serif text-2xl text-ivory">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-ivory/55">
                    {step.description}
                  </p>
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
