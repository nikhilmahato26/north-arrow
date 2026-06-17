import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { brand } from "../../data/site";

// Persistent quick-contact buttons, bottom-right.
export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3.5 sm:bottom-8 sm:right-8">
      {/* WhatsApp Contacts */}
      {brand.whatsappContacts?.map((contact, index) => (
        <motion.a
          key={contact.name}
          href={`https://wa.me/${contact.phone}`}
          target="_blank"
          rel="noreferrer"
          aria-label={`Chat with ${contact.name} on WhatsApp`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8 + index * 0.15, type: "spring", stiffness: 260, damping: 20 }}
          whileHover="hover"
          className="group relative flex items-center justify-center"
        >
          {/* Tooltip Label (slides out on hover) */}
          <motion.div
            variants={{
              hover: { opacity: 1, x: 0, scale: 1 },
            }}
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-xl border border-white/10 bg-ink-charcoal/95 px-3 py-1.5 text-right shadow-xl backdrop-blur-md"
          >
            <div className="text-xs font-semibold text-ivory">{contact.name}</div>
            <div className="text-[10px] text-gold/80">{contact.role}</div>
          </motion.div>

          {/* Profile Avatar Container */}
          <div className="relative h-12 w-12 rounded-full border border-white/20 bg-ink-charcoal p-0.5 shadow-lg transition-all duration-300 hover:border-gold">
            <img
              src={contact.avatar}
              alt={contact.name}
              className="h-full w-full rounded-full object-cover"
            />
            {/* WhatsApp Mini Badge at bottom-right */}
            <div className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-[#25D366] text-white shadow-md">
              <svg
                viewBox="0 0 24 24"
                className="h-3 w-3 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.031 2C6.476 2 2 6.477 2 12.032c0 2.222.724 4.28 1.95 5.968l-1.285 4.693 4.81-1.26a9.96 9.96 0 004.556 1.1c5.556 0 10.032-4.478 10.032-10.033A10.032 10.032 0 0012.03 2zm5.842 14.184c-.244.693-1.42 1.265-1.95 1.341-.53.076-1.1.28-3.415-.678-2.972-1.233-4.887-4.249-5.034-4.448-.148-.198-1.2-1.594-1.2-3.04 0-1.447.76-2.158 1.03-2.434.27-.276.6-.347.8-.347h.57c.176 0 .416-.07.653.493.245.594.832 2.032.9 2.174.072.14.12.305.025.49-.096.188-.145.304-.288.472-.146.167-.307.375-.438.504-.148.14-.302.29-.13.585.17.294.76 1.253 1.632 2.03.112.1.21.21.314.3.73.65 1.15.82 1.574 1.02.43.2.69.172.95-.12.264-.294 1.13-1.316 1.433-1.764.3-.448.6-.375 1.004-.226.408.15 2.593 1.22 2.72 1.29.13.07.215.105.247.16.03.056.03.32-.213 1.01z" />
              </svg>
            </div>
          </div>
        </motion.a>
      ))}

      {/* Call Button */}
      <motion.a
        href={`tel:${brand.phoneRaw}`}
        aria-label="Call North Arrow Interiors"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.15, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-grad text-ink-black shadow-gold transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.5)]"
      >
        <Phone size={20} />
      </motion.a>
    </div>
  );
}

