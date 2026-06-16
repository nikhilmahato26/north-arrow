// Tiny classname joiner — keeps conditional Tailwind classes readable.
export default function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
