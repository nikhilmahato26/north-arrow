# North Arrow Interiors

> **Every Inch Tells A Story** — a premium, single-page marketing site for North Arrow Interiors, a luxury end-to-end interior design studio in Hyderabad.

A high-end, dark-luxe experience inspired by Livspace, DesignCafe, Bonito Designs and high-end architecture studios — built with the brand's gold (#D4A017) on rich black (#0B0B0B) identity and subtle arrow motifs throughout.

## Tech Stack

- **React 18 + Vite** — fast, modern SPA
- **Tailwind CSS v3** — utility-first styling (custom luxe theme tokens)
- **Framer Motion** — scroll reveals, staggers, hover lift, floating cards, counters
- **Swiper** — auto-scrolling testimonials carousel
- **React Router DOM** — routing shell
- **React Hook Form** — validated contact / lead form
- **Lucide React** — icon set

## Getting Started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build -> dist/
npm run preview  # preview the build
```

## Project Structure

```
src/
├── assets/
├── components/
│   ├── hero/          Hero.jsx
│   ├── services/      Services, ServiceCard, WhyChooseUs, KitchenShowcase
│   ├── projects/      Projects.jsx (filterable masonry)
│   ├── process/       Process.jsx (luxury timeline)
│   ├── testimonials/  Testimonials.jsx (Swiper carousel)
│   ├── gallery/       Gallery.jsx (Pinterest-style masonry)
│   ├── contact/       Contact.jsx, ConsultationCTA.jsx
│   └── common/        Navbar, Footer, Logo, SectionHeading, Stats,
│                      StatCounter, ArrowDivider, Marquee, FloatingActions
├── pages/             Home.jsx
├── hooks/             useCountUp, useScrolled
├── utils/             motion.js (variants), cn.js
├── data/              site, services, projects, process, kitchens,
│                      gallery, testimonials, stats, whyChooseUs
├── App.jsx
└── main.jsx
```

## Sections

Hero · Stats counters · Services · Marquee · Featured Projects · Why Choose Us ·
Design Process · Modular Kitchen Showcase · Testimonials · Gallery · Consultation CTA · Contact · Footer

## Customisation

- **Brand / contact details:** `src/data/site.js`
- **Content (services, projects, gallery, etc.):** files under `src/data/`
- **Colours, fonts, animations:** `tailwind.config.js`
- **Images:** currently sourced from Unsplash CDN URLs in the `src/data/*` files — swap for the studio's own photography in production.

## Form Submission

`Contact.jsx` simulates submission and logs the lead to the console. Wire `onSubmit`
to your backend, email service (e.g. EmailJS) or CRM endpoint for production.
