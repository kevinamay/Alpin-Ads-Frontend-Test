import { useState } from 'react';
import { Users, Calendar, ChevronDown, ArrowLeft, ArrowRight } from 'lucide-react';
import HeroBg from '../../assets/Background.png';
import Logo from '../../assets/logoipsum.svg';
import { GalleryPopup } from './GalleryPopup';

export function HeroSection() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  return (
    <>
    <section className="relative w-full max-w-[1440px] mx-auto h-[1024px] overflow-hidden font-sans">
      {/* Background Image with Overlays */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HeroBg})` }}
      />
      {/* Gradient overlays to darken top and bottom for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full h-[124px] z-20 flex items-center justify-between px-[24px] text-white">
        {/* Logo */}
        <div className="flex-1 flex items-center justify-start h-[124px] py-[12px] gap-[10px]">
          <img src={Logo} alt="Logo" className="w-[224px] h-[100px] opacity-100 rotate-0 object-contain" />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex flex-1 items-center justify-center h-[46px] pb-[24px] gap-[24px] font-['Manrope'] font-normal text-[16px] leading-none tracking-[0.05em] uppercase text-[#fefefe]">
          <a href="#rooms" className="hover:text-gray-300 transition-colors">ROOMS</a>
          <a href="#amenities" className="hover:text-gray-300 transition-colors">AMENITIES</a>
          <a href="#reserve" className="hover:text-gray-300 transition-colors">RESERVE</a>
        </div>

        {/* Book Now Button */}
        <div className="flex-1 flex items-center justify-end h-[72px] pb-[24px] gap-[12px]">
          <button className="flex items-center justify-center whitespace-nowrap w-fit h-[48px] py-[12px] px-[32px] gap-[10px] bg-black/15 border border-white/20 backdrop-blur-[20px] rounded-[8px] hover:bg-black/25 transition-colors font-['Manrope'] font-normal text-[16px] leading-[1.5] tracking-[0.05em] uppercase text-white">
            BOOK NOW
          </button>
        </div>
      </nav>

      {/* Pagination Container */}
      <div className="absolute top-[492px] left-0 w-full h-[40px] z-20 flex items-center justify-between px-[24px]">
        <button className="flex items-center justify-center w-[40px] h-[40px] bg-black/20 backdrop-blur-[111.11px] transition-colors text-white cursor-pointer hover:bg-black/40">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button className="flex items-center justify-center w-[40px] h-[40px] bg-black/20 backdrop-blur-[111.11px] transition-colors text-white cursor-pointer hover:bg-black/40">
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Booking Form Position */}
      <div className="absolute top-[865px] left-0 w-full h-[159px] z-20 flex justify-center px-[24px]">
        {/* container-padding-bottom */}
        <div className="w-full max-w-[986px] h-full flex flex-col items-center justify-between">
          {/* text-right (Main Heading Container) */}
          <div className="flex flex-col w-full pb-[24px] gap-[20px]">
            <h1 className="text-white font-['Manrope'] font-normal text-[36px] leading-[1.2] text-center">
              The Silence of the Alps, Redefined.
            </h1>
          </div>

          {/* Booking Bar */}
          <div className="flex flex-col md:flex-row items-stretch bg-neutral-800/80 backdrop-blur-[100px] rounded-[8px] overflow-hidden w-full md:w-fit h-auto md:h-[72px] gap-[12px]">

          {/* gaste-container (Guests Input) */}
          <div className="flex items-center justify-center w-[304px] h-[62px] my-auto py-[12px] px-[16px] border-r border-white/20 cursor-pointer hover:bg-white/5 transition-colors group">
            {/* gaste-field */}
            <div className="flex items-center justify-between w-[272px] h-[38px]">
              <div className="flex items-center gap-[8px]">
                <Users className="w-6 h-6 text-gray-300 flex-shrink-0" />
                <div className="flex flex-col justify-center leading-tight">
                  <p className="text-[10px] text-gray-400 tracking-widest uppercase mb-1">Guests</p>
                  <p className="text-white text-sm">Number of Guests</p>
                </div>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors flex-shrink-0" />
            </div>
          </div>

          {/* date-container (Arrival & Departure Input) */}
          <div className="flex items-center justify-center w-[304px] h-[62px] my-auto py-[12px] px-[16px] cursor-pointer hover:bg-white/5 transition-colors group">
            {/* date-field */}
            <div className="flex items-center justify-between w-[272px] h-[38px]">
              <div className="flex items-center gap-[8px]">
                <Calendar className="w-6 h-6 text-gray-300 flex-shrink-0" />
                <div className="flex flex-col justify-center leading-tight">
                  <p className="text-[10px] text-gray-400 tracking-widest uppercase mb-1">ARRIVAL & DEPARTURE</p>
                  <p className="text-white text-sm">Select Date</p>
                </div>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors flex-shrink-0" />
            </div>
          </div>

          {/* Request Button */}
          <button className="flex items-center justify-center w-full md:w-[240px] h-[60px] md:h-[72px] bg-[#A49781] hover:bg-[#928672] text-white border border-white/10 py-[12px] px-[32px] font-medium tracking-widest text-sm transition-colors">
            REQUEST
          </button>
        </div>
        </div>
      </div>
      {/* SEE ALL PHOTOS button — bottom right corner */}
      <div className="absolute bottom-[168px] right-[24px] z-20">
        <button
          onClick={() => setGalleryOpen(true)}
          className="flex items-center gap-[8px] px-[16px] py-[10px] bg-black/30 border border-white/30 backdrop-blur-[20px] rounded-[6px] text-white font-['Manrope'] text-[12px] tracking-[0.08em] uppercase hover:bg-black/50 transition-colors cursor-pointer"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2"/><path d="m21 15-5-5L5 21"/><circle cx="8.5" cy="8.5" r="1.5"/>
          </svg>
          See All Photos
        </button>
      </div>
    </section>

      {/* Gallery Popup */}
      <GalleryPopup isOpen={galleryOpen} onClose={() => setGalleryOpen(false)} />
    </>
  );
}
