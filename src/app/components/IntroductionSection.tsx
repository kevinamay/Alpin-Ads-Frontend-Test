import BedroomPhoto from '../../assets/Andergassen-Druck-11011.png';
import ExteriorPhoto from '../../assets/image(2).png';
import CityscapePhoto from '../../assets/image44.png';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function IntroductionSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto bg-white overflow-hidden flex flex-col items-center pt-[80px] pb-[120px] gap-[10px]">
      <div className="w-full flex flex-col gap-[40px]">
        
        {/* Top Section: Text & Controls ('container' in Figma) */}
        <div className="w-full flex flex-col md:flex-row justify-between items-end px-[40px] gap-[120px]">
          {/* Text Content ('container-text' in Figma) */}
          <div className="w-full flex flex-col justify-center gap-[12px]">
            {/* 'container-title' in Figma */}
            <div className="flex flex-col gap-[8px] w-full">
              {/* 'Badge' in Figma */}
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

          {/* Pagination Controls */}
          <div className="flex items-center gap-[4px] shrink-0 h-[45px]">
            <button className="flex items-center justify-center w-[45px] h-[45px] rounded-[8px] bg-[#A49781] opacity-50 backdrop-blur-[20px] hover:opacity-80 transition-opacity cursor-pointer">
              <ArrowLeft className="w-5 h-5 text-white" strokeWidth={1.5} />
            </button>
            <button className="flex items-center justify-center w-[45px] h-[45px] rounded-[8px] bg-[#A49781] backdrop-blur-[20px] hover:opacity-80 transition-opacity cursor-pointer">
              <ArrowRight className="w-5 h-5 text-white" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Bottom Section: Image Gallery Grid ('card' in Figma) */}
        <div className="flex gap-[16px] w-max" style={{ marginLeft: '-726px' }}>
          {/* Image 0 (Cityscape - partially visible on the left) */}
          <div style={{ width: '748px', height: '519px', flexShrink: 0 }} className="flex justify-end">
            <img 
              src={CityscapePhoto} 
              alt="Cityscape" 
              className="h-full w-auto object-cover"
            />
          </div>

          {/* Image 1 (Landscape) */}
          <div style={{ width: '748px', height: '519px', flexShrink: 0 }}>
            <img 
              src={BedroomPhoto} 
              alt="Nature Landscape" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 2 (Colosseum - partially visible on the right) */}
          <div style={{ width: '748px', height: '519px', flexShrink: 0 }}>
            <img 
              src={ExteriorPhoto} 
              alt="Colosseum" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
