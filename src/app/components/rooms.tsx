import { Users, MoveHorizontal, ArrowLeft, ArrowRight } from "lucide-react";
import Image1 from "../../assets/ImageWithFallback.png";
import Image2 from "../../assets/ImageWithFallback(1).png";
import Image3 from "../../assets/ImageWithFallback(2).png";

const roomsData = [
  {
    name: "Larch Junior Suite",
    price: "€280 / night",
    img: Image1,
    desc: "Panoramic views with a private balcony and natural pine interiors.",
    capacity: "2 Guests",
    size: "45 m²",
  },
  {
    name: "Summit Royal Suite",
    price: "€450 / night",
    img: Image2,
    desc: "Luxurious top-floor suite featuring an open fireplace and a freestanding bathtub.",
    capacity: "2-4 Guests",
    size: "75 m²",
  },
  {
    name: "Family Alpine Lodge",
    price: "€380 / night",
    img: Image3,
    desc: "Two separate bedrooms and a spacious living area, perfect for mountain families.",
    capacity: "4 Guests",
    size: "65 m²",
  },
];

export function Rooms() {
  return (
    <section id="rooms" className="w-full max-w-[1440px] mx-auto bg-[#F4F3F0] overflow-hidden flex flex-col items-center pt-[88px] pb-[88px] gap-[10px]">
      <div className="w-full flex flex-col items-center px-[40px] gap-[40px]">
        
        {/* Header Section ('container-text') */}
        <div className="w-full flex flex-col items-center text-center gap-[12px]">
          {/* 'container-title' */}
          <div className="w-full flex flex-col items-center gap-[8px]">
            <div className="flex flex-row items-center justify-center gap-[6px] w-fit h-[40px] py-[8px]">
              <span className="font-['Manrope'] font-normal text-[16px] leading-[1.5] text-[#323232]">-</span>
              <span className="font-['Manrope'] font-normal text-[16px] leading-[1.5] text-[#323232]">Your Private Sanctuary</span>
              <span className="font-['Manrope'] font-normal text-[16px] leading-[1.5] text-[#323232]">-</span>
            </div>
            <h2 className="w-full text-[40px] font-normal text-[#323232] leading-[1.4] font-['Manrope']">
              Designed for Deep Rest
            </h2>
          </div>
          <p className="w-full text-[#323232] leading-[1.5] font-['Manrope'] text-[16px] font-normal">
            Explore our selection of light-flooded suites, each featuring a private panoramic terrace and the soothing scent of natural pine wood.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] w-full">
          {roomsData.map((room, idx) => (
            <div key={idx} className="flex flex-col bg-white rounded-[8px] overflow-hidden">
              {/* Image Container */}
              <div className="relative w-full h-[320px]">
                <img 
                  src={room.img} 
                  alt={room.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Container */}
              <div className="flex flex-col p-[32px] gap-[24px] flex-grow">
                {/* Text */}
                <div className="flex flex-col gap-[12px]">
                  <h3 className="text-[24px] font-normal text-[#323232] leading-[1.4] font-['Manrope']">
                    {room.name}
                  </h3>
                  <p className="text-[#767676] leading-[1.5] font-['Manrope'] text-[16px] font-normal min-h-[48px]">
                    {room.desc}
                  </p>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-[24px] mt-auto pb-[12px]">
                  <div className="flex items-center gap-[8px]">
                    <Users className="w-[18px] h-[18px] text-[#323232]" strokeWidth={1.5} />
                    <span className="font-['Manrope'] font-normal text-[14px] text-[#323232]">
                      {room.capacity}
                    </span>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <MoveHorizontal className="w-[18px] h-[18px] text-[#323232]" strokeWidth={1.5} />
                    <span className="font-['Manrope'] font-normal text-[14px] text-[#323232]">
                      {room.size}
                    </span>
                  </div>
                </div>

                {/* Button */}
                <button className="w-full h-[48px] flex items-center justify-center border border-[#E5E5E5] rounded-[4px] hover:bg-black/5 transition-colors text-[#323232] font-['Manrope'] font-normal text-[14px] tracking-[0.05em] uppercase">
                  SEE DETAILS
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center gap-[4px] h-[45px] mt-[12px]">
          <button className="flex items-center justify-center w-[45px] h-[45px] rounded-[8px] bg-[#A49781] opacity-50 backdrop-blur-[20px] hover:opacity-80 transition-opacity cursor-pointer">
            <ArrowLeft className="w-5 h-5 text-white" strokeWidth={1.5} />
          </button>
          <button className="flex items-center justify-center w-[45px] h-[45px] rounded-[8px] bg-[#A49781] backdrop-blur-[20px] hover:opacity-80 transition-opacity cursor-pointer">
            <ArrowRight className="w-5 h-5 text-white" strokeWidth={1.5} />
          </button>
        </div>

      </div>
    </section>
  );
}
