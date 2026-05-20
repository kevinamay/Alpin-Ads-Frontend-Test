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
      {/* PERUBAHAN: id="visual-memories" diubah menjadi id="gallery" agar link footer berfungsi */}
      <section id="gallery" className="w-full bg-white flex flex-col items-center pt-[60px] md:pt-[80px] pb-[40px] md:pb-[120px] overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center gap-[40px]">

        {/* Header */}
        <div className="w-full flex flex-row px-[20px] md:px-[40px] gap-[120px]">
          <div className="w-full flex flex-col items-center md:items-start text-center md:text-left gap-[12px]">
            <div className="flex flex-row items-center justify-center md:justify-start py-[8px] h-[40px] gap-[6px]">
              <span className="font-['Manrope'] font-normal text-[16px] leading-[1.5] text-[#323232]">-</span>
              <span className="font-['Manrope'] font-normal text-[16px] leading-[1.5] text-[#323232]">Visual Memories</span>
              <span className="font-['Manrope'] font-normal text-[16px] leading-[1.5] text-[#323232]">-</span>
            </div>
            <h2 className="w-full font-['Manrope'] text-[28px] md:text-[40px] text-[#323232] font-normal leading-[1.4] text-center md:text-left">
              A Glimpse of Paradise
            </h2>
            <p className="font-['Manrope'] text-[16px] text-[#323232] leading-[1.5] font-normal text-center md:text-left">
              From golden sunrises on the terrace to cozy evenings by the fireplace.
            </p>
          </div>
        </div>

        {/* Mobile: 2-column grid matching Figma design (390×885) */}
        <div className="flex md:hidden w-full flex-col gap-[8px] px-[20px]">
          {/* 2-col grid: left = 2 stacked small images, right = 1 tall image */}
          <div className="grid grid-cols-2 gap-[8px]">
            {/* Left column */}
            <div className="flex flex-col gap-[8px]">
              <img
                src={florenceImage}
                alt="Florence"
                className="w-full h-[165px] object-cover rounded-[4px]"
              />
              <img
                src={cinqueTerreImage}
                alt="Coastal town"
                className="w-full h-[165px] object-cover rounded-[4px]"
              />
            </div>
            {/* Right column – tall image spanning both rows */}
            <img
              src={landscapeImage}
              alt="Golden landscape"
              className="w-full h-[338px] object-cover rounded-[4px]"
            />
          </div>

          {/* See All Photos – full-width overlay */}
          <button
            onClick={() => setGalleryOpen(true)}
            className="relative w-full h-[160px] overflow-hidden group cursor-pointer outline-none rounded-[4px]"
            aria-label="See All Photos"
          >
            <img
              src={seeAllBg}
              alt="See All Photos"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-[10px]">
              <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.75" y="0.75" width="24.5" height="20.5" rx="1.25" stroke="white" strokeWidth="1.5" />
                <path d="M0.75 15.5L7.5 9L13.5 15L18 11L25.25 18.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="8" cy="6.5" r="2" fill="white" />
              </svg>
              <span className="font-['Manrope'] font-normal text-[#FFFFFF] text-[20px] leading-[150%]" style={{ letterSpacing: '-0.01em', textDecoration: 'underline' }}>
                See All Photos
              </span>
            </div>
          </button>

          {/* Bottom image – full width */}
          <img
            src={colosseumImage}
            alt="Architecture"
            className="w-full h-[200px] object-cover rounded-[4px]"
          />
        </div>

        {/* Desktop: original complex layout */}
        <div className="hidden md:flex w-full h-[916px] px-[40px] flex-row gap-[16px] justify-center">
          {/* Left Section */}
          <div className="flex flex-col gap-[16px] w-[888px] flex-none">
            <div className="flex flex-row gap-[16px] w-full h-[608px]">
              <div className="flex flex-col gap-[16px] w-[436px] h-[608px]">
                <img src={cinqueTerreImage} alt="Florence" className="w-[436px] h-[296px] object-cover" />
                <img src={florenceImage} alt="Coastal town" className="w-[436px] h-[296px] object-cover" />
              </div>
              <img src={landscapeImage} alt="Landscape" className="w-[436px] h-[608px] object-cover" />
            </div>
            <img src={bottomSpanImage} alt="Pool Terrace" className="w-[888px] h-[292px] object-cover" />
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-[16px] w-[456px] flex-none">
            <img src={colosseumImage} alt="Colosseum" className="w-[456px] h-[335px] object-cover" />
            <button
              onClick={() => setGalleryOpen(true)}
              className="relative w-[456px] h-[565px] overflow-hidden group cursor-pointer outline-none"
              aria-label="See All Photos"
            >
              <img src={seeAllBg} alt="See All Photos" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-[10px]">
                <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.75" y="0.75" width="24.5" height="20.5" rx="1.25" stroke="white" strokeWidth="1.5" />
                  <path d="M0.75 15.5L7.5 9L13.5 15L18 11L25.25 18.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="8" cy="6.5" r="2" fill="white" />
                </svg>
                <span className="font-['Manrope'] font-normal text-[#FFFFFF]" style={{ fontSize: '24px', lineHeight: '150%', letterSpacing: '-0.01em', textDecoration: 'underline' }}>
                  See All Photos
                </span>
              </div>
            </button>
          </div>
        </div>
        </div>
      </section>

      <GalleryPopup isOpen={galleryOpen} onClose={() => setGalleryOpen(false)} />
    </>
  );
}