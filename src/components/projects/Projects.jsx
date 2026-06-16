import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Plus } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { projects, projectCategories } from "../../data/projects";
import { viewportOnce } from "../../utils/motion";

const spanMap = {
  large: "sm:col-span-2 sm:row-span-2",
  tall: "sm:row-span-2",
  normal: "",
};

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative bg-ink-charcoal py-24 sm:py-28">
      <div className="container-luxe">
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Featured Work"
            title="Projects That"
            highlight="Tell Stories"
            intro="A curated showcase of spaces we've transformed across Hyderabad."
          />

          {/* Filters */}
          <div className="flex flex-wrap gap-2.5">
            {projectCategories.map((cat) => (
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

        {/* Masonry-style grid */}
        <motion.div
          layout
          className="grid auto-rows-[220px] grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                viewport={viewportOnce}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 ${
                  spanMap[project.size] || ""
                }`}
              >
                <img
                  src={project.image}
                  alt={`${project.title} — ${project.category}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.1s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-black/95 via-ink-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="absolute right-4 top-4 flex h-9 w-9 -rotate-45 items-center justify-center rounded-full bg-gold-grad text-ink-black opacity-0 transition-all duration-500 group-hover:rotate-0 group-hover:opacity-100">
                  <Plus size={18} />
                </span>

                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-[0.65rem] uppercase tracking-luxe text-gold">
                    {project.category}
                  </p>
                  <h3 className="font-serif text-xl text-ivory">{project.title}</h3>
                  <p className="mt-1 flex items-center gap-1 text-xs text-ivory/60">
                    <MapPin size={12} /> {project.location}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
