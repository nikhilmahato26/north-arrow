import { motion } from "framer-motion";
import { Quote, Heart, Sparkles, Compass } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce, scaleIn } from "../../utils/motion";

export default function OurStory() {
  const phases = [
    {
      num: "01",
      title: "The Shared Dream",
      subtitle: "Individually, we were building careers. But deep inside, both of us shared the same thought.",
      quote: "What if we could build something of our own?",
      desc: "A company where design wasn't just about furniture and colors. A company where every project was treated like someone's dream. A company where customers felt heard, respected, and cared for.",
      icon: Sparkles,
    },
    {
      num: "02",
      title: "The Hard Reality",
      subtitle: "That dream sounded beautiful. Reality was much harder.",
      desc: "There were days when there were more expenses than revenue. Days when opportunities slipped away after months of effort. Days when we questioned whether entrepreneurship was the right decision. There were moments when we had to choose between comfort and conviction. Moments when we worked long hours without knowing when the next project would arrive. We sacrificed weekends, family time, and personal comfort to keep moving forward.",
      highlight: "People saw confidence. They didn't see the anxiety. People saw progress. They didn't see the struggles behind it. People saw a company. They didn't see two individuals carrying the weight of a dream larger than themselves.",
      icon: Compass,
    },
    {
      num: "03",
      title: "Why We Cared",
      subtitle: "But every challenge taught us something. Every rejection made us stronger.",
      desc: "Every mistake made us wiser. Every customer who trusted us gave us one more reason not to give up. Slowly, project by project, recommendation by recommendation, North Arrow Interiors began finding its place. Not because we were the biggest. Not because we had the most resources. But because we cared.",
      quote: "We cared about every design. We cared about every detail. We cared about every family that trusted us with their home.",
      icon: Heart,
    },
  ];

  return (
    <section id="story" className="relative overflow-hidden bg-ink-charcoal/95 py-24 sm:py-32 border-t border-white/5">
      {/* Premium glow accents */}
      <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute -left-32 bottom-10 h-96 w-96 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      {/* Decorative noise overlay */}
      <div className="absolute inset-0 noise-overlay opacity-[0.02] pointer-events-none" />

      <div className="container-luxe relative z-10">
        
        {/* Header Section */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div variants={fadeUp}>
            <SectionHeading
              eyebrow="Our Origins"
              title="A Story of Dreams, Courage,"
              highlight="& Partnership"
            />
          </motion.div>
          
          <motion.p variants={fadeUp} className="text-ivory/60 mt-6 text-base sm:text-lg leading-relaxed">
            People often see a finished home and admire the beauty of the design. What they don't see are 
            the countless struggles, sacrifices, failures, and sleepless nights that built the company behind it. 
            North Arrow Interiors was not born in a boardroom.
          </motion.p>
        </motion.div>

        {/* Co-founders Side-by-Side Cards */}
        <div className="grid gap-8 lg:grid-cols-2 mb-28">
          
          {/* Nandeesh M Profile */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="group relative flex flex-col md:flex-row overflow-hidden rounded-3xl border border-white/10 bg-ink-black/40 p-6 md:p-8 hover:border-gold/30 transition-all duration-500 hover:shadow-gold/5 hover:-translate-y-1"
          >
            {/* Founder Image */}
            <div className="relative w-full md:w-48 h-64 md:h-auto shrink-0 overflow-hidden rounded-2xl border border-white/10 mb-6 md:mb-0 md:mr-8">
              <img
                src="/nandeesh-founder.jpg"
                alt="Nandeesh M - CEO & Co-Founder of North Arrow Interiors"
                className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-black/70 to-transparent md:hidden" />
            </div>

            {/* Founder Info & Journey */}
            <div className="flex flex-col justify-center">
              <span className="text-xs uppercase font-medium tracking-luxe text-gold mb-1">CEO & Co-Founder</span>
              <h3 className="font-serif text-2xl text-ivory mb-4">Nandeesh M</h3>
              <p className="text-sm text-ivory/70 leading-relaxed">
                Nandeesh's journey was built on creativity and execution. As an interior designer focused on quality, 
                design control, and transforming ideas into reality, he learned that great spaces are never created by 
                chance. They are created through attention to detail, discipline, and a relentless pursuit of perfection.
              </p>
            </div>
          </motion.div>

          {/* Lakshmi Shivani Profile */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="group relative flex flex-col md:flex-row overflow-hidden rounded-3xl border border-white/10 bg-ink-black/40 p-6 md:p-8 hover:border-gold/30 transition-all duration-500 hover:shadow-gold/5 hover:-translate-y-1"
          >
            {/* Founder Image */}
            <div className="relative w-full md:w-48 h-64 md:h-auto shrink-0 overflow-hidden rounded-2xl border border-white/10 mb-6 md:mb-0 md:mr-8">
              <img
                src="/lakshmi-founder.jpg"
                alt="Lakshmi Shivani - Co-Founder of North Arrow Interiors"
                className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-black/70 to-transparent md:hidden" />
            </div>

            {/* Founder Info & Journey */}
            <div className="flex flex-col justify-center">
              <span className="text-xs uppercase font-medium tracking-luxe text-gold mb-1">Co-Founder</span>
              <h3 className="font-serif text-2xl text-ivory mb-4">Lakshmi Shivani</h3>
              <p className="text-sm text-ivory/70 leading-relaxed">
                Lakshmi's journey was built on people. Years spent understanding customers, building relationships, 
                handling sales, business development, and learning what truly matters to families when they invest 
                their hard-earned money into a home. Every conversation taught her that customers are not looking 
                for interiors; they are looking for trust, comfort, and someone who understands their dreams.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Narrative Timeline Phases */}
        <div className="max-w-4xl mx-auto space-y-16 mb-24">
          <h4 className="text-center font-serif text-3xl text-ivory mb-12 italic">The Anatomy of Our Journey</h4>
          
          {phases.map((phase, idx) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={phase.num}
                initial={{ opacity: 0, y: 55 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 items-start border-b border-white/5 pb-12 last:border-b-0`}
              >
                {/* Visual Accent Number & Icon */}
                <div className="flex items-center gap-4 shrink-0">
                  <div className="font-serif text-5xl text-gold-gradient font-light w-16">{phase.num}</div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/20 bg-gold/5 text-gold">
                    <Icon size={20} />
                  </span>
                </div>

                {/* Content Block */}
                <div className="flex-1 space-y-4">
                  <h3 className="font-serif text-2xl text-ivory tracking-wide">{phase.title}</h3>
                  <p className="text-gold/90 font-medium text-sm sm:text-base leading-relaxed font-sans">{phase.subtitle}</p>
                  
                  {phase.quote && (
                    <div className="flex gap-3 pl-4 border-l-2 border-gold/40 my-3">
                      <Quote className="text-gold/40 shrink-0 transform rotate-180" size={18} />
                      <p className="font-serif italic text-base sm:text-lg text-ivory/95">{phase.quote}</p>
                    </div>
                  )}

                  <p className="text-ivory/65 text-sm sm:text-base leading-relaxed">{phase.desc}</p>

                  {phase.highlight && (
                    <div className="rounded-2xl border border-gold/15 bg-gold/[0.02] p-5 text-sm sm:text-base text-ivory/80 leading-relaxed font-serif italic mt-4">
                      {phase.highlight}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Conclusion, Thank You, and Sign-off */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8 }}
          className="relative max-w-3xl mx-auto rounded-3xl border border-gold/20 bg-ink-black/60 p-8 sm:p-12 text-center"
        >
          {/* Subtle glow inside the container */}
          <div className="absolute inset-0 rounded-3xl bg-gold/[0.01] pointer-events-none" />

          <Quote className="mx-auto text-gold/30 mb-6" size={32} />

          <p className="font-serif text-lg sm:text-xl text-ivory/90 italic leading-relaxed mb-8">
            Today, when we walk through a completed project and see the happiness on a client's face, 
            we are reminded why we started. North Arrow Interiors is more than an interior company. 
            It is a story of courage over fear. Faith over uncertainty. Partnership over individual success. 
            It is proof that when business expertise meets creative excellence, and when two people refuse 
            to give up on a dream, extraordinary things can happen.
          </p>

          <p className="text-ivory/60 text-sm sm:text-base leading-relaxed mb-10 font-sans">
            We are still learning. We are still growing. We are still dreaming. And this is only the beginning.<br />
            To every client, partner, employee, friend, and family member who believed in us when all 
            we had was a vision—thank you. You didn't just support a business. You helped build a dream.
          </p>

          <div className="inline-flex flex-col items-center">
            <span className="font-serif text-xl sm:text-2xl text-gold-gradient tracking-wide">
              Lakshmi Shivani & Nandeesh
            </span>
            <span className="text-xs uppercase tracking-luxe text-ivory/40 mt-1.5">
              Co-Founders, North Arrow Interiors
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
