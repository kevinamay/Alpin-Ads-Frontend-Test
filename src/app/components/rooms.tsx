import { useState } from "react";
import { Users, MoveHorizontal, ArrowLeft, ArrowRight } from "lucide-react";
import Image1 from "../../assets/ImageWithFallback.png";
import Image2 from "../../assets/ImageWithFallback(1).png";
import Image3 from "../../assets/ImageWithFallback(2).png";
import { RoomDetailPopup } from "./RoomDetailPopup";

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
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <section id="rooms" className="w-full max-w-[1440px] mx-auto bg-[#F4F3F0] overflow-hidden flex flex-col items-center pt-[88px] pb-[88px] gap-[10px]">
        <div className="w-full flex flex-col items-center gap-[40px]">
          
          {/* Header Section ('container-text') */}
          <div className="w-full px-[40px] flex flex-col items-center text-center gap-[12px]">
            {/* 'container-title' */}
            <div className="w-full flex flex-col items-center gap-[8px]">
              <div className="flex flex-row items-center justify-center gap-[6px] w-fit h-[40px] py-[8px]">
                <span className="font-['Manrope'] font-normal text-[16px] leading-[1.5] text-[#323232]">-</span>
                <span className="font-['Manrope'] font-normal text-[16px] leading-[1.5] text-[#323232]">Your Private Sanctuary</span>
                <span className="font-['Manrope'] font-normal text-[16px] leading-[1.5] text-[#323232]">-</span>
              </div>
              <h2 className="w-full text-center text-[40px] font-normal text-[#323232] leading-[1.4] font-['Manrope']">
                Designed for Deep Rest
              </h2>
            </div>
            <p className="w-full text-center text-[#323232] leading-[1.5] font-['Manrope'] text-[16px] font-normal">
              Explore our selection of light-flooded suites, each featuring a private panoramic terrace and the soothing scent of natural pine wood.
            </p>
          </div>

          {/* Cards Grid ('Frame 2147234709') */}
          <div className="flex flex-row gap-[16px] px-[32px] w-full justify-start">
            {roomsData.map((room, idx) => (
              <div key={idx} className="flex flex-col shrink-0 w-[465px] h-[545px] bg-white rounded-[8px] overflow-hidden">
                {/* Image Container */}
                <div className="relative w-full h-[327px]">
                  <img 
                    src={room.img} 
                    alt={room.name} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Container */}
                <div className="flex flex-col p-[12px] gap-[16px] flex-grow">
                  {/* Text */}
                  <div className="flex flex-col gap-[12px]">
                    <h3 className="w-full text-[20px] font-normal text-[#323232] leading-[1.5] font-['Manrope']">
                      {room.name}
                    </h3>
                    <p className="w-full text-[#323232]/70 leading-[1.5] font-['Manrope'] text-[16px] font-normal">
                      {room.desc}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="flex flex-row items-center gap-[12px] w-full h-[24px] mt-auto">
                    <div className="flex items-center gap-[8px]">
                      <Users className="w-[24px] h-[24px] text-[#323232]" strokeWidth={2} />
                      <span className="font-['Manrope'] font-normal text-[16px] leading-[24px] text-[#323232]">
                        {room.capacity}
                      </span>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <MoveHorizontal className="w-[24px] h-[24px] text-[#323232]" strokeWidth={2} />
                      <span className="font-['Manrope'] font-normal text-[16px] leading-[24px] text-[#323232]">
                        {room.size}
                      </span>
                    </div>
                  </div>

                  {/* Button — opens popup */}
                  <button
                    onClick={() => setIsPopupOpen(true)}
                    className="w-full h-[48px] flex items-center justify-center gap-[10px] py-[12px] px-[32px] border border-[#323232]/20 rounded-[4px] backdrop-blur-[20px] hover:bg-black/5 transition-colors text-[#323232] font-['Manrope'] font-normal text-[16px] leading-[1.5] tracking-[0.05em] uppercase cursor-pointer"
                  >
                    SEE DETAILS
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="w-full flex flex-row items-center justify-center gap-[4px] h-[45px]">
            <button className="flex items-center justify-center w-[45px] h-[45px] rounded-[8px] bg-[#A49781] opacity-50 backdrop-blur-[20px] hover:opacity-80 transition-opacity cursor-pointer">
              <ArrowLeft className="w-[18px] h-[18px] text-[#323232]" strokeWidth={1.5} />
            </button>
            <button className="flex items-center justify-center w-[45px] h-[45px] rounded-[8px] bg-[#A49781] backdrop-blur-[20px] hover:opacity-80 transition-opacity cursor-pointer">
              <ArrowRight className="w-[18px] h-[18px] text-white" strokeWidth={1.5} />
            </button>
          </div>

        </div>
      </section>

      {/* Room Detail Popup */}
      <RoomDetailPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}
