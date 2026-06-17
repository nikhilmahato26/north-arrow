import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
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

          {/* Desktop Phone Dropdown */}
          <div className="relative group hidden lg:block">
            <button className="btn-gold !py-2.5 !px-5 text-xs flex items-center gap-1.5 cursor-pointer">
              <Phone size={14} /> Call Us <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
            </button>
            <div className="absolute right-0 top-full mt-2 w-56 origin-top-right rounded-xl border border-white/10 bg-ink-charcoal/95 p-2 shadow-2xl backdrop-blur-md opacity-0 invisible scale-95 group-hover:opacity-100 group-hover:visible group-hover:scale-100 transition-all duration-300 z-50">
              <a
                href={`tel:${brand.phoneRaw}`}
                className="flex items-center gap-2.5 rounded-lg p-2.5 text-xs text-ivory/80 hover:text-ivory hover:bg-white/5 transition-colors"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/10 text-gold shrink-0">
                  <Phone size={12} />
                </span>
                <div className="text-left">
                  <div className="font-semibold">Design Consultation</div>
                  <div className="text-[10px] text-ivory/55">{brand.phoneDisplay}</div>
                </div>
              </a>
              <div className="h-px bg-white/10 my-1" />
              <a
                href="tel:+919945595463"
                className="flex items-center gap-2.5 rounded-lg p-2.5 text-xs text-ivory/80 hover:text-ivory hover:bg-white/5 transition-colors"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/10 text-gold shrink-0">
                  <Phone size={12} />
                </span>
                <div className="text-left">
                  <div className="font-semibold">Support & Projects</div>
                  <div className="text-[10px] text-ivory/55">+91 99455 95463</div>
                </div>
              </a>
            </div>
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
            <div className="flex h-full flex-col items-center justify-center gap-6">
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
              
              <div className="flex flex-col gap-3 mt-4 w-full px-8 max-w-xs">
                <a
                  href={`tel:${brand.phoneRaw}`}
                  onClick={() => setOpen(false)}
                  className="btn-gold flex items-center justify-center gap-2 w-full text-sm"
                >
                  <Phone size={15} /> Call Design
                </a>
                <a
                  href="tel:+919945595463"
                  onClick={() => setOpen(false)}
                  className="btn-gold flex items-center justify-center gap-2 w-full text-sm"
                >
                  <Phone size={15} /> Call Support
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
