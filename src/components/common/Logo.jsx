import { motion } from "framer-motion";

// North Arrow mark — a compass arrow symbolising growth, direction & transformation.
export default function Logo({ className = "", showText = true, size = 40 }) {
  return (
    <a href="#home" className={`group flex items-center gap-3 ${className}`}>
      <motion.img
        src="/logo.jpeg"
        alt="North Arrow Interiors"
        width={size}
        height={size}
        style={{ width: size, height: size }}
        whileHover={{ rotate: 12 }}
        transition={{ type: "spring", stiffness: 200, damping: 12 }}
        className="shrink-0 rounded-xl object-cover"
      />
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="font-serif text-xl tracking-wide text-ivory">
            North Arrow
          </span>
          <span className="text-[0.6rem] uppercase tracking-luxe text-gold/80">
            Interiors
          </span>
        </span>
      )}
    </a>
  );
}
