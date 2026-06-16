import { motion } from "framer-motion";
import { Phone, FileText, MessageCircle } from "lucide-react";
import { brand } from "../../data/site";
import { fadeUp, staggerContainer, viewportOnce } from "../../utils/motion";

export default function ConsultationCTA() {
  return (
    <section className="relative overflow-hidden bg-ink-black py-20">
      <div className="container-luxe">
        <motion.div
          variants={staggerContainer(0.14)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-[2rem] border border-gold/30 bg-gradient-to-br from-ink-charcoal to-ink-black px-7 py-16 text-center sm:px-16"
        >
          {/* Decorative glows + arrows */}
          <div className="pointer-events-none absolute -left-10 top-0 h-48 w-48 rounded-full bg-gold/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-gold/10 blur-3xl" />
          <svg
            className="pointer-events-none absolute right-8 top-8 hidden opacity-20 sm:block"
            width="60"
            height="60"
            viewBox="0 0 64 64"
            fill="none"
          >
            <path d="M32 6 L52 50 L32 40 L12 50 Z" stroke="#D4A017" strokeWidth="1.5" />
          </svg>

          <motion.p variants={fadeUp} className="eyebrow justify-center">
            Let's Begin
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="heading-serif mx-auto mt-4 max-w-3xl text-4xl sm:text-6xl"
          >
            Let's Design Your{" "}
            <span className="text-gold-gradient italic">Dream Space</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-xl text-base text-ivory/60"
          >
            Book a free consultation with our interior experts and take the first step
            toward a home that tells your story.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center justify-center gap-4"
          >
            <a href={`tel:${brand.phoneRaw}`} className="btn-gold">
              <Phone size={16} /> Call Now
            </a>
            <a href="#contact" className="btn-ghost">
              <FileText size={16} /> Get Quote
            </a>
            <a
              href={`https://wa.me/${brand.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#25D366]/50 px-7 py-3.5 text-sm font-medium uppercase tracking-wide2 text-[#25D366] transition-all hover:bg-[#25D366] hover:text-ink-black"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
