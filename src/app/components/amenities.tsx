import type { SVGProps } from "react";

const Pool = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M10 4v9" />
    <path d="M14 4v9" />
    <path d="M10 6h4" />
    <path d="M10 9h4" />
    <path d="M10 12h4" />
    <path d="M3 16c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0" />
    <path d="M3 20c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0" />
  </svg>
);

const Wine = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M7 6v5c0 2.8 2.2 5 5 5s5-2.2 5-5V6H7z" />
    <path d="M12 16v5" />
    <path d="M9 21h6" />
    <path d="M7 10h10" />
  </svg>
);

const Lotus = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 5c-2 4-2 8 0 12 2-4 2-8 0-12z" />
    <path d="M12 17c-3-1-6-4-7-8 2-1 5 1 7 8z" />
    <path d="M12 17c3-1 6-4 7-8-2-1-5 1-7 8z" />
    <path d="M12 17c-4 0-8-1-9-4 2-2 6-1 9 4z" />
    <path d="M12 17c4 0 8-1 9-4-2-2-6-1-9 4z" />
  </svg>
);

const Skier = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="16" cy="6" r="2" />
    <path d="M15 8c-2 2-4 4-5 5" />
    <path d="M10 13l-3 4" />
    <path d="M10 13l2 4" />
    <path d="M3 19h16l2-2" />
    <path d="M14 9l-4 1" />
    <path d="M10 10l-6 6" />
  </svg>
);

const Bike = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="6" cy="17" r="3" />
    <circle cx="18" cy="17" r="3" />
    <path d="M6 17l2.5-6h5l4.5 6" />
    <path d="M8.5 11l3 6" />
    <path d="M13.5 11v-3h2" />
    <path d="M8.5 11v-2h-2" />
    <circle cx="11.5" cy="17" r="1.5" />
  </svg>
);

const Yoga = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v6.5" />
    <path d="M7 12l5-3.5 5 3.5" />
    <path d="M12 13.5l-5 4.5h10z" />
  </svg>
);

const items = [
  { 
    icon: Pool, 
    title: "Sky Infinity Pool", 
    desc: "Experience the sensation of swimming in our 25-meter heated pool that appears to float directly into the rugged Dolomite peaks." 
  },
  { 
    icon: Wine, 
    title: "Forest-to-Table Dining", 
    desc: "Indulge in 5-course gourmet dinners featuring organic ingredients sourced daily from our own gardens and local Alpine farmers." 
  },
  { 
    icon: Lotus, 
    title: "Vitalis Panoramic Spa", 
    desc: "Recharge in our panoramic saunas and enjoy authentic herbal treatments inspired by ancient Alpine healing traditions." 
  },
  { 
    icon: Skier, 
    title: "Ski-In / Ski-Out Access", 
    desc: "Enjoy seamless access to the Dolomiti Superski slopes directly from the hotel's ski room—no shuttles, no waiting." 
  },
  { 
    icon: Bike, 
    title: "E-Bike & Hiking Hub", 
    desc: "Explore the mountains with ease using our premium fleet of e-bikes and professional hiking gear available exclusively for guests." 
  },
  { 
    icon: Yoga, 
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
