import { useState, useEffect } from 'react';
import BedroomPhoto from '../../assets/Andergassen-Druck-11011.png';
import ExteriorPhoto from '../../assets/image(2).png';
import CityscapePhoto from '../../assets/image 44 (1).png';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const photos = [CityscapePhoto, BedroomPhoto, ExteriorPhoto];

// Triple the array for infinite loop
const extendedPhotos = [...photos, ...photos, ...photos];
const total = photos.length;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return isMobile;
}

export function IntroductionSection() {
  const isMobile = useIsMobile();

  // Desktop carousel state — starts in middle section
  const [trackIdx, setTrackIdx] = useState(total);
  const [animated, setAnimated] = useState(true);

  // Mobile carousel state
  const [mobileIdx, setMobileIdx] = useState(0);

  const goNext = () => {
    if (isMobile) {
      setMobileIdx((i) => (i + 1) % photos.length);
    } else {
      setAnimated(true);
      setTrackIdx((i) => i + 1);
    }
  };

  const goPrev = () => {
    if (isMobile) {
      setMobileIdx((i) => (i - 1 + photos.length) % photos.length);
    } else {
      setAnimated(true);
      setTrackIdx((i) => i - 1);
    }
  };

  const onTransitionEnd = () => {
    if (trackIdx >= total * 2) {
      setAnimated(false);
      setTrackIdx(trackIdx - total);
    } else if (trackIdx < total) {
      setAnimated(false);
      setTrackIdx(trackIdx + total);
    }
  };

  // Desktop: 748px card, 16px gap, peek offset so left image is partially visible
  const CARD_W = 748;
  const GAP = 16;
  const STEP = CARD_W + GAP;
  const LEFT_PAD = -240; // negative to show partial previous image on left
  const desktopTranslateX = LEFT_PAD + (total - trackIdx) * STEP;

  return (
    <section className="w-full bg-white overflow-hidden flex flex-col items-center pt-[60px] md:pt-[80px] pb-[60px] md:pb-[120px]">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-[40px]">

        {/* Top: text + arrows */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end px-[20px] md:px-[40px] gap-[24px] md:gap-[120px]">
          {/* Text */}
          <div className="w-full flex flex-col justify-center gap-[12px]">
            <div className="flex flex-col gap-[8px] w-full">
              <div className="flex flex-row items-center gap-[6px] w-fit h-[40px] py-[8px]">
                <span className="font-['Manrope'] font-normal text-[16px] leading-[1.5] text-[#323232]">-</span>
                <span className="font-['Manrope'] font-normal text-[16px] leading-[1.5] text-[#323232]">Our Heritage</span>
                <span className="font-['Manrope'] font-normal text-[16px] leading-[1.5] text-[#323232]">-</span>
              </div>
              <h2 className="w-full text-[28px] md:text-[40px] font-normal text-[#323232] leading-[1.4] font-['Manrope']">
                Nature, Design, and Soul
              </h2>
            </div>
            <p className="w-full text-[#323232] leading-[1.5] font-['Manrope'] text-[16px] font-normal">
              Born from a passion for architecture and deep respect for the Alpine landscape, L'Aura is more than a hotel—it's a private retreat where every window frames a masterpiece of nature.
            </p>
          </div>

          {/* Desktop arrows — top right */}
          <div className="hidden md:flex items-center gap-[4px] shrink-0 h-[45px]">
            <button onClick={goPrev} className="flex items-center justify-center w-[45px] h-[45px] rounded-[8px] bg-[#A49781] opacity-50 backdrop-blur-[20px] hover:opacity-80 transition-opacity cursor-pointer">
              <ArrowLeft className="w-5 h-5 text-white" strokeWidth={1.5} />
            </button>
            <button onClick={goNext} className="flex items-center justify-center w-[45px] h-[45px] rounded-[8px] bg-[#A49781] backdrop-blur-[20px] hover:opacity-80 transition-opacity cursor-pointer">
              <ArrowRight className="w-5 h-5 text-white" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Desktop infinite carousel */}
        <div className="hidden md:block w-full overflow-hidden">
          <div
            className="flex flex-row"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(${desktopTranslateX}px)`,
              transition: animated ? "transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "none",
              willChange: "transform",
            }}
            onTransitionEnd={onTransitionEnd}
          >
            {extendedPhotos.map((photo, i) => (
              <div
                key={i}
                className="shrink-0"
                style={{ width: `${CARD_W}px`, height: "519px" }}
              >
                <img src={photo} alt={`Heritage ${i % total + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile peek carousel */}
        <div className="flex md:hidden w-full overflow-hidden">
          <div
            className="flex flex-row"
            style={{
              gap: "12px",
              transform: `translateX(calc(20px + ${mobileIdx * -1} * (calc(100vw - 60px) + 12px)))`,
              transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            {photos.map((photo, i) => (
              <div
                key={i}
                className="shrink-0 rounded-[8px] overflow-hidden"
                style={{ width: "calc(100vw - 60px)", height: "240px" }}
              >
                <img src={photo} alt={`Heritage ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile arrows — centered below image */}
        <div className="flex md:hidden items-center justify-center gap-[4px]">
          <button onClick={goPrev} className="flex items-center justify-center w-[45px] h-[45px] rounded-[8px] bg-[#A49781] opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
            <ArrowLeft className="w-5 h-5 text-white" strokeWidth={1.5} />
          </button>
          <button onClick={goNext} className="flex items-center justify-center w-[45px] h-[45px] rounded-[8px] bg-[#A49781] hover:opacity-80 transition-opacity cursor-pointer">
            <ArrowRight className="w-5 h-5 text-white" strokeWidth={1.5} />
          </button>
        </div>

      </div>
    </section>
  );
}
