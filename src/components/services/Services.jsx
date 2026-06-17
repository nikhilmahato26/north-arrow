import { motion } from "framer-motion";
import SectionHeading from "../common/SectionHeading";
import ServiceCard from "./ServiceCard";
import { services } from "../../data/services";
import { staggerContainer, viewportOnce } from "../../utils/motion";

export default function Services() {
  return (
    <section id="services" className="relative bg-ink-charcoal py-24 sm:py-28">
      <div className="container-luxe">
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="What We Do"
            title="End-to-End Interior"
            highlight="Solutions"
            intro="From a single modular kitchen to a complete turnkey home, every service is delivered with the same obsession for detail."
          />
        </div>

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
