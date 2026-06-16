import useCountUp from "../../hooks/useCountUp";

export default function StatCounter({ value, suffix, label }) {
  const { ref, value: animated } = useCountUp(value, 2200);
  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <span className="font-serif text-5xl font-light text-gold-gradient sm:text-6xl">
        {animated}
        {suffix}
      </span>
      <span className="mt-2 text-xs uppercase tracking-wide2 text-ivory/60 sm:text-sm">
        {label}
      </span>
    </div>
  );
}
