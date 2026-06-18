import { useEffect, useRef, useState } from "react";

// Animates a number from 0 -> target once the element scrolls into view.
export default function useCountUp(target, duration = 2000) {
  const ref = useRef(null);
  const [value, setValue] = useState(typeof target === "number" ? 0 : target);
  const hasRun = useRef(false);

  useEffect(() => {
    if (typeof target !== "number") return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const start = performance.now();

          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            // easeOutExpo for a premium settle
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setValue(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  return { ref, value };
}
