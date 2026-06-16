import { motion } from "framer-motion";

// North Arrow mark — a compass arrow symbolising growth, direction & transformation.
export default function Logo({ className = "", showText = true, size = 40 }) {
  return (
    <a href="#home" className={`group flex items-center gap-3 ${className}`}>
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        whileHover={{ rotate: 12 }}
        transition={{ type: "spring", stiffness: 200, damping: 12 }}
        className="shrink-0"
      >
        <rect
          x="1.5"
          y="1.5"
          width="61"
          height="61"
          rx="14"
          stroke="#D4A017"
          strokeOpacity="0.55"
          strokeWidth="1.5"
        />
        <path d="M32 12 L46 42 L32 34 L18 42 Z" fill="#D4A017" />
        <path d="M32 12 L32 34 L18 42 Z" fill="#B8890F" />
        <circle cx="32" cy="50" r="2.4" fill="#D4A017" />
      </motion.svg>
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
