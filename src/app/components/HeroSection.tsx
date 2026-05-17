import { Users, Calendar, ChevronDown, ArrowLeft, ArrowRight } from 'lucide-react';
import HeroBg from '../../assets/Background.png';
import Logo from '../../assets/logoipsum.svg';

export function HeroSection() {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto h-[844px] md:h-[1024px] overflow-hidden font-sans">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HeroBg})` }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-20 flex items-center justify-between px-[20px] md:px-[24px] h-[72px] md:h-[124px] text-white">
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
      </nav>

      {/* Arrow buttons — centered vertically on image */}
      <div className="absolute top-[380px] md:top-[492px] left-0 w-full h-[40px] z-20 flex items-center justify-between px-[20px] md:px-[24px]">
        <button className="flex items-center justify-center w-[40px] h-[40px] bg-black/20 backdrop-blur-[111.11px] transition-colors text-white cursor-pointer hover:bg-black/40">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button className="flex items-center justify-center w-[40px] h-[40px] bg-black/20 backdrop-blur-[111.11px] transition-colors text-white cursor-pointer hover:bg-black/40">
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Booking Widget — bottom overlay */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        {/* Heading */}
        <div className="px-[20px] md:px-[24px] pb-[16px] md:pb-[24px] flex justify-center">
          <h1 className="text-white font-['Manrope'] font-normal text-[24px] md:text-[36px] leading-[1.2] text-center max-w-[350px] md:max-w-[700px]">
            The Silence of the Alps, Redefined.
          </h1>
        </div>

        {/* Booking Bar */}
        <div
          className="flex flex-col md:flex-row items-stretch bg-neutral-800/80 backdrop-blur-[100px] w-full md:w-fit md:mx-auto overflow-hidden mx-[16px] md:mx-auto md:w-auto w-[calc(100%-32px)]"
          style={{ borderRadius: '8px 8px 0 0' }}
        >

          {/* Guests */}
          <div className="flex items-center justify-between w-full md:w-[304px] h-[64px] py-[12px] px-[16px] border-b md:border-b-0 md:border-r border-white/20 cursor-pointer hover:bg-white/5 transition-colors group">
            <div className="flex items-center gap-[12px]">
              <Users className="w-6 h-6 text-gray-300 flex-shrink-0" />
              <div className="flex flex-col justify-center leading-tight">
                <p className="text-[10px] text-gray-400 tracking-widest uppercase mb-[2px]">GUESTS</p>
                <p className="text-white text-[14px]">Number of guests</p>
              </div>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors flex-shrink-0" />
          </div>

          {/* Date */}
          <div className="flex items-center justify-between w-full md:w-[304px] h-[64px] py-[12px] px-[16px] border-b md:border-b-0 cursor-pointer hover:bg-white/5 transition-colors group">
            <div className="flex items-center gap-[12px]">
              <Calendar className="w-6 h-6 text-gray-300 flex-shrink-0" />
              <div className="flex flex-col justify-center leading-tight">
                <p className="text-[10px] text-gray-400 tracking-widest uppercase mb-[2px]">ARRIVAL &amp; DEPARTURE</p>
                <p className="text-white text-[14px]">Select date</p>
              </div>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors flex-shrink-0" />
          </div>

          {/* Request Button */}
          <button className="flex items-center justify-center w-full md:w-[240px] h-[56px] md:h-[72px] bg-[#A49781] hover:bg-[#928672] text-white border border-white/10 py-[12px] px-[32px] font-['Manrope'] font-normal tracking-widest text-[14px] md:text-[16px] transition-colors uppercase">
            REQUEST
          </button>
        </div>
      </div>
    </section>
  );
}
