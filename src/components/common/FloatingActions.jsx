import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { brand } from "../../data/site";

// Persistent quick-contact buttons, bottom-right.
export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col gap-3 sm:bottom-8 sm:right-8">
      <motion.a
        href={`https://wa.me/${brand.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg"
      >
        <MessageCircle size={22} />
      </motion.a>
      <motion.a
        href={`tel:${brand.phoneRaw}`}
        aria-label="Call North Arrow Interiors"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.15, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-grad text-ink-black shadow-gold"
      >
        <Phone size={20} />
      </motion.a>
    </div>
  );
}
