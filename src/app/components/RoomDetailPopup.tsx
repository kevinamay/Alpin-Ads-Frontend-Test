import { useState, useRef, useEffect, type ReactElement } from "react";

// Icons
const ArrowLeftIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
);
const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
);
const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
);
const SizeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" /></svg>
);
const GuestsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
);
const BedIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4v16" /><path d="M2 8h18a2 2 0 0 1 2 2v10" /><path d="M2 17h20" /><path d="M6 8v9" /></svg>
);
const PriceIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" x2="7.01" y1="7" y2="7" /></svg>
);
const BathtubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" /><line x1="10" x2="8" y1="5" y2="7" /><line x1="2" x2="22" y1="12" y2="12" /><line x1="7" x2="7" y1="19" y2="21" /><line x1="17" x2="17" y1="19" y2="21" /></svg>
);
const WifiIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><line x1="12" x2="12.01" y1="20" y2="20" /></svg>
);
const MiniBarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1" /><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" /><line x1="6" x2="6" y1="2" y2="4" /><line x1="10" x2="10" y1="2" y2="4" /><line x1="14" x2="14" y1="2" y2="4" /></svg>
);
const CheckCircleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9C8E7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
);

export interface RoomPopupData {
  name: string;
  images: string[];
  size: string;
  bedType: string;
  capacity: string;
  price: string;
  description: string;
  amenities: string[];
  services: string[];
}

interface RoomDetailPopupProps {
  isOpen: boolean;
  onClose: () => void;
  room: RoomPopupData | null;
}

// Snap points in vh (distance from bottom → 0 = full screen, 42 = half)
const SNAP_FULL = 0;
const SNAP_HALF = 42;

export function RoomDetailPopup({ isOpen, onClose, room }: RoomDetailPopupProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [snap, setSnap] = useState(SNAP_HALF);
  const [liveTranslate, setLiveTranslate] = useState(SNAP_HALF);
  const [dragging, setDragging] = useState(false);
  const touchY0 = useRef(0);
  const snapY0 = useRef(SNAP_HALF);
  const dragHandleRef = useRef<HTMLDivElement>(null);

  // Reset to half when popup opens
  useEffect(() => {
    if (isOpen) {
      setSnap(SNAP_HALF);
      setLiveTranslate(SNAP_HALF);
      setCurrentSlide(0);
    }
  }, [isOpen]);

  if (!isOpen || !room) return null;

  const prevSlide = () => setCurrentSlide((p) => (p - 1 + room.images.length) % room.images.length);
  const nextSlide = () => setCurrentSlide((p) => (p + 1) % room.images.length);

  const amenityIcons: Record<string, ReactElement> = {
    "Bathtub": <BathtubIcon />,
    "Wifi": <WifiIcon />,
    "Mini Bar": <MiniBarIcon />,
  };

  // ─── Touch handlers (attached imperatively to avoid passive listener warning) ───
  const handleTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation();
    touchY0.current = e.touches[0].clientY;
    snapY0.current = snap;
    setDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!dragging) return;
    const dy = e.touches[0].clientY - touchY0.current;
    // dy positive = finger moved DOWN → sheet moves down (higher translateY %)
    const deltaPercent = (dy / window.innerHeight) * 100;
    const next = Math.max(0, Math.min(55, snapY0.current + deltaPercent));
    setLiveTranslate(next);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const dy = e.changedTouches[0].clientY - touchY0.current;
    setDragging(false);

    if (snapY0.current === SNAP_HALF) {
      if (dy < -50) {
        // Dragged up → expand full
        setSnap(SNAP_FULL);
        setLiveTranslate(SNAP_FULL);
      } else if (dy > 60) {
        // Dragged down → close
        setLiveTranslate(100);
        setTimeout(onClose, 320);
      } else {
        setLiveTranslate(SNAP_HALF);
      }
    } else {
      // was full
      if (dy > 60) {
        // Dragged down → go half
        setSnap(SNAP_HALF);
        setLiveTranslate(SNAP_HALF);
      } else {
        setLiveTranslate(SNAP_FULL);
      }
    }
  };

  const sheetStyle: React.CSSProperties = {
    transform: `translateY(${liveTranslate}%)`,
    transition: dragging ? "none" : "transform 0.38s cubic-bezier(0.32,0.72,0,1)",
    height: "100dvh",
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50"
      onClick={onClose}
    >
      {/* ===== MOBILE: Draggable bottom sheet ===== */}
      <div
        className="flex md:hidden flex-col w-full bg-white rounded-t-[20px] fixed bottom-0 left-0 right-0 overflow-hidden"
        style={sheetStyle}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ──── Drag handle (touch zone) ──── */}
        <div
          ref={dragHandleRef}
          className="flex flex-col items-center w-full pt-[10px] pb-[6px] flex-none cursor-grab active:cursor-grabbing touch-none select-none z-10 bg-white"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          // Also allow mouse drag for desktop testing
          onMouseDown={(e) => { touchY0.current = e.clientY; snapY0.current = snap; setDragging(true); }}
          onMouseMove={(e) => {
            if (!dragging) return;
            const dy = e.clientY - touchY0.current;
            const next = Math.max(0, Math.min(55, snapY0.current + (dy / window.innerHeight) * 100));
            setLiveTranslate(next);
          }}
          onMouseUp={(e) => {
            const dy = e.clientY - touchY0.current;
            setDragging(false);
            if (snapY0.current === SNAP_HALF) {
              if (dy < -50) { setSnap(SNAP_FULL); setLiveTranslate(SNAP_FULL); }
              else if (dy > 60) { setLiveTranslate(100); setTimeout(onClose, 320); }
              else setLiveTranslate(SNAP_HALF);
            } else {
              if (dy > 60) { setSnap(SNAP_HALF); setLiveTranslate(SNAP_HALF); }
              else setLiveTranslate(SNAP_FULL);
            }
          }}
        >
          <div className="w-[44px] h-[5px] rounded-full bg-[#DEDEDE] mb-[2px]" />
          {/* Tap handle to toggle */}
          <button
            className="text-[11px] text-[#AAAAAA] mt-[2px] cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              if (snap === SNAP_HALF) { setSnap(SNAP_FULL); setLiveTranslate(SNAP_FULL); }
              else { setSnap(SNAP_HALF); setLiveTranslate(SNAP_HALF); }
            }}
          >
            {snap === SNAP_HALF ? "▲ View details" : "▼ Collapse"}
          </button>
        </div>

        {/* Photo carousel */}
        <div className="relative w-full flex-none bg-black overflow-hidden" style={{ height: "240px" }}>
          <img src={room.images[currentSlide]} alt={room.name} className="w-full h-full object-cover" />
          <button onClick={prevSlide} className="absolute left-[12px] top-1/2 -translate-y-1/2 w-[36px] h-[36px] flex items-center justify-center bg-white/80 hover:bg-white rounded-full transition-colors text-[#323232]">
            <ArrowLeftIcon />
          </button>
          <button onClick={nextSlide} className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[36px] h-[36px] flex items-center justify-center bg-white/80 hover:bg-white rounded-full transition-colors text-[#323232]">
            <ArrowRightIcon />
          </button>
          <div className="absolute bottom-[12px] left-1/2 -translate-x-1/2 flex flex-row gap-[8px]">
            {room.images.map((_, i) => (
              <button key={i} onClick={() => setCurrentSlide(i)} className={`w-[8px] h-[8px] rounded-full transition-colors ${i === currentSlide ? "bg-white" : "bg-white/40"}`} />
            ))}
          </div>
        </div>

        {/* Scrollable content */}
        <div className="flex flex-col overflow-y-auto p-[20px] gap-[16px] flex-1">
          <h2 className="font-['Manrope'] text-[22px] font-normal text-[#323232] leading-[1.3]">{room.name}</h2>
          <hr className="border-[#E5E5E5]" />
          <div className="flex flex-col gap-[12px]">
            {[
              { icon: <SizeIcon />, val: room.size },
              { icon: <GuestsIcon />, val: room.capacity },
              { icon: <BedIcon />, val: room.bedType },
              { icon: <PriceIcon />, val: room.price },
            ].map(({ icon, val }) => (
              <div key={val} className="flex flex-row items-center gap-[8px]">
                <span className="text-[#666666]">{icon}</span>
                <span className="font-['Manrope'] text-[14px] text-[#323232]">{val}</span>
              </div>
            ))}
          </div>
          <p className="font-['Manrope'] text-[13px] text-[#555555] leading-[1.7]">{room.description}</p>
          <div className="flex flex-col gap-[8px]">
            <p className="font-['Manrope'] text-[13px] font-medium text-[#323232]">Amenities:</p>
            {room.amenities.map((a) => (
              <div key={a} className="flex flex-row items-center gap-[6px] text-[#666666]">
                {amenityIcons[a] ?? <WifiIcon />}
                <span className="font-['Manrope'] text-[13px] text-[#323232]">{a}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-[8px]">
            <p className="font-['Manrope'] text-[13px] font-medium text-[#323232]">Included services:</p>
            {room.services.map((s, i) => (
              <div key={i} className="flex flex-row items-start gap-[8px]">
                <span className="flex-none mt-[1px]"><CheckCircleIcon /></span>
                <span className="font-['Manrope'] text-[13px] text-[#555555] leading-[1.5]">{s}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-row gap-[12px] pt-[4px] pb-[16px]">
            <button onClick={onClose} className="flex-1 h-[48px] flex items-center justify-center border border-[#323232]/30 rounded-[4px] font-['Manrope'] text-[12px] font-medium text-[#323232] uppercase tracking-[0.1em] hover:bg-black/5 transition-colors cursor-pointer">Close</button>
            <button className="flex-1 h-[48px] flex items-center justify-center bg-[#9C8E7A] hover:bg-[#8a7c69] rounded-[4px] font-['Manrope'] text-[12px] font-medium text-white uppercase tracking-[0.1em] transition-colors cursor-pointer">Reserve This Suite</button>
          </div>
        </div>
      </div>

      {/* ===== DESKTOP: Side-by-side modal ===== */}
      <div
        className="hidden md:flex items-center justify-center w-full h-full px-[24px]"
        onClick={onClose}
      >
        <div
          className="relative bg-white rounded-[12px] overflow-hidden flex flex-row w-full max-w-[980px] max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={onClose} className="absolute top-[16px] right-[16px] z-10 w-[36px] h-[36px] flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-md transition-colors text-[#323232] cursor-pointer">
            <CloseIcon />
          </button>
          <div className="relative w-[52%] flex-none bg-black">
            <img src={room.images[currentSlide]} alt={room.name} className="w-full h-full object-cover" />
            <button onClick={prevSlide} className="absolute left-[16px] top-1/2 -translate-y-1/2 w-[40px] h-[40px] flex items-center justify-center bg-white/80 hover:bg-white rounded-full transition-colors text-[#323232]"><ArrowLeftIcon /></button>
            <button onClick={nextSlide} className="absolute right-[16px] top-1/2 -translate-y-1/2 w-[40px] h-[40px] flex items-center justify-center bg-white/80 hover:bg-white rounded-full transition-colors text-[#323232]"><ArrowRightIcon /></button>
            <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 flex flex-row gap-[8px]">
              {room.images.map((_, i) => (<button key={i} onClick={() => setCurrentSlide(i)} className={`w-[8px] h-[8px] rounded-full transition-colors ${i === currentSlide ? "bg-white" : "bg-white/40"}`} />))}
            </div>
          </div>
          <div className="flex flex-col flex-1 overflow-y-auto p-[32px] gap-[20px]">
            <h2 className="font-['Manrope'] text-[24px] font-normal text-[#323232] leading-[1.3]">{room.name}</h2>
            <hr className="border-[#E5E5E5]" />
            <div className="grid grid-cols-2 gap-y-[12px] gap-x-[16px]">
              {[{ icon: <SizeIcon />, val: room.size }, { icon: <BedIcon />, val: room.bedType }, { icon: <GuestsIcon />, val: room.capacity }, { icon: <PriceIcon />, val: room.price }].map(({ icon, val }) => (
                <div key={val} className="flex flex-row items-center gap-[8px]"><span className="text-[#666666]">{icon}</span><span className="font-['Manrope'] text-[14px] text-[#323232]">{val}</span></div>
              ))}
            </div>
            <p className="font-['Manrope'] text-[13px] text-[#555555] leading-[1.7]">{room.description}</p>
            <div className="flex flex-col gap-[10px]">
              <p className="font-['Manrope'] text-[13px] font-medium text-[#323232]">Amenities:</p>
              <div className="flex flex-row gap-[24px]">
                {room.amenities.map((a) => (<div key={a} className="flex flex-row items-center gap-[6px] text-[#666666]">{amenityIcons[a] ?? <WifiIcon />}<span className="font-['Manrope'] text-[13px] text-[#323232]">{a}</span></div>))}
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className="font-['Manrope'] text-[13px] font-medium text-[#323232]">Included services:</p>
              <div className="flex flex-col gap-[8px]">
                {room.services.map((s, i) => (<div key={i} className="flex flex-row items-start gap-[8px]"><span className="flex-none mt-[1px]"><CheckCircleIcon /></span><span className="font-['Manrope'] text-[13px] text-[#555555] leading-[1.5]">{s}</span></div>))}
              </div>
            </div>
            <div className="flex flex-row gap-[12px] mt-auto pt-[8px]">
              <button onClick={onClose} className="flex-1 h-[48px] flex items-center justify-center border border-[#323232]/30 rounded-[4px] font-['Manrope'] text-[12px] font-medium text-[#323232] uppercase tracking-[0.1em] hover:bg-black/5 transition-colors cursor-pointer">Close</button>
              <button className="flex-1 h-[48px] flex items-center justify-center bg-[#9C8E7A] hover:bg-[#8a7c69] rounded-[4px] font-['Manrope'] text-[12px] font-medium text-white uppercase tracking-[0.1em] transition-colors cursor-pointer">Reserve This Suite</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
