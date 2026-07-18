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
  transform: string;
  rowKey: string;
}

function MarqueeRow({ images, transform, rowKey }: RowProps) {
  const tripled = [...images, ...images, ...images];

  return (
    <div className="flex gap-3" style={{ transform, willChange: 'transform' }}>
      {tripled.map((src, i) => (
        <div
          key={`${rowKey}-${i}`}
          className="shrink-0 overflow-hidden rounded-2xl"
          style={{
            width: 420,
            height: 270,
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
      <MarqueeRow
        images={ROW_ONE}
        transform={`translateX(${offset - 200}px)`}
        rowKey="row1"
      />
      <MarqueeRow
        images={ROW_TWO}
        transform={`translateX(${-(offset - 200)}px)`}
        rowKey="row2"
      />
    </section>
  );
}
