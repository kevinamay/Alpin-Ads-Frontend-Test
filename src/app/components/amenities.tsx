import type { SVGProps } from "react";

const PoolIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M7 3v9" />
    <path d="M11 3v9" />
    <path d="M7 6h4" />
    <path d="M7 9h4" />
    <path d="M2 15c2 0 3-1.5 5-1.5s3 1.5 5 1.5 3-1.5 5-1.5 3 1.5 5 1.5" />
    <path d="M2 19c2 0 3-1.5 5-1.5s3 1.5 5 1.5 3-1.5 5-1.5 3 1.5 5 1.5" />
  </svg>
);

const WineIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M8 22h8" />
    <path d="M12 15v7" />
    <path d="M7 3v3.5A5.5 5.5 0 0 0 12 12A5.5 5.5 0 0 0 17 6.5V3H7z" />
    <path d="M7 7h10" />
  </svg>
);

const LotusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22c-4-4-5-9-5-12s5-7 5-7 5 4 5 7-1 8-5 12z" />
    <path d="M12 22c-2-3-7-4-10-8s0-8 0-8 6 1 10 8z" />
    <path d="M12 22c2-3 7-4 10-8s0-8 0-8-6 1-10 8z" />
  </svg>
);

const SkierIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="10" cy="5" r="2" />
    <path d="M10 7l-2 5 4 4" />
    <path d="M8 12l4-2 4 4" />
    <path d="M4 18h16" />
    <path d="M16 14l-4 4" />
  </svg>
);

const BikeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="5" cy="18" r="4" />
    <circle cx="19" cy="18" r="4" />
    <path d="M5 18l4-8h5l4 8" />
    <path d="M9 10L7 6h4" />
    <path d="M14 10l2-4h4" />
  </svg>
);

const YogaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="6" r="2" />
    <path d="M12 8v6" />
    <path d="M12 10l-4 4" />
    <path d="M12 10l4 4" />
    <path d="M12 14l-4 4h8l-4-4" />
  </svg>
);

const items = [
  { 
    icon: PoolIcon, 
    title: "Sky Infinity Pool", 
    desc: "Experience the sensation of swimming in our 25-meter heated pool that appears to float directly into the rugged Dolomite peaks." 
  },
  { 
    icon: WineIcon, 
    title: "Forest-to-Table Dining", 
    desc: "Indulge in 5-course gourmet dinners featuring organic ingredients sourced daily from our own gardens and local Alpine farmers." 
  },
  { 
    icon: LotusIcon, 
    title: "Vitalis Panoramic Spa", 
    desc: "Recharge in our panoramic saunas and enjoy authentic herbal treatments inspired by ancient Alpine healing traditions." 
  },
  { 
    icon: SkierIcon, 
    title: "Ski-In / Ski-Out Access", 
    desc: "Enjoy seamless access to the Dolomiti Superski slopes directly from the hotel's ski room—no shuttles, no waiting." 
  },
  { 
    icon: BikeIcon, 
    title: "E-Bike & Hiking Hub", 
    desc: "Explore the mountains with ease using our premium fleet of e-bikes and professional hiking gear available exclusively for guests." 
  },
  { 
    icon: YogaIcon, 
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
                <div className="flex flex-none items-center justify-center p-[8px] w-[56px] h-[56px] bg-white rounded-[8px] shadow-sm">
                  <Icon className="w-[40px] h-[40px] text-[#A49781]" />
                </div>
                <div className="flex flex-col gap-[12px]">
                  <h3 className="font-['Manrope'] text-[24px] text-[#323232] font-normal leading-[1.4]">
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
