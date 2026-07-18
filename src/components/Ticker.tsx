const DEFAULT_ITEMS = [
  'Python',
  'React',
  'TypeScript',
  'Drones',
  'Solar Ops',
  'Taekwondo',
  'Snowboarding',
  'Game Dev',
  'Automation',
  'Photo Editing',
];

interface TickerProps {
  items?: string[];
  reverse?: boolean;
}

function TickerRun({ items }: { items: string[] }) {
  return (
    <div className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <div key={item} className="flex shrink-0 items-center">
          <span
            className={`whitespace-nowrap px-6 font-black uppercase tracking-tight sm:px-8 ${
              i % 2 === 0 ? 'text-[#D7E2EA]' : 'text-outline'
            }`}
            style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}
          >
            {item}
          </span>
          <span
            className="shrink-0 text-[#B600A8]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.8rem)' }}
          >
            &#10022;
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Ticker({ items = DEFAULT_ITEMS, reverse = false }: TickerProps) {
  return (
    <div className="overflow-hidden bg-[#0C0C0C] py-10 sm:py-14" style={{ overflowX: 'clip' }}>
      <div className={`animate-ticker flex w-max ${reverse ? 'animate-ticker-reverse' : ''}`}>
        <TickerRun items={items} />
        <TickerRun items={items} />
      </div>
    </div>
  );
}
