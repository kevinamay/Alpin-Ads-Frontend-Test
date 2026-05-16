import type { SVGProps } from "react";
import poolIcon from '@/assets/Vector.svg';
import skierIcon from '@/assets/Vector(3).svg';
import lotusIcon from '@/assets/Vector(2).svg';
import bikeIcon from '@/assets/Vector(4).svg';
import wineIcon from '@/assets/Vector(1).svg';
import yogaIcon from '@/assets/Vector(5).svg';

const items = [
  { 
    icon: poolIcon, 
    title: "Sky Infinity Pool", 
    desc: "Experience the sensation of swimming in our 25-meter heated pool that appears to float directly into the rugged Dolomite peaks." 
  },
  { 
    icon: wineIcon, 
    title: "Forest-to-Table Dining", 
    desc: "Indulge in 5-course gourmet dinners featuring organic ingredients sourced daily from our own gardens and local Alpine farmers" 
  },
  { 
    icon: lotusIcon, 
    title: "Vitalis Panoramic Spa", 
    desc: "Recharge in our panoramic saunas and enjoy authentic herbal treatments inspired by ancient Alpine healing traditions." 
  },
  { 
    icon: skierIcon, 
    title: "Ski-In / Ski-Out Access", 
    desc: "Enjoy seamless access to the Dolomiti Superski slopes directly from the hotel's ski room—no shuttles, no waiting." 
  },
  { 
    icon: bikeIcon, 
    title: "E-Bike & Hiking Hub", 
    desc: "Explore the mountains with ease using our premium fleet of e-bikes and professional hiking gear available exclusively for guests." 
  },
  { 
    icon: yogaIcon, 
    title: "Mindful Yoga Studio", 
    desc: "Find your inner peace in our glass-walled studio overlooking the pine forest, offering daily guided meditation and yoga sessions." 
  },
];

export function Amenities() {
  return (
    <section id="amenities" className="w-full max-w-[1440px] mx-auto bg-white flex flex-col items-center pt-[80px] pb-[120px] gap-[10px]">
      <div className="w-full flex flex-col items-center gap-[40px]">
        {/* Header */}
        <div className="w-full flex flex-row px-[40px] gap-[120px]">
          <div className="w-full flex flex-col items-center text-center gap-[8px]">
            {/* Badge */}
            <div className="flex flex-row items-center justify-center gap-[6px] py-[8px] h-[40px]">
              <span className="font-['Manrope'] font-normal text-[16px] leading-[1.5] text-[#323232]">-</span>
              <span className="font-['Manrope'] font-normal text-[16px] leading-[1.5] text-[#323232]">Amenities</span>
              <span className="font-['Manrope'] font-normal text-[16px] leading-[1.5] text-[#323232]">-</span>
            </div>
            <h2 className="w-full font-['Manrope'] text-[40px] text-[#323232] font-normal leading-[1.4] text-center">
              Everything you'd hope for, and more.
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div className="w-full px-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px]">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex flex-col items-start bg-[#F4F3F0] rounded-[8px] p-[16px] w-full gap-[24px]">
                <div className="flex flex-row flex-none items-center justify-center p-[8px] w-[56px] h-[56px] bg-white rounded-[8px] gap-[10px]">
                  <img src={item.icon} alt={item.title} className="w-full h-full object-none" />
                </div>
                <div className="flex flex-col gap-[12px]">
                  <h3 className="font-['Manrope'] text-[28px] text-[#323232] font-normal leading-[1.5]">
                    {item.title}
                  </h3>
                  <p className="font-['Manrope'] text-[16px] text-[#323232]/70 leading-[1.5] font-normal text-left">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
