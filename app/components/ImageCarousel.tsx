import { useState } from "react";

type ImageCarouselProps = {
  images: string[];
  title: string;
};

export default function ImageCarousel({
  images,
  title,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images.length) {
    return null;
  }

  function showPreviousImage() {
    setCurrentIndex((previousIndex) =>
      previousIndex === 0 ? images.length - 1 : previousIndex - 1
    );
  }

  function showNextImage() {
    setCurrentIndex((previousIndex) =>
      previousIndex === images.length - 1 ? 0 : previousIndex + 1
    );
  }

  function selectImage(index: number) {
    setCurrentIndex(index);
  }

  return (
    <div className="mt-8">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
        <div
          className="flex"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((imageUrl, index) => (
            <img
              key={imageUrl}
              src={imageUrl}
              alt={`${title} screenshot ${index + 1}`}
              className="w-full flex-shrink-0 object-cover"
            />
          ))}
        </div>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={showPreviousImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/60 px-3 py-2 text-sm text-white hover:bg-black/80 cursor-pointer"
              aria-label="Previous image"
            >
              &lt;
            </button>

            <button
              type="button"
              onClick={showNextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/60 px-3 py-2 text-sm text-white hover:bg-black/80 cursor-pointer"
              aria-label="Next image"
            >
              &gt;
            </button>
          </>
        )}
      </div>
    </div>
  );
}