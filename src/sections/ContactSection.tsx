import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import GhostButton from '../components/GhostButton';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative flex flex-col items-center px-5 pb-12 pt-10 sm:px-8 sm:pt-14 md:px-10 md:pt-20"
      style={{ overflowX: 'clip' }}
    >
      <div
        className="blob left-1/2 top-[20%] h-[30vw] w-[45vw] -translate-x-1/2 opacity-25"
        style={{ background: 'radial-gradient(circle, #B600A8 0%, transparent 70%)' }}
      />
      <FadeIn y={40} className="relative z-10">
        <h2
          className="hero-heading text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Contact
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} y={20}>
        <p
          className="mt-8 max-w-[600px] text-center font-light leading-relaxed text-[#E8F1F8] sm:mt-10"
          style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)' }}
        >
          Want to build something together, or just talk pokemon, taekwondo, or
          travel? Reach out anywhere below.
        </p>
      </FadeIn>

      <FadeIn delay={0.3} y={20}>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:mt-12 sm:gap-5">
          <ContactButton />
          <GhostButton
            label="LinkedIn"
            href="https://www.linkedin.com/in/harripahirathan/"
          />
          <GhostButton label="GitHub" href="https://github.com/harripahirathan" />
        </div>
      </FadeIn>

      <p className="mt-16 text-xs font-light uppercase tracking-widest text-[#D7E2EA] opacity-40 sm:mt-20">
        &copy; 2026 Harri Pahirathan &middot; Built with React
      </p>
    </section>
  );
}
