import { useState } from "react";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";

type ImageCarouselProps = {
  images: string[];
  title: string;
};

export default function ImageCarousel({
  images,
  title,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  if (!images.length) {
    return null;
  }

  function showPreviousImage() {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  }

  function showNextImage() {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  }

  return (
    <>
      <div className="mt-8">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
          <div
            className="flex"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((imageUrl, index) => (
              <button
                key={imageUrl}
                type="button"
                onClick={() => setIsOpen(true)}
                className="w-full flex-shrink-0 cursor-zoom-in"
              >
                <img
                  src={imageUrl}
                  alt={`${title} screenshot ${index + 1}`}
                  className="w-full object-cover"
                />
              </button>
            ))}
          </div>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={showPreviousImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full hover:border hover:border-white/30 bg-black/60 px-4 py-3 text-lg text-white cursor-pointer"
                aria-label="Previous image"
              >
                <HiOutlineArrowSmLeft/>
              </button>

              <button
                type="button"
                onClick={showNextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full hover:border hover:border-white/30 bg-black/60 px-4 py-3 text-lg text-white cursor-pointer"
                aria-label="Next image"
              >
                <HiOutlineArrowSmRight/>
              </button>
            </>
          )}
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black cursor-zoom-out"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={images[currentIndex]}
            alt={`${title} enlarged`}
            className="max-h-full max-w-full"
          />
        </div>
      )}
    </>
  );
}