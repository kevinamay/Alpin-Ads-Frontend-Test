import { useState } from "react";

// Asset imports
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
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const ArrowLeftIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6" />
  </svg>
);
const ArrowRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

type Category = "All Photos" | "Rooms" | "Wellness" | "Culinary";

const allPhotos: Record<Category, string[]> = {
  "All Photos": [img1, img2, img3, img4, img5, img6, img7, img8, img9],
  "Rooms":      [img2, img3, img4],
  "Wellness":   [img6, img7, img9],
  "Culinary":   [img1, img5, img8],
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

  const handleCategoryChange = (cat: Category) => {
    setActiveCategory(cat);
    setActiveIdx(0);
  };

  return (
    <div
      className="fixed inset-0 z-50"
      style={{ background: "rgba(50, 50, 50, 0.96)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-[16px] right-[16px] w-[36px] h-[36px] flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer z-20"
      >
        <CloseIcon />
      </button>

      {/* ===== MOBILE LAYOUT ===== */}
      <div
        className="flex md:hidden flex-col w-full h-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Category Tabs — horizontally scrollable */}
        <div
          className="flex flex-row items-center gap-[8px] px-[16px] pt-[16px] pb-[12px] overflow-x-auto flex-none"
          style={{ scrollbarWidth: "none" }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`flex-none h-[34px] px-[16px] rounded-full text-[13px] font-['Manrope'] font-medium transition-colors cursor-pointer whitespace-nowrap
                ${activeCategory === cat
                  ? "bg-white text-[#323232]"
                  : "bg-transparent border border-white/50 text-white hover:border-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main photo — takes remaining space */}
        <div className="flex-1 w-full overflow-hidden bg-black min-h-0">
          <img
            key={`${activeCategory}-${activeIdx}`}
            src={photos[activeIdx]}
            alt={`Photo ${activeIdx + 1}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Thumbnails strip */}
        <div
          className="flex flex-row gap-[6px] px-[16px] py-[10px] overflow-x-auto flex-none bg-black/60"
          style={{ scrollbarWidth: "none" }}
        >
          {photos.map((src, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`flex-none w-[64px] h-[48px] rounded-[4px] overflow-hidden transition-all cursor-pointer
                ${i === activeIdx ? "ring-2 ring-white opacity-100" : "opacity-55 hover:opacity-85"}`}
            >
              <img src={src} alt={`thumb-${i}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        {/* Navigation bar */}
        <div className="flex flex-row items-center justify-center gap-[20px] py-[14px] flex-none bg-black/60">
          <button
            onClick={goPrev}
            className="w-[40px] h-[40px] flex items-center justify-center bg-white/15 hover:bg-white/30 rounded-[6px] text-white transition-colors cursor-pointer"
          >
            <ArrowLeftIcon />
          </button>
          <span className="font-['Manrope'] text-[14px] text-white min-w-[48px] text-center">
            {activeIdx + 1} / {total}
          </span>
          <button
            onClick={goNext}
            className="w-[40px] h-[40px] flex items-center justify-center bg-white/15 hover:bg-white/30 rounded-[6px] text-white transition-colors cursor-pointer"
          >
            <ArrowRightIcon />
          </button>
        </div>
      </div>

      {/* ===== DESKTOP LAYOUT ===== */}
      <div
        className="hidden md:flex flex-col items-center justify-center w-full h-full gap-[16px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Category Tabs */}
        <div className="flex flex-row items-center gap-[8px]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`h-[36px] px-[18px] rounded-full text-[13px] font-['Manrope'] font-medium transition-colors cursor-pointer
                ${activeCategory === cat
                  ? "bg-white text-[#323232]"
                  : "bg-transparent border border-white/50 text-white hover:border-white hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main Image */}
        <div className="w-full max-w-[760px] px-[24px]">
          <div className="w-full aspect-[4/3] rounded-[8px] overflow-hidden bg-black">
            <img
              key={`${activeCategory}-${activeIdx}`}
              src={photos[activeIdx]}
              alt={`Photo ${activeIdx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex flex-row gap-[8px] w-full max-w-[760px] px-[24px] overflow-x-auto justify-center" style={{ scrollbarWidth: "none" }}>
          {photos.map((src, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`flex-none w-[80px] h-[56px] rounded-[4px] overflow-hidden transition-all cursor-pointer
                ${i === activeIdx ? "ring-2 ring-white opacity-100" : "opacity-60 hover:opacity-90"}`}
            >
              <img src={src} alt={`thumb-${i}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-row items-center gap-[16px]">
          <button onClick={goPrev} className="w-[40px] h-[40px] flex items-center justify-center bg-white/15 hover:bg-white/30 rounded-[6px] text-white transition-colors cursor-pointer">
            <ArrowLeftIcon />
          </button>
          <span className="font-['Manrope'] text-[14px] text-white min-w-[36px] text-center">
            {activeIdx + 1} / {total}
          </span>
          <button onClick={goNext} className="w-[40px] h-[40px] flex items-center justify-center bg-white/15 hover:bg-white/30 rounded-[6px] text-white transition-colors cursor-pointer">
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
