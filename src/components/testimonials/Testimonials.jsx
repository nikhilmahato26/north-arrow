import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star, Quote } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import SectionHeading from "../common/SectionHeading";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  return (
    <section className="relative bg-ink-black py-24 sm:py-28">
      <div className="container-luxe">
        <div className="mb-14 flex justify-center">
          <SectionHeading
            align="center"
            eyebrow="Client Love"
            title="Clients About"
            highlight="Our Work"
            intro="Real stories from families and businesses whose spaces we've brought to life."
          />
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={28}
          slidesPerView={1}
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          className="!pb-14"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id} className="h-auto">
              <div className="glass flex h-full flex-col gap-5 rounded-3xl p-8">
                <div className="flex items-center justify-between">
                  <Quote size={36} className="text-gold/40" />
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={15} className="fill-gold text-gold" />
                    ))}
                  </div>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-ivory/75">
                  “{t.quote}”
                </p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-serif text-lg text-ivory">{t.name}</p>
                  <p className="text-xs uppercase tracking-wide2 text-gold/70">
                    {t.location}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
