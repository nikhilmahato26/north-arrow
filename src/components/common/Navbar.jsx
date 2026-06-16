import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";
import useScrolled from "../../hooks/useScrolled";
import { navLinks, brand } from "../../data/site";

export default function Navbar() {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-ink-black/85 py-3 backdrop-blur-xl"
            : "border-b border-transparent py-5"
        }`}
      >
        <nav className="container-luxe flex items-center justify-between">
          <Logo />

          <ul className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative text-sm font-medium uppercase tracking-wide2 text-ivory/75 transition-colors hover:text-ivory"
                >
                  {link.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-4 lg:flex">
            <a href={`tel:${brand.phoneRaw}`} className="btn-gold !py-2.5 !px-5 text-xs">
              <Phone size={15} /> {brand.phoneDisplay}
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-ivory lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-ink-black/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i }}
                  className="font-serif text-3xl text-ivory hover:text-gold"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href={`tel:${brand.phoneRaw}`}
                onClick={() => setOpen(false)}
                className="btn-gold mt-4"
              >
                <Phone size={16} /> Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
