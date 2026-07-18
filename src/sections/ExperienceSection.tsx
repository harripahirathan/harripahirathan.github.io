import type { SyntheticEvent } from 'react';
import FadeIn from '../components/FadeIn';

const EXPERIENCE = [
  {
    number: '01',
    name: 'Zeitview',
    meta: 'Senior Flight Operations Specialist - Software Lead · 2024 - Present',
    description:
      'Running aerial solar inspections end to end while leading internal software. I combine flight operations with development work to streamline aerial imaging, improve data pipelines, and optimize solar-site performance, with support across other verticals like oil and gas and wind.',
  },
  {
    number: '02',
    name: 'Ivy Technology',
    meta: 'CTAC Engineer · 2023 - 2024',
    description:
      'Project management and technical repair operations for global clients: coordinated robot repairs for 6 River Systems, heat sensor installs for Butlr, Microsoft Surface repairs, and medical equipment servicing for Avanos.',
  },
  {
    number: '03',
    name: 'STK Taekwondo',
    meta: '3rd Degree Black Belt Instructor · 2013 - 2024',
    description:
      'Over a decade of teaching taekwondo, building discipline, fitness, and confidence in students of all ages. National-level competitor with a Taekwondo Canada Nationals medal.',
  },
  {
    number: '04',
    name: 'University of Toronto',
    meta: 'BSc, Physics, Computer Science & Statistics · Research, 2022 - 2023',
    description:
      'Scientific computing research covering Fast Fourier Transforms, Monte Carlo methods, N-body simulations, and parallel computing with OpenMP. Graduated with a BSc across physics, computer science, and statistics.',
  },
  {
    number: '05',
    name: 'Earlier Work',
    meta: 'Code Ninjas · CRS Networks · QuByte · 2016 - 2021',
    description:
      'Taught 20+ student classrooms to code at Code Ninjas, built Python network-analytics visualizations at CRS Networks, and delivered end-to-end managed IT services at QuByte.',
  },
];

const LOGOS = [
  { src: 'images/logos/zeitview.png', alt: 'Zeitview' },
  { src: 'images/logos/heliolytics.png', alt: 'Heliolytics' },
  { src: 'images/logos/ivy.jpg', alt: 'Ivy Technology' },
  { src: 'images/logos/uoft.jpg', alt: 'University of Toronto' },
  { src: 'images/logos/code-ninjas.jpg', alt: 'Code Ninjas' },
  { src: 'images/logos/stk.jpg', alt: 'STK Taekwondo' },
];

// Hide any logo image that hasn't been added to public/images/logos yet
function hideOnError(e: SyntheticEvent<HTMLImageElement>) {
  e.currentTarget.style.display = 'none';
}

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn y={40}>
        <h2
          className="mb-16 text-center font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Experience
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {EXPERIENCE.map((item, i) => (
          <FadeIn key={item.number} delay={i * 0.1}>
            <div
              className="flex items-start gap-6 py-8 sm:gap-10 sm:py-10 md:gap-14 md:py-12"
              style={{ borderBottom: '1px solid rgba(12, 12, 12, 0.15)' }}
            >
              <span
                className="accent-number font-black leading-none"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {item.number}
              </span>
              <div className="flex flex-col gap-2 sm:gap-3">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1.2rem, 2.6vw, 2.4rem)' }}
                >
                  {item.name}
                </h3>
                <p
                  className="font-medium uppercase tracking-wide text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.1rem)', opacity: 0.6 }}
                >
                  {item.meta}
                </p>
                <p
                  className="max-w-2xl font-light leading-relaxed text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 1.8vw, 1.4rem)', opacity: 0.78 }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Logo strip */}
      <FadeIn delay={0.2}>
        <div className="mx-auto mt-16 max-w-5xl sm:mt-20 md:mt-28">
          <p className="mb-10 text-center text-sm font-medium uppercase tracking-[0.3em] text-[#0C0C0C] opacity-60 sm:mb-12 sm:text-base">
            Companies i&apos;ve worked with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-10 sm:gap-x-16 md:justify-between md:gap-x-8">
            {LOGOS.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                title={logo.alt}
                loading="lazy"
                onError={hideOnError}
                className="h-14 w-auto object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-20 md:h-24"
              />
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
