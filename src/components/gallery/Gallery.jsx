import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "../common/SectionHeading";
import { gallery, galleryCategories } from "../../data/gallery";

export default function Gallery() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? gallery : gallery.filter((g) => g.category === active);

  return (
    <section id="gallery" className="relative bg-ink-charcoal py-24 sm:py-28">
      <div className="container-luxe">
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Inspiration"
            title="A Gallery Where"
            highlight="Every Inch Speaks"
            intro="Browse a Pinterest-style wall of our finest finishes across every room of the home."
          />
          <div className="flex flex-wrap gap-2.5">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-wide2 transition-all ${
                  active === cat
                    ? "border-gold bg-gold-grad text-ink-black"
                    : "border-white/15 text-ivory/65 hover:border-gold/50 hover:text-ivory"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry via CSS columns */}
        <motion.div layout className="columns-2 gap-5 md:columns-3 lg:columns-4 [&>*]:mb-5">
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.figure
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="group relative block break-inside-avoid overflow-hidden rounded-2xl border border-white/10"
              >
                <img
                  src={item.image}
                  alt={`${item.category} interior design`}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    item.span === "tall" ? "h-[420px]" : "h-[260px]"
                  }`}
                />
                <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-ink-black/90 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="text-xs uppercase tracking-luxe text-gold">
                    {item.category}
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
