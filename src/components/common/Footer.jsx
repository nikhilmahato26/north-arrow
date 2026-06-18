import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { brand, navLinks, socials } from "../../data/site";
import { services } from "../../data/services";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/10 bg-ink-black pt-20">
      <div className="container-luxe grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="flex flex-col gap-5">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-ivory/55">
            {brand.name} crafts end-to-end luxury interiors across South India — where{" "}
            <span className="text-gold/90 italic">every inch tells a story.</span>
          </p>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-ivory/70 transition-all hover:border-gold hover:text-gold"
              >
                <span className="text-xs font-medium">{s.label[0]}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-wide2 text-gold">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group inline-flex items-center gap-1 text-sm text-ivory/60 transition-colors hover:text-ivory"
                >
                  {l.label}
                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-wide2 text-gold">
            Services
          </h4>
          <ul className="flex flex-col gap-3">
            {services.map((s) => (
              <li key={s.id}>
                <a
                  href="#services"
                  className="text-sm text-ivory/60 transition-colors hover:text-ivory"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-wide2 text-gold">
            Contact
          </h4>
          <ul className="flex flex-col gap-4 text-sm text-ivory/65">
            <li>
              <a href={`tel:${brand.phoneRaw}`} className="flex items-start gap-3 hover:text-gold">
                <Phone size={16} className="mt-1 text-gold" />
                <div>
                  <span className="block">{brand.phoneDisplay}</span>
                  <span className="block text-[11px] text-ivory/40">Design Consultation</span>
                </div>
              </a>
            </li>
            <li>
              <a href={`tel:${brand.phoneRaw2}`} className="flex items-start gap-3 hover:text-gold">
                <Phone size={16} className="mt-1 text-gold" />
                <div>
                  <span className="block">{brand.phoneDisplay2}</span>
                  <span className="block text-[11px] text-ivory/40">Support & Project Updates</span>
                </div>
              </a>
            </li>
            <li>
              <a href={`mailto:${brand.email}`} className="flex items-start gap-3 hover:text-gold">
                <Mail size={16} className="mt-0.5 text-gold" /> {brand.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 text-gold" />
              {brand.location.city}, {brand.location.state}, {brand.location.country}
            </li>
          </ul>
        </div>
      </div>

      <motion.div className="border-t border-white/10">
        <div className="container-luxe flex flex-col items-center justify-between gap-3 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-ivory/45">
            © {year} {brand.name}. All rights reserved.
          </p>
          <p className="text-xs uppercase tracking-luxe text-gold/70">
            {brand.tagline}
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
