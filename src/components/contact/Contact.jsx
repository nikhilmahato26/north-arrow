import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { brand } from "../../data/site";
import { fadeUp, staggerContainer, viewportOnce } from "../../utils/motion";

const propertyTypes = ["1 BHK", "2 BHK", "3 BHK", "Villa / Duplex", "Commercial", "Other"];
const budgets = ["₹3 - 6 Lakh", "₹6 - 10 Lakh", "₹10 - 20 Lakh", "₹20 Lakh+"];

const inputBase =
  "w-full rounded-xl border border-white/12 bg-white/[0.03] px-4 py-3.5 text-sm text-ivory placeholder-ivory/35 outline-none transition-colors focus:border-gold/60";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    // Simulated submission — wire to your backend / email service here.
    await new Promise((r) => setTimeout(r, 900));
    console.log("Lead captured:", data);
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 5000);
  };

  const contactItems = [
    { icon: Phone, label: "Call Us (Design)", value: brand.phoneDisplay, href: `tel:${brand.phoneRaw}` },
    { icon: Phone, label: "Call Us (Support)", value: brand.phoneDisplay2, href: `tel:${brand.phoneRaw2}` },
    { icon: Mail, label: "Email Us", value: brand.email, href: `mailto:${brand.email}` },
    {
      icon: MapPin,
      label: "Visit Us",
      value: `${brand.location.city}, ${brand.location.state}`,
      href: "#",
    },
  ];

  return (
    <section id="contact" className="relative bg-ink-black py-24 sm:py-28">
      <div className="container-luxe grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Left — info */}
        <motion.div
          variants={staggerContainer(0.14)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-8"
        >
          <motion.span variants={fadeUp} className="eyebrow">
            <span className="h-px w-8 bg-gold/60" /> Get In Touch
          </motion.span>
          <motion.h2 variants={fadeUp} className="heading-serif text-4xl sm:text-5xl">
            Let's Bring Your{" "}
            <span className="text-gold-gradient italic">Vision To Life</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-md text-ivory/60">
            Our experts will be happy to help you create a harmonious space that suits
            your needs and style. Reach out — we usually respond within a day.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-charcoal/50 p-5 transition-colors hover:border-gold/40"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold transition-all group-hover:bg-gold-grad group-hover:text-ink-black">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide2 text-ivory/45">
                      {item.label}
                    </p>
                    <p className="text-ivory">{item.value}</p>
                  </div>
                </a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="glass rounded-3xl p-7 sm:p-10"
        >
          {sent ? (
            <div className="flex min-h-[420px] flex-col items-center justify-center gap-4 text-center">
              <CheckCircle2 size={56} className="text-gold" />
              <h3 className="font-serif text-3xl text-ivory">Thank You!</h3>
              <p className="max-w-sm text-ivory/60">
                Your enquiry has reached North Arrow Interiors. One of our design
                experts will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-wide2 text-ivory/55">
                    Name
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    placeholder="Your full name"
                    className={inputBase}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-gold">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-wide2 text-ivory/55">
                    Phone
                  </label>
                  <input
                    {...register("phone", {
                      required: "Phone is required",
                      pattern: { value: /^[0-9+\s-]{10,15}$/, message: "Enter a valid number" },
                    })}
                    placeholder="+91 90000 00000"
                    className={inputBase}
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-gold">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs uppercase tracking-wide2 text-ivory/55">
                  Email
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email" },
                  })}
                  placeholder="you@email.com"
                  className={inputBase}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-gold">{errors.email.message}</p>
                )}
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-wide2 text-ivory/55">
                    Property Type
                  </label>
                  <select
                    {...register("propertyType", { required: true })}
                    className={`${inputBase} appearance-none`}
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-ink-charcoal">
                      Select type
                    </option>
                    {propertyTypes.map((p) => (
                      <option key={p} value={p} className="bg-ink-charcoal">
                        {p}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-wide2 text-ivory/55">
                    Budget
                  </label>
                  <select
                    {...register("budget", { required: true })}
                    className={`${inputBase} appearance-none`}
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-ink-charcoal">
                      Select budget
                    </option>
                    {budgets.map((b) => (
                      <option key={b} value={b} className="bg-ink-charcoal">
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs uppercase tracking-wide2 text-ivory/55">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  rows={4}
                  placeholder="Tell us about your space..."
                  className={`${inputBase} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-gold mt-1 w-full disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Enquiry"}
                {isSubmitting ? null : <Send size={16} />}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
