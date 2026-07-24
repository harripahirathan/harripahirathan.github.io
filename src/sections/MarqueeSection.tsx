import { useEffect, useRef, useState } from 'react';

const ROW_ONE = [
  'images/friends-japan.jpg',
  'images/autumn-umbrella.jpg',
  'images/snowboarding.jpg',
  'images/forest-portrait.jpg',
  'images/buddha-selfie.jpg',
  'images/taekwondo-blackbelt.jpg',
  'images/hongkong-skyline.jpg',
  'images/train-japan.jpg',
];

const ROW_TWO = [
  'images/autumn-field.jpg',
  'images/christmas-city.png',
  'images/taekwondo-nationals.jpg',
  'images/dinner-friends.jpg',
  'images/soccer-friends.jpg',
  'images/harbor-japan.jpg',
  'images/deck-selfie.jpg',
];

interface RowProps {
  images: string[];
  direction: 1 | -1;
  offset: number;
}

function MarqueeRow({ images, direction, offset }: RowProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [setWidth, setSetWidth] = useState(0);

  // One "set" is a third of the tripled row. Starting shifted left by a full
  // set means the row stays covered no matter which way it scrolls.
  useEffect(() => {
    const measure = () => {
      if (rowRef.current) setSetWidth(rowRef.current.scrollWidth / 3);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const tripled = [...images, ...images, ...images];
  const x = direction * (offset - 200) - setWidth;

  return (
    <div
      ref={rowRef}
      className="flex gap-3"
      style={{ transform: `translateX(${x}px)`, willChange: 'transform' }}
    >
      {tripled.map((src, i) => (
        <div
          key={`${src}-${i}`}
          className="h-[150px] w-[235px] shrink-0 overflow-hidden rounded-2xl sm:h-[205px] sm:w-[320px] md:h-[270px] md:w-[420px]"
          style={{
            background: 'linear-gradient(135deg, #191320 0%, #241028 50%, #1c0f14 100%)',
          }}
        >
          <img
            src={src}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.06]"
          />
        </div>
      ))}
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.offsetTop;
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col gap-3 bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
    >
      <MarqueeRow images={ROW_ONE} direction={1} offset={offset} />
      <MarqueeRow images={ROW_TWO} direction={-1} offset={offset} />
    </section>
  );
}
