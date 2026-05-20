import { useState } from 'react';
import { Users, Calendar, ChevronDown, ArrowLeft, ArrowRight } from 'lucide-react';

// Import ketiga gambar untuk slider
import HeroBg1 from '../../assets/Background.png';
import HeroBg2 from '../../assets/Andergassen-Druck-1101 1 (2).png';
import HeroBg3 from '../../assets/photo-1683962808565-9c7fb094d183.avif';
import Logo from '../../assets/logoipsum.svg';

export function HeroSection() {
  // State untuk melacak index gambar yang sedang aktif
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [HeroBg1, HeroBg2, HeroBg3];

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
        <div className="w-full flex justify-center px-[8px] md:px-0">
          {/* Wrapper utama: Stack vertikal di HP (gap 8px), Bar horizontal di Desktop (gap 0) */}
          <div className="flex flex-col md:flex-row items-center md:items-stretch w-full max-w-[374px] md:max-w-max gap-[8px] md:gap-0">

            {/* Form Fields Container */}
            <div className="flex flex-col md:flex-row items-stretch w-full md:w-auto bg-[#252626]/80 md:bg-neutral-800/80 backdrop-blur-[100px] border-t border-l border-r border-white/15 border-b-0 md:border-y md:border-l md:border-r-0 md:border-white/20 rounded-t-[12px] md:rounded-none md:rounded-l-[12px] overflow-hidden">

              {/* Guests */}
              <div className="flex items-center justify-between w-full md:w-[304px] h-[70px] md:h-[72px] px-[16px] border-b border-white/15 md:border-b-0 md:border-r md:border-white/20 cursor-pointer hover:bg-white/5 transition-colors group">
                <div className="flex items-center gap-[8px]">
                  <Users className="w-[18px] h-[18px] text-white/70 flex-shrink-0" />
                  <div className="flex flex-col justify-center items-start gap-[2px]">
                    <span className="font-['Manrope'] font-normal text-[14px] leading-[14px] text-white/70 uppercase">GUESTS</span>
                    <span className="font-['Manrope'] font-normal text-[16px] leading-[16px] text-white">Number of guests</span>
                  </div>
                </div>
                <ChevronDown className="w-4 h-4 text-white/70 group-hover:text-white transition-colors flex-shrink-0" />
              </div>

              {/* Date */}
              <div className="flex items-center justify-between w-full md:w-[304px] h-[70px] md:h-[72px] px-[16px] cursor-pointer hover:bg-white/5 transition-colors group">
                <div className="flex items-center gap-[8px]">
                  <Calendar className="w-[18px] h-[19.5px] text-white/70 flex-shrink-0" />
                  <div className="flex flex-col justify-center items-start gap-[2px]">
                    <span className="font-['Manrope'] font-normal text-[14px] leading-[14px] text-white/70 uppercase">ARRIVAL & DEPARTURE</span>
                    <span className="font-['Manrope'] font-normal text-[16px] leading-[16px] text-white">Select date</span>
                  </div>
                </div>
                <ChevronDown className="w-4 h-4 text-white/70 group-hover:text-white transition-colors flex-shrink-0" />
              </div>

            </div>

            {/* Request Button */}
            <button className="flex items-center justify-center w-full md:w-[240px] h-[48px] md:h-[72px] bg-[#A49781] hover:bg-[#928672] text-white border border-white/10 md:border-l-0 py-[12px] px-[32px] font-['Manrope'] font-normal tracking-widest text-[16px] transition-colors uppercase rounded-b-[12px] md:rounded-none md:rounded-r-[12px]">
              REQUEST
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}