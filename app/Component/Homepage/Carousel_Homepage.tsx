"use client";

import { books } from "../../Data/DataBook";
import { useState, useEffect } from "react";
import Banner from "./BannerCarousel";

export default function Carousel_Homepage() {
  const [index, setIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const nextIndex = (index + 1) % books.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSliding(true);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleTransitionEnd = () => {
    setIndex(nextIndex);
    setIsSliding(false);
  };

  return (
    <div className="w-full overflow-hidden relative">
      <div
        className={`flex ${
          isSliding ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{
          transform: isSliding ? "translateX(-100%)" : "translateX(0%)",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {/* Current */}
        <div className="w-full shrink-0">
          <Banner id={books[index]?.id} />
        </div>

        {/* Next */}
        <div className="w-full shrink-0">
          <Banner id={books[nextIndex]?.id} />
        </div>
      </div>
    </div>
  );
}
