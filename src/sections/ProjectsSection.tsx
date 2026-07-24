import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import GhostButton from '../components/GhostButton';

/* ---------- Custom card visuals ---------- */

function TerminalMock() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[24px] border border-[#D7E2EA]/25 bg-[#101016] sm:rounded-[32px]">
      <div className="flex items-center gap-2 border-b border-[#D7E2EA]/15 px-5 py-3">
        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
        <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        <span className="ml-3 font-mono text-xs text-[#D7E2EA]/50">
          harri@thinkpad: ~/sysmon
        </span>
      </div>
      <div className="flex-1 p-5 font-mono text-[11px] leading-relaxed text-[#9FE870] sm:text-xs md:p-6 md:text-sm">
        <p className="text-[#D7E2EA]/70">$ ./sysmon --samples 5 --tdelay 2</p>
        <p className="mt-3 text-[#D7E2EA]">Nbr of samples: 5 -- every 2 secs</p>
        <p className="mt-3">
          CPU&nbsp;&nbsp;[&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9617;&#9617;&#9617;&#9617;&#9617;&#9617;&#9617;&#9617;]&nbsp;&nbsp;42.3%
        </p>
        <p>
          MEM&nbsp;&nbsp;[&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9617;&#9617;&#9617;&#9617;&#9617;]&nbsp;&nbsp;7.4 / 16.0 GB
        </p>
        <p className="mt-3 text-[#D7E2EA]/70">### Sessions/users ###</p>
        <p>harri&nbsp;&nbsp;&nbsp;pts/0&nbsp;&nbsp;(tmux)</p>
        <p>harri&nbsp;&nbsp;&nbsp;tty7&nbsp;&nbsp;&nbsp;&nbsp;(:0)</p>
        <p className="mt-3">
          uptime: 14:32:11&nbsp;
          <span className="terminal-cursor text-[#D7E2EA]">&#9610;</span>
        </p>
      </div>
    </div>
  );
}

function PhoneMock() {
  return (
    <div className="flex h-full items-center justify-center rounded-[24px] border border-[#D7E2EA]/25 bg-gradient-to-br from-[#1A1022] to-[#120A16] p-6 sm:rounded-[32px]">
      <div className="w-[180px] overflow-hidden rounded-[28px] border-2 border-[#D7E2EA]/40 bg-[#0F0F17] shadow-[0_0_50px_rgba(118,33,176,0.35)] sm:w-[210px]">
        <div className="mx-auto mt-2 h-1.5 w-16 rounded-full bg-[#D7E2EA]/25" />
        <div className="p-4">
          <div className="h-2 w-24 rounded bg-[#D7E2EA]/70" />
          <div className="mt-1.5 h-2 w-14 rounded bg-[#D7E2EA]/25" />
          <div className="mt-4 flex h-24 items-center justify-center rounded-xl bg-gradient-to-br from-[#B600A8] to-[#7621B0]">
            <div className="ml-1 h-0 w-0 border-y-8 border-l-[14px] border-y-transparent border-l-white" />
          </div>
          <div className="mt-4 space-y-2.5">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 shrink-0 rounded-md bg-[#B600A8]/60" />
              <div className="h-2 flex-1 rounded bg-[#D7E2EA]/40" />
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 shrink-0 rounded-md bg-[#7621B0]/60" />
              <div className="h-2 flex-1 rounded bg-[#D7E2EA]/25" />
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 shrink-0 rounded-md bg-[#BE4C00]/60" />
              <div className="h-2 w-2/3 rounded bg-[#D7E2EA]/25" />
            </div>
          </div>
          <div className="mt-4 h-8 rounded-full bg-gradient-to-r from-[#B600A8] to-[#7621B0]" />
        </div>
      </div>
    </div>
  );
}

function BrowserMock() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[24px] border border-[#D7E2EA]/25 bg-[#101016] sm:rounded-[32px]">
      <div className="flex items-center gap-2 border-b border-[#D7E2EA]/15 px-5 py-3">
        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
        <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        <span className="ml-3 flex-1 rounded-full bg-[#D7E2EA]/10 px-4 py-1 text-center font-mono text-[10px] text-[#D7E2EA]/60 sm:text-xs">
          harri.dev
        </span>
      </div>
      <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden p-6">
        <div
          className="absolute left-1/2 top-0 h-40 w-64 -translate-x-1/2 rounded-full opacity-40"
          style={{
            background: 'radial-gradient(circle, #7621B0 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <span
          className="hero-heading whitespace-nowrap font-black uppercase tracking-tight"
          style={{ fontSize: 'clamp(1.6rem, 3.5vw, 3rem)' }}
        >
          Hi, i&apos;m Harri
        </span>
        <div className="mt-5 flex gap-3">
          <div
            className="h-7 w-24 rounded-full"
            style={{
              background:
                'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
            }}
          />
          <div className="h-7 w-24 rounded-full border border-[#D7E2EA]/50" />
        </div>
      </div>
    </div>
  );
}

/* ---------- Project data ---------- */

interface Project {
  number: string;
  name: string;
  category: string;
  link?: { label: string; href: string };
  images?: { col1: [string, string]; col2: string };
  visual?: ReactNode;
  description?: string;
  tags?: string[];
}

const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'System Monitoring Tool',
    category: 'Systems Programming',
    link: { label: 'View GitHub', href: 'https://github.com/harripahirathan' },
    visual: <TerminalMock />,
    description:
      'A system monitoring tool written in C. It reports CPU use, memory, and user sessions in real time, with adjustable sample counts and delays. Built with concurrency, signals, and a modular design.',
    tags: ['C', 'Concurrency', 'Signals', 'Makefiles'],
  },
  {
    number: '02',
    name: 'Avatar',
    category: 'UI/UX Design Finalist',
    visual: <PhoneMock />,
    description:
      'An app concept to make online learning less painful during the pandemic. I led the design, built a prototype, tested it with real users, and reached the finals of the UofT Student Design Competition.',
    tags: ['UX Research', 'Prototyping', 'Figma', 'Accessibility'],
  },
  {
    number: '03',
    name: 'This Website',
    category: 'Web Development',
    link: { label: 'View GitHub', href: 'https://github.com/harripahirathan' },
    visual: <BrowserMock />,
    description:
      'The site you are looking at right now. React and TypeScript with Tailwind and Framer Motion: scroll driven marquees, a typed heading, magnetic hover, and these stacking cards.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
  },
];

/* ---------- Card ---------- */

interface CardProps {
  project: Project;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
}

function ProjectCard({ project, index, totalCards, progress }: CardProps) {
  // Earlier cards shrink further so the stack reads with depth
  const targetScale = 1 - (totalCards - 1 - index) * 0.05;
  const scale = useTransform(progress, [index / totalCards, 1], [1, targetScale]);

  return (
    <div className="sticky top-0 flex h-screen items-center justify-center">
        <motion.div
          style={{ scale, top: `calc(-4vh + ${index * 30}px)` }}
          className="relative flex w-full max-w-6xl flex-col gap-4 rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 transition-shadow duration-300 hover:shadow-[0_0_60px_rgba(182,0,168,0.25)] sm:gap-6 sm:rounded-[50px] sm:p-6 md:h-[72vh] md:rounded-[60px] md:p-8"
        >
          {/* Top row */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
              <span
                className="hero-heading font-black leading-none"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {project.number}
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-medium uppercase tracking-widest text-[#D14FC4] sm:text-sm">
                  {project.category}
                </span>
                <h3
                  className="font-medium uppercase text-[#D7E2EA]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {project.name}
                </h3>
              </div>
            </div>
            {project.link && (
              <GhostButton label={project.link.label} href={project.link.href} />
            )}
          </div>

          {/* Bottom row */}
          {project.images ? (
            <div className="flex gap-3 sm:gap-4">
              <div className="flex w-[40%] flex-col gap-3 sm:gap-4">
                <div
                  className="overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
                  style={{ height: 'clamp(130px, 16vw, 230px)' }}
                >
                  <img
                    src={project.images.col1[0]}
                    alt={`${project.name} preview 1`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.06]"
                  />
                </div>
                <div
                  className="overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
                  style={{ height: 'clamp(160px, 22vw, 340px)' }}
                >
                  <img
                    src={project.images.col1[1]}
                    alt={`${project.name} preview 2`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.06]"
                  />
                </div>
              </div>
              <div className="w-[60%] overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px]">
                <img
                  src={project.images.col2}
                  alt={`${project.name} preview 3`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.06]"
                />
              </div>
            </div>
          ) : (
            <div className="flex min-h-[280px] flex-1 flex-col gap-3 sm:gap-4 md:flex-row">
              <div className="flex flex-col justify-between gap-6 rounded-[24px] border border-[#D7E2EA]/25 p-6 sm:rounded-[32px] md:w-[40%] md:p-8">
                <p
                  className="font-light leading-relaxed text-[#E8F1F8]"
                  style={{ fontSize: 'clamp(1rem, 1.6vw, 1.35rem)' }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {project.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#D7E2EA]/40 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] opacity-80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="min-h-[280px] md:h-full md:w-[60%]">{project.visual}</div>
            </div>
          )}
        </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div ref={containerRef}>
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            totalCards={PROJECTS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
