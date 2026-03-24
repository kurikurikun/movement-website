"use client";

interface PeopleScrollerProps {
  images: string[];
}

export default function PeopleScroller({ images }: PeopleScrollerProps) {
  // Duplicate images for seamless infinite scroll
  const doubled = [...images, ...images];

  return (
    <div className="overflow-hidden py-12">
      <div className="scroller-track flex gap-4">
        {doubled.map((img, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={img}
            alt={`Local people of Japan ${(i % images.length) + 1}`}
            className="h-56 sm:h-64 lg:h-72 w-auto aspect-[3/4] object-cover flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}
