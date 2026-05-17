import { useState } from "react";
import roomImage from "../../assets/image11.png";

// Icons
const ArrowLeftIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6" />
  </svg>
);
const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6" />
  </svg>
);
const SizeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
  </svg>
);
const GuestsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const BedIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 4v16" /><path d="M2 8h18a2 2 0 0 1 2 2v10" /><path d="M2 17h20" /><path d="M6 8v9" />
  </svg>
);
const PriceIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" x2="7.01" y1="7" y2="7" />
  </svg>
);
const BathtubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" /><line x1="10" x2="8" y1="5" y2="7" /><line x1="2" x2="22" y1="12" y2="12" /><line x1="7" x2="7" y1="19" y2="21" /><line x1="17" x2="17" y1="19" y2="21" />
  </svg>
);
const WifiIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><line x1="12" x2="12.01" y1="20" y2="20" />
  </svg>
);
const MiniBarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8h1a4 4 0 1 1 0 8h-1" /><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" /><line x1="6" x2="6" y1="2" y2="4" /><line x1="10" x2="10" y1="2" y2="4" /><line x1="14" x2="14" y1="2" y2="4" />
  </svg>
);
const CheckCircleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9C8E7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);
const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" x2="6" y1="6" y2="18" /><line x1="6" x2="18" y1="6" y2="18" />
  </svg>
);

// The modal images (using the single provided asset for all slides)
const images = [roomImage, roomImage, roomImage];

interface RoomDetailPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RoomDetailPopup({ isOpen, onClose }: RoomDetailPopupProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!isOpen) return null;

  const prevSlide = () => setCurrentSlide((p) => (p - 1 + images.length) % images.length);
  const nextSlide = () => setCurrentSlide((p) => (p + 1) % images.length);

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-[24px]"
      onClick={onClose}
    >
      {/* Modal Card */}
      <div
        className="relative bg-white rounded-[12px] overflow-hidden flex flex-row w-full max-w-[980px] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* LEFT: Image Gallery (723px) */}
        <div className="relative w-[52%] flex-none bg-black">
          <img
            src={images[currentSlide]}
            alt="Suite"
            className="w-full h-full object-cover"
          />
          {/* Prev button */}
          <button
            onClick={prevSlide}
            className="absolute left-[16px] top-1/2 -translate-y-1/2 w-[40px] h-[40px] flex items-center justify-center bg-white/80 hover:bg-white rounded-full transition-colors text-[#323232]"
          >
            <ArrowLeftIcon />
          </button>
          {/* Next button */}
          <button
            onClick={nextSlide}
            className="absolute right-[16px] top-1/2 -translate-y-1/2 w-[40px] h-[40px] flex items-center justify-center bg-white/80 hover:bg-white rounded-full transition-colors text-[#323232]"
          >
            <ArrowRightIcon />
          </button>
          {/* Dot indicators */}
          <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 flex flex-row gap-[8px]">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-[8px] h-[8px] rounded-full transition-colors ${i === currentSlide ? "bg-white" : "bg-white/40"}`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT: Room Details */}
        <div className="flex flex-col flex-1 overflow-y-auto p-[32px] gap-[20px]">
          {/* Title */}
          <h2 className="font-['Manrope'] text-[24px] font-normal text-[#323232] leading-[1.3]">
            Summit Royal Suite
          </h2>
          <hr className="border-[#E5E5E5]" />

          {/* Specs grid */}
          <div className="grid grid-cols-2 gap-y-[12px] gap-x-[16px]">
            <div className="flex flex-row items-center gap-[8px]">
              <span className="text-[#666666]"><SizeIcon /></span>
              <span className="font-['Manrope'] text-[14px] text-[#323232]">75 m²</span>
            </div>
            <div className="flex flex-row items-center gap-[8px]">
              <span className="text-[#666666]"><BedIcon /></span>
              <span className="font-['Manrope'] text-[14px] text-[#323232]">King Size Luxury Bed</span>
            </div>
            <div className="flex flex-row items-center gap-[8px]">
              <span className="text-[#666666]"><GuestsIcon /></span>
              <span className="font-['Manrope'] text-[14px] text-[#323232]">2 – 4 Guests</span>
            </div>
            <div className="flex flex-row items-center gap-[8px]">
              <span className="text-[#666666]"><PriceIcon /></span>
              <span className="font-['Manrope'] text-[14px] text-[#323232]">€450 / night</span>
            </div>
          </div>

          {/* Description */}
          <p className="font-['Manrope'] text-[13px] text-[#555555] leading-[1.7]">
            Experience the pinnacle of Alpine luxury. Located on the highest floor of Hotel L'Aura, the Summit Royal Suite offers an expansive living area with a private open fireplace and a freestanding designer bathtub with direct views of the Dolomites. The suite is furnished with hand-carved stone and local Swiss pine wood, known for its calming properties.
          </p>

          {/* Amenities */}
          <div className="flex flex-col gap-[10px]">
            <p className="font-['Manrope'] text-[13px] font-medium text-[#323232]">Amenities:</p>
            <div className="flex flex-row gap-[24px]">
              <div className="flex flex-row items-center gap-[6px] text-[#666666]">
                <BathtubIcon />
                <span className="font-['Manrope'] text-[13px] text-[#323232]">Bathtub</span>
              </div>
              <div className="flex flex-row items-center gap-[6px] text-[#666666]">
                <WifiIcon />
                <span className="font-['Manrope'] text-[13px] text-[#323232]">Wifi</span>
              </div>
              <div className="flex flex-row items-center gap-[6px] text-[#666666]">
                <MiniBarIcon />
                <span className="font-['Manrope'] text-[13px] text-[#323232]">Mini Bar</span>
              </div>
            </div>
          </div>

          {/* Included services */}
          <div className="flex flex-col gap-[10px]">
            <p className="font-['Manrope'] text-[13px] font-medium text-[#323232]">Included services:</p>
            <div className="flex flex-col gap-[8px]">
              {[
                "Complimentary bottle of South Tyrolean sparkling wine upon arrival.",
                "Reserved parking space in our underground garage.",
                "Daily \"Gourmet Breakfast\" served in the suite upon request.",
              ].map((service, i) => (
                <div key={i} className="flex flex-row items-start gap-[8px]">
                  <span className="flex-none mt-[1px]"><CheckCircleIcon /></span>
                  <span className="font-['Manrope'] text-[13px] text-[#555555] leading-[1.5]">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-row gap-[12px] mt-auto pt-[8px]">
            <button
              onClick={onClose}
              className="flex-1 h-[48px] flex items-center justify-center border border-[#323232]/30 rounded-[4px] font-['Manrope'] text-[12px] font-medium text-[#323232] uppercase tracking-[0.1em] hover:bg-black/5 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              className="flex-1 h-[48px] flex items-center justify-center bg-[#9C8E7A] hover:bg-[#8a7c69] rounded-[4px] font-['Manrope'] text-[12px] font-medium text-white uppercase tracking-[0.1em] transition-colors cursor-pointer"
            >
              Reserve This Suite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
