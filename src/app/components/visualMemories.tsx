import img1 from '@/assets/image 44 (1).png';
import img2 from '@/assets/Andergassen-Druck-1101 1 (2).png';
import img3 from '@/assets/Andergassen-Druck-1101 1 (3).png';
import img4 from '@/assets/Andergassen-Druck-1101 1 (1).png';
import img5 from '@/assets/Container.png';
import img6 from '@/assets/Andergassen-Druck-2428 1.png';

export function VisualMemories() {
  return (
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
        {/* Left Section (Columns 1 & 2) */}
        <div className="flex flex-col gap-[16px] w-[888px] flex-none">
          <div className="flex flex-row gap-[16px] w-full">
            {/* Column 1 */}
            <div className="flex flex-col justify-between w-[436px] h-[608px] flex-none">
              <img src={img1} alt="Skyline" className="w-[436px] h-[291px] object-cover" />
              <img src={img4} alt="Coastal Town" className="w-[436px] h-[296px] object-cover" />
            </div>
            {/* Column 2 */}
            <img src={img2} alt="Tuscany Hills" className="w-[436px] h-[608px] object-cover flex-none" />
          </div>
          {/* Bottom row spanning 1 & 2 */}
          <img src={img6} alt="Pool Terrace" className="w-full h-[292px] object-cover" />
        </div>

        {/* Right Section (Column 3) */}
        <div className="flex flex-col gap-[16px] w-[456px] flex-none">
          <img src={img3} alt="Colosseum" className="w-full h-[335px] object-cover" />
          <div className="relative w-full h-[565px] group cursor-pointer overflow-hidden">
            <img src={img5} alt="Dark Hills" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
      </div>
    </section>
  );
}
