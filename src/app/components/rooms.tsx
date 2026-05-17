import { useState, useRef } from "react";
import { Users, MoveHorizontal, ArrowLeft, ArrowRight } from "lucide-react";
import Image1 from "../../assets/ImageWithFallback.png";
import Image2 from "../../assets/ImageWithFallback(1).png";
import Image3 from "../../assets/ImageWithFallback(2).png";
import Image11 from "../../assets/image11.png";
import LarchImage from "../../assets/01hd34rames8z8qtkt7cr6g4et.jpeg";
import FamilyImage from "../../assets/01gepp0vtgsybhf010q3jnr7na.jpeg";
import { RoomDetailPopup, type RoomPopupData } from "./RoomDetailPopup";

const roomsData = [
  {
    name: "Larch Junior Suite",
    price: "€280 / night",
    img: Image1,
    desc: "Panoramic views with a private balcony and natural pine interiors.",
    capacity: "2 Guests",
    size: "45 m²",
    popupData: {
      name: "Larch Junior Suite",
      images: [LarchImage, LarchImage, LarchImage],
      size: "45 m²",
      bedType: "Double Bed",
      capacity: "2 Guests",
      price: "€280 / night",
      description:
        "Nestled on the lower floors of Hotel L'Aura, the Larch Junior Suite is a warm and intimate retreat surrounded by the natural scent of Swiss pine. The suite features a private balcony with sweeping panoramic views over the Dolomite valleys, a cozy reading nook, and locally crafted larch wood furniture. Perfect for couples seeking tranquility and alpine charm.",
      amenities: ["Bathtub", "Wifi", "Mini Bar"],
      services: [
        "Welcome fruit basket and local artisan cheese plate upon arrival.",
        "Daily mountain spring water replenishment included.",
        "Access to the Vitalis Panoramic Spa during your stay.",
      ],
    } satisfies RoomPopupData,
  },
  {
    name: "Summit Royal Suite",
    price: "€450 / night",
    img: Image2,
    desc: "Luxurious top-floor suite featuring an open fireplace and a freestanding bathtub.",
    capacity: "2-4 Guests",
    size: "75 m²",
    popupData: {
      name: "Summit Royal Suite",
      images: [Image11, Image11, Image11],
      size: "75 m²",
      bedType: "King Size Luxury Bed",
      capacity: "2 – 4 Guests",
      price: "€450 / night",
      description:
        "Experience the pinnacle of Alpine luxury. Located on the highest floor of Hotel L'Aura, the Summit Royal Suite offers an expansive living area with a private open fireplace and a freestanding designer bathtub with direct views of the Dolomites. The suite is furnished with hand-carved stone and local Swiss pine wood, known for its calming properties.",
      amenities: ["Bathtub", "Wifi", "Mini Bar"],
      services: [
        "Complimentary bottle of South Tyrolean sparkling wine upon arrival.",
        "Reserved parking space in our underground garage.",
        "Daily \"Gourmet Breakfast\" served in the suite upon request.",
      ],
    } satisfies RoomPopupData,
  },
  {
    name: "Family Alpine Lodge",
    price: "€380 / night",
    img: Image3,
    desc: "Two separate bedrooms and a spacious living area, perfect for mountain families.",
    capacity: "4 Guests",
    size: "65 m²",
    popupData: {
      name: "Family Alpine Lodge",
      images: [FamilyImage, FamilyImage, FamilyImage],
      size: "65 m²",
      bedType: "Two Queen Beds",
      capacity: "Up to 4 Guests",
      price: "€380 / night",
      description:
        "Designed with families in mind, the Family Alpine Lodge features two separate bedrooms and a generous shared living area with a dining table and fireplace. Children will love the dedicated bunk corner, while parents can relax on the private terrace overlooking the pine forest. Every detail is crafted to make your family retreat unforgettable.",
      amenities: ["Bathtub", "Wifi", "Mini Bar"],
      services: [
        "Children's welcome gift and activity kit upon arrival.",
        "Complimentary cot and baby amenities on request.",
        "Exclusive access to family hiking routes curated by our concierge.",
      ],
    } satisfies RoomPopupData,
  },
];

// Carousel constants
const CARD_W = 465;
const GAP = 16;
const STEP = CARD_W + GAP; // 481px per card
const LEFT_PAD = 32;       // left padding
const total = roomsData.length; // 3

// Triple the data for infinite loop: [copy1, real, copy2]
const extendedRooms = [...roomsData, ...roomsData, ...roomsData];

export function Rooms() {
  const [activeRoom, setActiveRoom] = useState<RoomPopupData | null>(null);
  const [trackIdx, setTrackIdx] = useState(total); // start in middle section
  const [animated, setAnimated] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);

  const goNext = () => {
    setAnimated(true);
    setTrackIdx((i) => i + 1);
  };

  const goPrev = () => {
    setAnimated(true);
    setTrackIdx((i) => i - 1);
  };

  // Silent snap back to middle section when reaching clone edges
  const onTransitionEnd = () => {
    if (trackIdx >= total * 2) {
      setAnimated(false);
      setTrackIdx(trackIdx - total);
    } else if (trackIdx < total) {
      setAnimated(false);
      setTrackIdx(trackIdx + total);
    }
  };

  // Translate: align the card at trackIdx to left-pad position
  const translateX = LEFT_PAD - trackIdx * STEP;

  return (
    <>
      <section id="rooms" className="w-full max-w-[1440px] mx-auto bg-[#F4F3F0] overflow-hidden flex flex-col items-center pt-[88px] pb-[88px] gap-[10px]">
        <div className="w-full flex flex-col items-center gap-[40px]">

          {/* Header */}
          <div className="w-full px-[40px] flex flex-col items-center text-center gap-[12px]">
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

          {/* Carousel Viewport */}
          <div className="w-full overflow-hidden">
            <div
              ref={trackRef}
              className="flex flex-row"
              style={{
                gap: `${GAP}px`,
                transform: `translateX(${translateX}px)`,
                transition: animated
                  ? "transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                  : "none",
                willChange: "transform",
              }}
              onTransitionEnd={onTransitionEnd}
            >
              {extendedRooms.map((room, idx) => (
                <div
                  key={idx}
                  className="flex flex-col shrink-0 bg-white rounded-[8px] overflow-hidden"
                  style={{ width: `${CARD_W}px`, height: "545px" }}
                >
                  <div className="relative w-full h-[327px]">
                    <img src={room.img} alt={room.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col p-[12px] gap-[16px] flex-grow">
                    <div className="flex flex-col gap-[12px]">
                      <h3 className="w-full text-[20px] font-normal text-[#323232] leading-[1.5] font-['Manrope']">
                        {room.name}
                      </h3>
                      <p className="w-full text-[#323232]/70 leading-[1.5] font-['Manrope'] text-[16px] font-normal">
                        {room.desc}
                      </p>
                    </div>
                    <div className="flex flex-row items-center gap-[12px] w-full h-[24px] mt-auto">
                      <div className="flex items-center gap-[8px]">
                        <Users className="w-[24px] h-[24px] text-[#323232]" strokeWidth={2} />
                        <span className="font-['Manrope'] font-normal text-[16px] leading-[24px] text-[#323232]">{room.capacity}</span>
                      </div>
                      <div className="flex items-center gap-[8px]">
                        <MoveHorizontal className="w-[24px] h-[24px] text-[#323232]" strokeWidth={2} />
                        <span className="font-['Manrope'] font-normal text-[16px] leading-[24px] text-[#323232]">{room.size}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setActiveRoom(room.popupData)}
                      className="w-full h-[48px] flex items-center justify-center gap-[10px] py-[12px] px-[32px] border border-[#323232]/20 rounded-[4px] backdrop-blur-[20px] hover:bg-black/5 transition-colors text-[#323232] font-['Manrope'] font-normal text-[16px] leading-[1.5] tracking-[0.05em] uppercase cursor-pointer"
                    >
                      SEE DETAILS
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow Buttons */}
          <div className="w-full flex flex-row items-center justify-center gap-[4px] h-[45px]">
            <button
              onClick={goPrev}
              className="flex items-center justify-center w-[45px] h-[45px] rounded-[8px] bg-[#A49781] opacity-70 backdrop-blur-[20px] hover:opacity-100 transition-opacity cursor-pointer"
            >
              <ArrowLeft className="w-[18px] h-[18px] text-white" strokeWidth={1.5} />
            </button>
            <button
              onClick={goNext}
              className="flex items-center justify-center w-[45px] h-[45px] rounded-[8px] bg-[#A49781] backdrop-blur-[20px] hover:opacity-80 transition-opacity cursor-pointer"
            >
              <ArrowRight className="w-[18px] h-[18px] text-white" strokeWidth={1.5} />
            </button>
          </div>

        </div>
      </section>

      <RoomDetailPopup
        isOpen={activeRoom !== null}
        onClose={() => setActiveRoom(null)}
        room={activeRoom}
      />
    </>
  );
}
