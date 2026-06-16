import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { kitchens } from "../../data/kitchens";
import SectionHeading from "../common/SectionHeading";

export default function KitchenShowcase() {
  const [active, setActive] = useState(0);
  const current = kitchens[active];

  return (
    <section className="relative overflow-hidden bg-ink-black py-24 sm:py-28">
      {/* Full-width feature image */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={current.id}
            src={current.image}
            alt={current.name}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-ink-black via-ink-black/85 to-ink-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-black to-transparent" />
      </div>

      <div className="container-luxe relative z-10">
        <SectionHeading
          eyebrow="Signature Collection"
          title="Luxury Modular"
          highlight="Kitchens"
          intro="The kitchen is where every story begins. Explore configurations engineered for the way Indian families cook, gather and celebrate."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          {/* Selector */}
          <div className="flex flex-col gap-3">
            {kitchens.map((k, i) => (
              <button
                key={k.id}
                onClick={() => setActive(i)}
                className={`group flex items-center justify-between rounded-2xl border px-6 py-5 text-left transition-all duration-300 ${
                  active === i
                    ? "border-gold/60 bg-white/[0.06] backdrop-blur-md"
                    : "border-white/10 hover:border-gold/30"
                }`}
              >
                <div>
                  <span
                    className={`font-serif text-2xl transition-colors ${
                      active === i ? "text-gold" : "text-ivory/80"
                    }`}
                  >
                    {k.name}
                  </span>
                  <p className="mt-1 max-w-sm text-sm text-ivory/50">{k.blurb}</p>
                </div>
                <ArrowRight
                  size={20}
                  className={`shrink-0 transition-all ${
                    active === i
                      ? "translate-x-0 text-gold opacity-100"
                      : "-translate-x-2 text-ivory/40 opacity-0 group-hover:opacity-100"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Caption card */}
          <motion.div
            key={current.id + "-caption"}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass max-w-md rounded-3xl p-8 lg:ml-auto"
          >
            <p className="mb-1 text-xs uppercase tracking-luxe text-gold">
              Now Viewing
            </p>
            <h3 className="mb-3 font-serif text-3xl text-ivory">{current.name}</h3>
            <p className="mb-6 text-sm leading-relaxed text-ivory/60">{current.blurb}</p>
            <a href="#contact" className="btn-gold !py-3 text-xs">
              Design My Kitchen <ArrowRight size={15} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
