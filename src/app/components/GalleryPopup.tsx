import { useState } from "react";

import img1 from "../../assets/Andergassen-Druck-1101 1 (3).png";
import img2 from "../../assets/01hd34rames8z8qtkt7cr6g4et.jpeg";
import img3 from "../../assets/image11.png";
import img4 from "../../assets/01gepp0vtgsybhf010q3jnr7na.jpeg";
import img5 from "../../assets/image 44 (1).png";
import img6 from "../../assets/Andergassen-Druck-11011.png";
import img7 from "../../assets/Andergassen-Druck-2428 1.png";
import img8 from "../../assets/Andergassen-Druck-1101 1 (1).png";
import img9 from "../../assets/Andergassen-Druck-1101 1 (2).png";

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const ChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6" />
  </svg>
);
const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

type Category = "All Photos" | "Rooms" | "Wellness" | "Culinary";

const allPhotos: Record<Category, string[]> = {
  "All Photos": [img1, img2, img3, img4, img5, img6, img7, img8, img9],
  "Rooms": [img2, img3, img4],
  "Wellness": [img6, img7, img9],
  "Culinary": [img1, img5, img8],
};

const categories: Category[] = ["All Photos", "Rooms", "Wellness", "Culinary"];

interface GalleryPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GalleryPopup({ isOpen, onClose }: GalleryPopupProps) {
  const [activeCategory, setActiveCategory] = useState<Category>("All Photos");
  const [activeIdx, setActiveIdx] = useState(0);

  if (!isOpen) return null;

  const photos = allPhotos[activeCategory];
  const total = photos.length;
  const goPrev = () => setActiveIdx((i) => (i - 1 + total) % total);
  const goNext = () => setActiveIdx((i) => (i + 1) % total);
  const handleCategoryChange = (cat: Category) => { setActiveCategory(cat); setActiveIdx(0); };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center"
      style={{
        backdropFilter: "blur(12px)",
        background: "rgba(37, 38, 38, 0.4)"
      }}
      onClick={onClose}
    >
      {/* ========== MOBILE LAYOUT ========== */}
      <div
        className="flex md:hidden flex-col w-full h-full relative max-w-[390px]"
        style={{ background: "#2E2E2E" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="absolute top-[20.5px] right-[20px] w-[28px] h-[28px] flex items-center justify-center text-white/80 hover:text-white cursor-pointer z-50"
        >
          <CloseIcon />
        </button>

        <div className="flex flex-col w-full mt-[110px] px-[16px] gap-[16px] pb-[32px] overflow-y-auto">

          {/* Scrollable Tabs (DIJAMIN BISA DI-SWIPE KANAN KIRI) */}
          <div
            className="flex flex-row items-center gap-[12px] w-full overflow-x-auto flex-nowrap touch-pan-x [&::-webkit-scrollbar]:hidden"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch" // Efek momentum scroll yang mulus di iOS
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`flex-none h-[48px] px-[20px] py-[12px] rounded-[16px] text-[16px] font-['Manrope'] font-normal leading-[24px] transition-colors cursor-pointer whitespace-nowrap border flex items-center justify-center
                  ${activeCategory === cat
                    ? "bg-[#FFFFFF] border-transparent text-[#252626]"
                    : "bg-transparent border-[#FFFFFF]/60 text-white hover:border-[#FFFFFF]"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Main Photo */}
          <div className="w-full h-[400px] rounded-[8px] overflow-hidden bg-[#222222] flex-none">
            <img
              key={`${activeCategory}-${activeIdx}`}
              src={photos[activeIdx]}
              alt={`Photo ${activeIdx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnails Strip (DIJAMIN BISA DI-SWIPE KANAN KIRI) */}
          <div
            className="flex flex-row gap-[8px] w-full flex-none overflow-x-auto flex-nowrap touch-pan-x h-[83.5px] [&::-webkit-scrollbar]:hidden"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch" // Efek momentum scroll yang mulus di iOS
            }}
          >
            {photos.map((src, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`flex-none rounded-[6px] overflow-hidden transition-all cursor-pointer border-2 
                  ${i === activeIdx ? "border-white opacity-100" : "border-transparent opacity-60 hover:opacity-100"}`}
                style={{ width: "83.5px", height: "83.5px" }}
              >
                <img src={src} alt={`thumb-${i}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Navigation Bar */}
          <div className="flex flex-row items-center justify-center gap-[40px] w-full h-[52px] flex-none">
            <button
              onClick={goPrev}
              className="w-[48px] h-[48px] flex items-center justify-center bg-white/15 hover:bg-white/30 rounded-[12px] text-white transition-colors cursor-pointer"
            >
              <ChevronLeft />
            </button>
            <span className="font-['Manrope'] text-[20px] font-normal text-white min-w-[48px] text-center">
              {activeIdx + 1} / {total}
            </span>
            <button
              onClick={goNext}
              className="w-[48px] h-[48px] flex items-center justify-center bg-white/15 hover:bg-white/30 rounded-[12px] text-white transition-colors cursor-pointer"
            >
              <ChevronRight />
            </button>
          </div>

        </div>
      </div>

      {/* ========== DESKTOP LAYOUT ========== */}
      <div
        className="hidden md:flex flex-col items-center justify-center w-full h-full gap-[24px] px-[24px] relative"
        style={{ background: "#2E2E2E" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-[24px] right-[24px] w-[36px] h-[36px] flex items-center justify-center text-white/80 hover:text-white cursor-pointer z-10"
        >
          <CloseIcon />
        </button>

        {/* Category Tabs (Desktop) */}
        <div
          className="flex flex-row items-center gap-[12px] overflow-x-auto w-full max-w-[800px] justify-center [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`h-[48px] px-[24px] py-[12px] rounded-[16px] text-[16px] font-['Manrope'] font-normal leading-[24px] transition-colors cursor-pointer whitespace-nowrap border flex items-center justify-center flex-none
               ${activeCategory === cat
                  ? "bg-[#FFFFFF] border-transparent text-[#252626]"
                  : "bg-transparent border-[#FFFFFF]/60 text-white hover:border-[#FFFFFF]"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main Image */}
        <div className="w-full max-w-[800px]">
          <div className="w-full aspect-[16/9] rounded-[12px] overflow-hidden bg-black">
            <img
              key={`${activeCategory}-${activeIdx}`}
              src={photos[activeIdx]}
              alt={`Photo ${activeIdx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Thumbnails (Desktop) */}
        <div
          className="flex flex-row gap-[12px] w-full max-w-[800px] overflow-x-auto flex-nowrap justify-center [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {photos.map((src, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`flex-none w-[88px] h-[64px] rounded-[6px] overflow-hidden transition-all cursor-pointer border-2
                ${i === activeIdx ? "border-white opacity-100" : "border-transparent opacity-60 hover:opacity-100"}`}
            >
              <img src={src} alt={`thumb-${i}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-row items-center gap-[32px]">
          <button onClick={goPrev} className="w-[48px] h-[48px] flex items-center justify-center bg-white/15 hover:bg-white/30 rounded-[12px] text-white transition-colors cursor-pointer">
            <ChevronLeft />
          </button>
          <span className="font-['Manrope'] text-[20px] text-white min-w-[36px] text-center">
            {activeIdx + 1} / {total}
          </span>
          <button onClick={goNext} className="w-[48px] h-[48px] flex items-center justify-center bg-white/15 hover:bg-white/30 rounded-[12px] text-white transition-colors cursor-pointer">
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}