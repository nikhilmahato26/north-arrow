import { motion } from "framer-motion";

// Subtle arrow-inspired divider echoing the brand mark.
export default function ArrowDivider({ className = "" }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50 sm:w-28" />
      <motion.svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M12 3 L18 16 L12 13 L6 16 Z" fill="#D4A017" />
      </motion.svg>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50 sm:w-28" />
    </div>
  );
}
