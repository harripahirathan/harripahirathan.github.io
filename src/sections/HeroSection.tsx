import { useEffect, useState } from 'react';
import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import ContactButton from '../components/ContactButton';

const NAV_LINKS = ['About', 'Experience', 'Projects', 'Contact'];

const HEADLINE = 'Hi, i\u2019m Harri';

function TypedHeading() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let interval: number | undefined;
    const startDelay = window.setTimeout(() => {
      interval = window.setInterval(() => {
        setCount((c) => {
          if (c >= HEADLINE.length) {
            if (interval) window.clearInterval(interval);
            window.setTimeout(() => setDone(true), 1500);
            return c;
          }
          return c + 1;
        });
      }, 90);
    }, 450);
    return () => {
      window.clearTimeout(startDelay);
      if (interval) window.clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex justify-center">
      <h1 className="relative mt-6 whitespace-nowrap text-[12vw] font-black uppercase leading-none tracking-tight sm:mt-4 sm:text-[12.3vw] md:-mt-5 md:text-[12.6vw]">
        {/* Invisible full headline reserves the final width so nothing shifts */}
        <span className="invisible">{HEADLINE}</span>
        <span className="hero-heading absolute left-0 top-0">
          {HEADLINE.slice(0, count)}
          {!done && <span className="terminal-cursor">|</span>}
        </span>
      </h1>
    </div>
  );
}

function HeroPortrait() {
  // Try the animated loop first, then the still portrait, then the emoji
  const [videoFailed, setVideoFailed] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <>
      {!videoFailed && (
        <video
          src="images/portrait-loop.webm"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoReady(true)}
          onError={() => setVideoFailed(true)}
          className={videoReady ? 'block w-full object-contain' : 'hidden'}
        />
      )}
      {!videoReady &&
        (imgFailed ? (
          <span
            role="img"
            aria-label="Harri"
            className="block select-none text-[7rem] leading-none sm:text-[10rem] md:text-[13rem] lg:text-[15rem]"
            style={{ filter: 'drop-shadow(0 10px 40px rgba(182, 0, 168, 0.35))' }}
          >
            &#128104;&#127997;&#8205;&#128187;
          </span>
        ) : (
          <img
            src="images/portrait.png"
            alt="3D portrait of Harri"
            onError={() => setImgFailed(true)}
            className="mx-auto w-[63%] object-contain"
          />
        ))}
    </>
  );
}

export default function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col" style={{ overflowX: 'clip' }}>
      {/* Ambient gradient blobs */}
      <div
        className="blob left-[-10%] top-[-15%] h-[45vw] w-[45vw] opacity-25"
        style={{ background: 'radial-gradient(circle, #7621B0 0%, transparent 70%)' }}
      />
      <div
        className="blob right-[-12%] top-[20%] h-[40vw] w-[40vw] opacity-20"
        style={{
          background: 'radial-gradient(circle, #B600A8 0%, transparent 70%)',
          animationDelay: '-7s',
        }}
      />

      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="relative z-20">
        <nav className="flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="nav-link text-sm font-medium uppercase tracking-wider text-[#D7E2EA] md:text-lg lg:text-[1.4rem]"
            >
              {link}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Hero heading -- typed out on load */}
      <div className="overflow-hidden">
        <FadeIn delay={0.15} y={40}>
          <TypedHeading />
        </FadeIn>
      </div>

      {/* Hero portrait with glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-[380px] -translate-x-1/2 -translate-y-1/2 sm:top-auto sm:bottom-8 sm:w-[560px] sm:translate-y-0 md:bottom-12 md:w-[740px] lg:w-[950px]">
        {/* Glow behind the portrait */}
        <div
          className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"
          style={{
            background:
              'radial-gradient(circle, rgba(118, 33, 176, 0.45) 0%, rgba(182, 0, 168, 0.2) 45%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <HeroPortrait />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom bar */}
      <div className="mt-auto flex items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20} className="relative z-20">
          <p
            className="max-w-[180px] font-light uppercase leading-snug tracking-wide text-[#E8F1F8] sm:max-w-[250px] md:max-w-[300px]"
            style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.7rem)' }}
          >
            Senior Flight Operations Specialist - Software Lead
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20} className="relative z-20">
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
