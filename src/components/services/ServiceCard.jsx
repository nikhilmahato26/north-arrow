import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { fadeUp } from "../../utils/motion";

export default function ServiceCard({ service }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-charcoal transition-colors duration-500 hover:border-gold/50"
    >
      {/* Image */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-charcoal via-ink-charcoal/30 to-transparent" />
        <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-gold-grad text-ink-black opacity-0 transition-all duration-500 group-hover:opacity-100">
          <ArrowUpRight size={18} />
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-4 p-7">
        <h3 className="font-serif text-2xl text-ivory transition-colors group-hover:text-gold">
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed text-ivory/55">{service.description}</p>
        <ul className="mt-1 flex flex-col gap-2">
          {service.items.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-ivory/70">
              <Check size={14} className="text-gold" /> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Gold corner glow */}
      <div className="pointer-events-none absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-gold/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
    </motion.article>
  );
}
