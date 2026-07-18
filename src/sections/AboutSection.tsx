import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

const ABOUT_TEXT =
  "Flight operations specialist and software lead at Zeitview, where i run aerial solar inspections end to end and build the internal tools that keep them flying. Physics, computer science and statistics grad from the University of Toronto, third degree black belt with over a decade of teaching taekwondo, and a jack of all trades who loves snowboarding, travel, game dev, and sneaking pokemon into real photos. Let's build something incredible together!";

const DECORATIONS = [
  {
    emoji: '\u{1F94B}',
    label: 'Taekwondo',
    position: 'top-[4%] left-[1%] sm:left-[2%] md:left-[4%]',
    delay: 0.1,
    x: -80,
    floatDuration: 4.5,
  },
  {
    emoji: '\u{1F3C2}',
    label: 'Snowboarding',
    position: 'bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]',
    delay: 0.25,
    x: -80,
    floatDuration: 5.5,
  },
  {
    emoji: '✈️',
    label: 'Flight',
    position: 'top-[4%] right-[1%] sm:right-[2%] md:right-[4%]',
    delay: 0.15,
    x: 80,
    floatDuration: 5,
  },
  {
    emoji: '\u{1F3AE}',
    label: 'Gaming',
    position: 'bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]',
    delay: 0.3,
    x: 80,
    floatDuration: 6,
  },
];

const POLAROIDS = [
  {
    src: '/images/pokemon-picnic.jpg',
    caption: 'Little me',
    position: 'left-[1%] top-[32%] 2xl:left-[3%]',
    rotate: -7,
    delay: 0.2,
    x: -80,
  },
  {
    src: '/images/pokemon-bridge.jpg',
    caption: 'Me now',
    position: 'right-[1%] top-[32%] 2xl:right-[3%]',
    rotate: 6,
    delay: 0.35,
    x: 80,
  },
];

export default function AboutSection() {
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(
    null
  );

  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center px-5 py-20 sm:px-8 md:px-10"
    >
      {/* Ambient blob behind the heading */}
      <div
        className="blob left-1/2 top-[10%] h-[35vw] w-[50vw] -translate-x-1/2 opacity-20"
        style={{ background: 'radial-gradient(circle, #7621B0 0%, transparent 70%)' }}
      />

      {/* Floating decorative emojis */}
      {DECORATIONS.map((deco) => (
        <div key={deco.label} className={`absolute ${deco.position}`}>
          <FadeIn delay={deco.delay} x={deco.x} y={0} duration={0.9}>
            <motion.span
              role="img"
              aria-label={deco.label}
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: deco.floatDuration,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="block select-none text-[64px] opacity-90 sm:text-[90px] md:text-[120px]"
              style={{ filter: 'drop-shadow(0 8px 30px rgba(118, 33, 176, 0.35))' }}
            >
              {deco.emoji}
            </motion.span>
          </FadeIn>
        </div>
      ))}

      {/* Interactive pokemon polaroids -- click to enlarge */}
      {POLAROIDS.map((card) => (
        <div key={card.src} className={`absolute hidden xl:block ${card.position}`}>
          <FadeIn delay={card.delay} x={card.x} y={0} duration={0.9}>
            <motion.button
              type="button"
              onClick={() => setLightbox({ src: card.src, caption: card.caption })}
              initial={{ rotate: card.rotate }}
              whileHover={{ rotate: 0, scale: 1.07 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 220, damping: 16 }}
              className="w-[240px] cursor-pointer rounded-lg bg-white p-2.5 pb-10 text-left shadow-[0_15px_45px_rgba(0,0,0,0.55)] 2xl:w-[300px]"
            >
              <img
                src={card.src}
                alt={card.caption}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-sm object-cover"
              />
              <p className="mt-3 text-center text-xs font-medium uppercase tracking-[0.25em] text-[#0C0C0C] opacity-70 2xl:text-sm">
                {card.caption}
              </p>
            </motion.button>
          </FadeIn>
        </div>
      ))}

      <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading text-center font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              About me
            </h2>
          </FadeIn>

          <AnimatedText
            text={ABOUT_TEXT}
            className="max-w-[720px] text-center font-medium leading-relaxed text-[#EDF4FA]"
            style={{ fontSize: 'clamp(1.15rem, 2.4vw, 1.7rem)' }}
          />
        </div>

        <FadeIn>
          <ContactButton />
        </FadeIn>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] flex cursor-zoom-out flex-col items-center justify-center gap-5 bg-black/85 p-5 backdrop-blur-sm sm:p-10"
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setLightbox(null)}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#D7E2EA]/60 text-xl text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 sm:right-8 sm:top-8"
            >
              &#10005;
            </button>
            <motion.img
              src={lightbox.src}
              alt={lightbox.caption}
              initial={{ scale: 0.85, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 10 }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              className="max-h-[80vh] max-w-[92vw] rounded-2xl object-contain shadow-[0_0_80px_rgba(118,33,176,0.4)]"
            />
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#D7E2EA] opacity-80">
              {lightbox.caption}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
