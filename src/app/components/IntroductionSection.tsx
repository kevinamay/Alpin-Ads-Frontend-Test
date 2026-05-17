import { useState, useEffect } from 'react';
import BedroomPhoto from '../../assets/Andergassen-Druck-11011.png';
import ExteriorPhoto from '../../assets/image(2).png';
import CityscapePhoto from '../../assets/image 44 (1).png';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const photos = [CityscapePhoto, BedroomPhoto, ExteriorPhoto];

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
  const [idx, setIdx] = useState(0);

  const goNext = () => setIdx((i) => (i + 1) % photos.length);
  const goPrev = () => setIdx((i) => (i - 1 + photos.length) % photos.length);

  // Desktop: fixed-position panoramic strip
  const DESKTOP_IMG_W = 748;
  const DESKTOP_GAP = 16;
  const desktopTranslateX = -726 - idx * (DESKTOP_IMG_W + DESKTOP_GAP);

  if (isMobile) {
    return (
      <section className="w-full max-w-[1440px] mx-auto bg-white overflow-hidden flex flex-col items-center pt-[60px] pb-[60px] gap-[40px]">
        {/* Text — centered on mobile */}
        <div className="w-full px-[20px] flex flex-col items-center text-center gap-[12px]">
          <div className="flex flex-col items-center gap-[8px] w-full">
            <div className="flex flex-row items-center justify-center gap-[6px] py-[8px] h-[40px]">
              <span className="font-['Manrope'] font-normal text-[16px] leading-[1.5] text-[#323232]">-</span>
              <span className="font-['Manrope'] font-normal text-[16px] leading-[1.5] text-[#323232]">Our Heritage</span>
              <span className="font-['Manrope'] font-normal text-[16px] leading-[1.5] text-[#323232]">-</span>
            </div>
            <h2 className="w-full text-[28px] font-normal text-[#323232] leading-[1.4] font-['Manrope'] text-center">
              Nature, Design, and Soul
            </h2>
          </div>
          <p className="w-full text-[#323232] leading-[1.5] font-['Manrope'] text-[16px] font-normal text-center">
            Born from a passion for architecture and deep respect for the Alpine landscape, L'Aura is more than a hotel—it's a private retreat where every window frames a masterpiece of nature.
          </p>
        </div>

        {/* Mobile Image Carousel — peek left/right */}
        <div className="w-full overflow-hidden relative">
          <div
            className="flex flex-row"
            style={{
              gap: "12px",
              transform: `translateX(calc(${idx * -1} * (calc(100vw - 60px) + 12px) + 20px))`,
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

        {/* Mobile Arrows — centered below image */}
        <div className="flex items-center justify-center gap-[4px]">
          <button
            onClick={goPrev}
            className="flex items-center justify-center w-[45px] h-[45px] rounded-[8px] bg-[#A49781] opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 text-white" strokeWidth={1.5} />
          </button>
          <button
            onClick={goNext}
            className="flex items-center justify-center w-[45px] h-[45px] rounded-[8px] bg-[#A49781] hover:opacity-80 transition-opacity cursor-pointer"
          >
            <ArrowRight className="w-5 h-5 text-white" strokeWidth={1.5} />
          </button>
        </div>
      </section>
    );
  }

  // Desktop layout
  return (
    <section className="w-full max-w-[1440px] mx-auto bg-white overflow-hidden flex flex-col items-center pt-[80px] pb-[120px] gap-[10px]">
      <div className="w-full flex flex-col gap-[40px]">
        {/* Top: text left + arrows right */}
        <div className="w-full flex flex-row justify-between items-end px-[40px] gap-[120px]">
          <div className="w-full flex flex-col justify-center gap-[12px]">
            <div className="flex flex-col gap-[8px] w-full">
              <div className="flex flex-row items-center gap-[6px] w-fit h-[40px] py-[8px]">
                <span className="font-['Manrope'] font-normal text-[16px] leading-[1.5] text-[#323232]">-</span>
                <span className="font-['Manrope'] font-normal text-[16px] leading-[1.5] text-[#323232]">Our Heritage</span>
                <span className="font-['Manrope'] font-normal text-[16px] leading-[1.5] text-[#323232]">-</span>
              </div>
              <h2 className="w-full text-[40px] font-normal text-[#323232] leading-[1.4] font-['Manrope']">
                Nature, Design, and Soul
              </h2>
            </div>
            <p className="w-full text-[#323232] leading-[1.5] font-['Manrope'] text-[16px] font-normal">
              Born from a passion for architecture and deep respect for the Alpine landscape, L'Aura is more than a hotel—it's a private retreat where every window frames a masterpiece of nature.
            </p>
          </div>
          <div className="flex items-center gap-[4px] shrink-0 h-[45px]">
            <button onClick={goPrev} className="flex items-center justify-center w-[45px] h-[45px] rounded-[8px] bg-[#A49781] opacity-50 backdrop-blur-[20px] hover:opacity-80 transition-opacity cursor-pointer">
              <ArrowLeft className="w-5 h-5 text-white" strokeWidth={1.5} />
            </button>
            <button onClick={goNext} className="flex items-center justify-center w-[45px] h-[45px] rounded-[8px] bg-[#A49781] backdrop-blur-[20px] hover:opacity-80 transition-opacity cursor-pointer">
              <ArrowRight className="w-5 h-5 text-white" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Desktop panoramic strip */}
        <div className="flex gap-[16px] w-max" style={{ marginLeft: `${desktopTranslateX}px`, transition: "margin-left 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}>
          {photos.map((photo, i) => (
            <div key={i} style={{ width: `${DESKTOP_IMG_W}px`, height: "519px", flexShrink: 0 }}>
              <img src={photo} alt={`Heritage ${i + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
