import florenceImage from '../../assets/Andergassen-Druck-1101 1 (1).png';
import landscapeImage from '../../assets/Andergassen-Druck-1101 1 (2).png';
import colosseumImage from '../../assets/Andergassen-Druck-1101 1 (3).png';
import bottomSpanImage from '../../assets/Andergassen-Druck-2428 1.png';
import cinqueTerreImage from '../../assets/image 44 (1).png';
import containerTextImg from '../../assets/Container.png';

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
        {/* Left Section (Columns 1 & 2) Width 888px */}
        <div className="flex flex-col gap-[16px] w-[888px] flex-none">
          {/* Top Block (608px high) */}
          <div className="flex flex-row gap-[16px] w-full h-[608px]">
            <img src={landscapeImage} alt="Landscape" className="w-[436px] h-[608px] object-cover" />
            <div className="flex flex-col gap-[16px] w-[436px] h-[608px]">
              <img src={cinqueTerreImage} alt="Coastal town" className="w-[436px] h-[296px] object-cover" />
              <img src={florenceImage} alt="Florence" className="w-[436px] h-[296px] object-cover" />
            </div>
          </div>
          {/* Bottom Block (292px high) */}
          <img src={bottomSpanImage} alt="Pool Terrace" className="w-[888px] h-[292px] object-cover" />
        </div>
        
        {/* Right Section (Column 3) Width 456px */}
        <div className="flex flex-col gap-[16px] w-[456px] flex-none">
          <img src={colosseumImage} alt="Colosseum" className="w-[456px] h-[335px] object-cover" />
          <img src={containerTextImg} alt="See All Photos" className="w-[456px] h-[565px] object-cover cursor-pointer" />
        </div>
      </div>
    </section>
  );
}
