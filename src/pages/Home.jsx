import Hero from "../components/hero/Hero";
import Stats from "../components/common/Stats";
import Marquee from "../components/common/Marquee";
import Services from "../components/services/Services";
import Projects from "../components/projects/Projects";
import WhyChooseUs from "../components/services/WhyChooseUs";
import Process from "../components/process/Process";
import KitchenShowcase from "../components/services/KitchenShowcase";
import Testimonials from "../components/testimonials/Testimonials";
import Gallery from "../components/gallery/Gallery";
import ConsultationCTA from "../components/contact/ConsultationCTA";
import Contact from "../components/contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Marquee />
      <Projects />
      <WhyChooseUs />
      <Process />
      <KitchenShowcase />
      <Testimonials />
      <Gallery />
      <ConsultationCTA />
      <Contact />
    </>
  );
}
