// Infinite scrolling brand strip — reinforces the tagline with arrow motifs.
const phrases = [
  "Residential Interiors",
  "Modular Kitchens",
  "Luxury Apartments",
  "Commercial Spaces",
  "Turnkey Solutions",
  "Every Inch Tells A Story",
];

export default function Marquee() {
  const loop = [...phrases, ...phrases];
  return (
    <div className="overflow-hidden border-y border-white/10 bg-ink-charcoal py-5">
      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
        {loop.map((p, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="font-serif text-2xl text-ivory/70 sm:text-3xl">{p}</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 3 L18 16 L12 13 L6 16 Z" fill="#D4A017" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}
