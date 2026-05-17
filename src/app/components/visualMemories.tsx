import { useState } from 'react';
import florenceImage from '../../assets/Andergassen-Druck-1101 1 (1).png';
import landscapeImage from '../../assets/Andergassen-Druck-1101 1 (2).png';
import colosseumImage from '../../assets/Andergassen-Druck-1101 1 (3).png';
import bottomSpanImage from '../../assets/Andergassen-Druck-2428 1.png';
import cinqueTerreImage from '../../assets/image 44 (1).png';
import seeAllBg from '../../assets/image 322.png';
import { GalleryPopup } from './GalleryPopup';

export function VisualMemories() {
  const [galleryOpen, setGalleryOpen] = useState(false);

  return (
    <>
      <section id="visual-memories" className="w-full max-w-[1440px] mx-auto bg-white flex flex-col items-center pt-[80px] pb-[120px] gap-[40px]">
        {/* Header */}
        <div className="w-full flex flex-row px-[40px] gap-[120px]">
          <div className="w-full flex flex-col items-start text-left gap-[12px]">
            {/* Badge */}
            <div className="flex flex-row items-center justify-start py-[8px] h-[40px] gap-[6px]">
              <span className="font-['Manrope'] font-normal text-[16px] leading-[1.5] text-[#323232]">-</span>
              <span className="font-['Manrope'] font-normal text-[16px] leading-[1.5] text-[#323232]">Visual Memories</span>
              <span className="font-['Manrope'] font-normal text-[16px] leading-[1.5] text-[#323232]">-</span>
            </div>
            <h2 className="w-full font-['Manrope'] text-[40px] text-[#323232] font-normal leading-[1.4] text-left">
              A Glimpse of Paradise
            </h2>
            <p className="font-['Manrope'] text-[16px] text-[#323232] leading-[1.5] font-normal">
              From golden sunrises on the terrace to cozy evenings by the fireplace.
            </p>
          </div>
        </div>

        <div className="w-full h-[916px] px-[40px] flex flex-row gap-[16px] justify-center">
          {/* Left Section (Columns 1 & 2) Width 888px */}
          <div className="flex flex-col gap-[16px] w-[888px] flex-none">
            {/* Top Block (608px high) */}
            <div className="flex flex-row gap-[16px] w-full h-[608px]">
              <div className="flex flex-col gap-[16px] w-[436px] h-[608px]">
                <img src={florenceImage} alt="Florence" className="w-[436px] h-[296px] object-cover" />
                <img src={cinqueTerreImage} alt="Coastal town" className="w-[436px] h-[296px] object-cover" />
              </div>
              <img src={landscapeImage} alt="Landscape" className="w-[436px] h-[608px] object-cover" />
            </div>
            {/* Bottom Block (292px high) */}
            <img src={bottomSpanImage} alt="Pool Terrace" className="w-[888px] h-[292px] object-cover" />
          </div>

          {/* Right Section (Column 3) Width 456px */}
          <div className="flex flex-col gap-[16px] w-[456px] flex-none">
            <img src={colosseumImage} alt="Colosseum" className="w-[456px] h-[335px] object-cover" />

            {/* See All Photos Card */}
            <button
              onClick={() => setGalleryOpen(true)}
              className="relative w-[456px] h-[565px] overflow-hidden group cursor-pointer outline-none"
              aria-label="See All Photos"
            >
              {/* Background photo */}
              <img
                src={seeAllBg}
                alt="See All Photos"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
              {/* See All Photos label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-[10px]">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="m21 15-5-5L5 21"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                </svg>
                <span className="font-['Manrope'] text-white text-[16px] font-normal tracking-[0.06em] uppercase underline underline-offset-4">
                  See All Photos
                </span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Popup */}
      <GalleryPopup isOpen={galleryOpen} onClose={() => setGalleryOpen(false)} />
    </>
  );
}
