import { useState, useEffect } from 'react';
import { Users, Calendar as CalendarIcon, ChevronDown, ArrowLeft, ArrowRight, Minus, Plus } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Calendar } from "./ui/calendar";
import { format } from "date-fns";
import type { DateRange } from "react-day-picker";

// Import ketiga gambar untuk slider
import HeroBg1 from '../../assets/Background.png';
import HeroBg2 from '../../assets/Andergassen-Druck-1101 1 (2).png';
import HeroBg3 from '../../assets/photo-1683962808565-9c7fb094d183.avif';
import Logo from '../../assets/logoipsum.svg';

interface HeroSectionProps {
  dateRange: DateRange | undefined;
  setDateRange: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
  guests: { adults: number; children: number };
  setGuests: React.Dispatch<React.SetStateAction<{ adults: number; children: number }>>;
}

export function HeroSection({ dateRange, setDateRange, guests, setGuests }: HeroSectionProps) {
  // State untuk melacak index gambar yang sedang aktif
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [HeroBg1, HeroBg2, HeroBg3];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getGuestsSummary = () => {
    const total = guests.adults + guests.children;
    if (total === 0) return "Number of guests";
    return `${total} ${total === 1 ? "Guest" : "Guests"}`;
  };

  const getDateSummary = () => {
    if (!dateRange?.from) return "Select date";
    if (!dateRange.to) return format(dateRange.from, "MMM d");
    return `${format(dateRange.from, "MMM d")} – ${format(dateRange.to, "MMM d")}`;
  };

  // Fungsi untuk menggeser ke gambar selanjutnya (kanan)
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  // Fungsi untuk menggeser ke gambar sebelumnya (kiri)
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section className="relative w-full h-[100dvh] md:h-screen overflow-hidden font-sans">

      {/* Background Images dengan efek crossfade yang halus */}
      {heroImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10'
            }`}
          style={{ backgroundImage: `url('${img}')` }}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10" />

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-20 flex items-center justify-center h-[72px] md:h-[124px] text-white">
        <div className="w-full max-w-[1440px] flex items-center justify-between px-[20px] md:px-[24px] h-full">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={Logo}
              alt="Logo"
              className="w-[120px] h-auto md:w-[224px] md:h-[100px] object-contain"
            />
          </div>

          {/* Navigation Links — desktop only */}
          <div className="hidden md:flex flex-1 items-center justify-center h-[46px] pb-[24px] gap-[24px] font-['Manrope'] font-normal text-[16px] leading-none tracking-[0.05em] uppercase text-[#fefefe]">
            <a href="#rooms" className="hover:text-gray-300 transition-colors">ROOMS</a>
            <a href="#amenities" className="hover:text-gray-300 transition-colors">AMENITIES</a>
            <a href="#reserve" className="hover:text-gray-300 transition-colors">RESERVE</a>
          </div>

          {/* Book Now Button */}
          <div className="flex items-center justify-end md:pb-[24px]">
            <button className="flex items-center justify-center whitespace-nowrap h-[40px] md:h-[48px] py-[8px] md:py-[12px] px-[20px] md:px-[32px] bg-black/15 border border-white/20 backdrop-blur-[20px] rounded-[8px] hover:bg-black/25 transition-colors font-['Manrope'] font-normal text-[14px] md:text-[16px] leading-[1.5] tracking-[0.05em] uppercase text-white">
              BOOK NOW
            </button>
          </div>
        </div>
      </nav>

      {/* Arrow buttons - Ditambahkan event onClick */}
      <div className="absolute top-[380px] md:top-[492px] left-0 w-full h-[40px] z-20 flex items-center justify-center">
        <div className="w-full max-w-[1440px] flex items-center justify-between px-[20px] md:px-[24px]">
          <button
            onClick={prevImage}
            className="flex items-center justify-center w-[40px] h-[40px] bg-black/20 backdrop-blur-[111.11px] transition-colors text-white cursor-pointer hover:bg-black/40"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextImage}
            className="flex items-center justify-center w-[40px] h-[40px] bg-black/20 backdrop-blur-[111.11px] transition-colors text-white cursor-pointer hover:bg-black/40"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Booking Widget — bottom overlay */}
      <div className="absolute bottom-0 left-0 w-full z-20 pb-[24px] md:pb-0 flex flex-col items-center gap-[16px] md:gap-0">

        {/* Heading */}
        <div className="px-[20px] md:px-[24px] pb-[16px] md:pb-[24px] flex justify-center">
          <h1 className="text-white font-['Manrope'] font-normal text-[24px] md:text-[36px] leading-[1.2] text-center max-w-[350px] md:max-w-[700px]">
            The Silence of the Alps, Redefined.
          </h1>
        </div>

        {/* Booking Bar (Responsive Mobile & Desktop) */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            document.getElementById("reserve")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="w-full flex justify-center px-[8px] md:px-0 animate-in fade-in slide-in-from-bottom-4 duration-500"
        >
          {/* Wrapper utama: Stack vertikal di HP (gap 8px), Bar horizontal di Desktop (gap 0) */}
          <div className="flex flex-col md:flex-row items-center md:items-stretch w-full max-w-[374px] md:max-w-max gap-[8px] md:gap-0">

            {/* Form Fields Container */}
            <div className="flex flex-col md:flex-row items-stretch w-full md:w-auto bg-[#252626]/80 md:bg-neutral-800/80 backdrop-blur-[100px] border-t border-l border-r border-white/15 border-b-0 md:border-y md:border-l md:border-r-0 md:border-white/20 rounded-t-[12px] md:rounded-none md:rounded-l-[12px] overflow-hidden">

              {/* Guests */}
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full md:w-[304px] h-[70px] md:h-[72px] px-[16px] border-b border-white/15 md:border-b-0 md:border-r md:border-white/20 cursor-pointer hover:bg-white/5 transition-colors group text-left outline-none"
                  >
                    <div className="flex items-center gap-[8px]">
                      <Users className="w-[18px] h-[18px] text-white/70 flex-shrink-0" />
                      <div className="flex flex-col justify-center items-start gap-[2px]">
                        <span className="font-['Manrope'] font-normal text-[14px] leading-[14px] text-white/70 uppercase">GUESTS</span>
                        <span className="font-['Manrope'] font-normal text-[16px] leading-[16px] text-white">
                          {getGuestsSummary()}
                        </span>
                      </div>
                    </div>
                    <ChevronDown className="w-4 h-4 text-white/70 group-hover:text-white transition-colors flex-shrink-0" />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-72 p-4 bg-[#252626] border border-white/15 text-white rounded-[12px] shadow-2xl" align="start">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="font-['Manrope'] text-[15px] font-medium text-white">Adults</span>
                        <span className="font-['Manrope'] text-[12px] text-white/60">Ages 13+</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          disabled={guests.adults <= 1}
                          onClick={() => setGuests((g) => ({ ...g, adults: g.adults - 1 }))}
                          className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white disabled:opacity-30 hover:bg-white/10 cursor-pointer"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-['Manrope'] text-[16px] min-w-[20px] text-center">{guests.adults}</span>
                        <button
                          type="button"
                          disabled={guests.adults >= 10}
                          onClick={() => setGuests((g) => ({ ...g, adults: g.adults + 1 }))}
                          className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white disabled:opacity-30 hover:bg-white/10 cursor-pointer"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="h-px bg-white/10" />
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="font-['Manrope'] text-[15px] font-medium text-white">Children</span>
                        <span className="font-['Manrope'] text-[12px] text-white/60">Ages 0-12</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          disabled={guests.children <= 0}
                          onClick={() => setGuests((g) => ({ ...g, children: g.children - 1 }))}
                          className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white disabled:opacity-30 hover:bg-white/10 cursor-pointer"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-['Manrope'] text-[16px] min-w-[20px] text-center">{guests.children}</span>
                        <button
                          type="button"
                          disabled={guests.children >= 6}
                          onClick={() => setGuests((g) => ({ ...g, children: g.children + 1 }))}
                          className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white disabled:opacity-30 hover:bg-white/10 cursor-pointer"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

              {/* Date */}
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full md:w-[304px] h-[70px] md:h-[72px] px-[16px] cursor-pointer hover:bg-white/5 transition-colors group text-left outline-none"
                  >
                    <div className="flex items-center gap-[8px]">
                      <CalendarIcon className="w-[18px] h-[19.5px] text-white/70 flex-shrink-0" />
                      <div className="flex flex-col justify-center items-start gap-[2px]">
                        <span className="font-['Manrope'] font-normal text-[14px] leading-[14px] text-white/70 uppercase">ARRIVAL & DEPARTURE</span>
                        <span className="font-['Manrope'] font-normal text-[16px] leading-[16px] text-white">
                          {getDateSummary()}
                        </span>
                      </div>
                    </div>
                    <ChevronDown className="w-4 h-4 text-white/70 group-hover:text-white transition-colors flex-shrink-0" />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 dark bg-[#252626] border border-white/15 rounded-[12px] shadow-2xl overflow-hidden" align="start">
                  <Calendar
                    mode="range"
                    selected={dateRange}
                    onSelect={setDateRange}
                    fromDate={new Date()}
                    numberOfMonths={isMobile ? 1 : 2}
                    className="p-3"
                  />
                </PopoverContent>
              </Popover>

            </div>

            {/* Request Button */}
            <button
              type="submit"
              className="flex items-center justify-center w-full md:w-[240px] h-[48px] md:h-[72px] bg-[#A49781] hover:bg-[#928672] text-white border border-white/10 md:border-l-0 py-[12px] px-[32px] font-['Manrope'] font-normal tracking-widest text-[16px] transition-colors uppercase rounded-b-[12px] md:rounded-none md:rounded-r-[12px] cursor-pointer"
            >
              REQUEST
            </button>

          </div>
        </form>

      </div>
    </section>
  );
}