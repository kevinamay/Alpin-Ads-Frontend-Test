import { useState } from "react";
import { toast } from "sonner";
import bgImage from "../../assets/photo-1683962808565-9c7fb094d183.avif";

// SVG Icons (inline to avoid dependency issues)
const UserIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>
);
const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const CalendarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);
const GuestsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const BedIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 4v16" /><path d="M2 8h18a2 2 0 0 1 2 2v10" /><path d="M2 17h20" /><path d="M6 8v9" />
  </svg>
);
const ChevronDownIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
);
const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// Reusable input field with left icon
function FormField({ icon, placeholder, type = "text" }: { icon: React.ReactNode; placeholder: string; type?: string }) {
  return (
    <div className="flex flex-row items-center gap-[12px] px-[16px] h-[56px] bg-[#FAFAFA] border border-[#323232]/10 rounded-[8px] w-full">
      <span className="text-[#323232]/50 flex-none">{icon}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="flex-1 bg-transparent outline-none border-none font-['Manrope'] text-[16px] text-[#323232] leading-[1.5] placeholder:text-[#323232] placeholder:opacity-50"
        style={{ letterSpacing: "-0.01em" }}
      />
    </div>
  );
}

// Checkbox item
function CheckboxField({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <button
      type="button"
      onClick={onChange}
      className="flex flex-row items-center gap-[12px] px-[16px] h-[56px] bg-[#FAFAFA] border border-[#323232]/10 rounded-[8px] w-full text-left"
    >
      <div className={`w-[18px] h-[18px] border rounded-[3px] flex items-center justify-center flex-none transition-colors ${checked ? "bg-[#323232] border-[#323232]" : "border-[#CCCCCC] bg-white"}`}>
        {checked && <span className="text-white"><CheckIcon /></span>}
      </div>
      <span
        className="font-['Manrope'] text-[16px] font-normal text-[#323232] leading-[1.5]"
        style={{ letterSpacing: "-0.01em" }}
      >{label}</span>
    </button>
  );
}

export function Reserve() {
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

  const toggleExtra = (extra: string) => {
    setSelectedExtras((prev) =>
      prev.includes(extra) ? prev.filter((e) => e !== extra) : [...prev, extra]
    );
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Request received — our concierge will be in touch within 24 hours.");
  };

  return (
    // PERUBAHAN UTAMA: Menambahkan `max-w-[1440px] mx-auto` agar sejajar dengan Hero Section.
    // Menghapus px-[40px] karena akan membatasi background, kita pindahkan ke container form di bawah
    <section
      id="reserve"
      className="w-full max-w-[1440px] mx-auto relative flex flex-col items-center justify-center py-[60px] md:py-[120px]"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content Container - Menambahkan px-[24px] agar padding kiri kanan sama persis dengan Hero */}
      <div className="relative z-10 w-full max-w-[880px] px-[16px] md:px-[24px] flex flex-col items-center gap-[40px]">
        {/* container-text: w-full, px-40px, items-center */}
        <div className="w-full flex flex-col items-center px-[0px] md:px-[40px] gap-[12px]">

          {/* container-title: Fill × Hug(104px), gap 8px — Badge + Heading */}
          <div className="flex flex-col items-center gap-[8px]">

            {/* Badge: Horizontal, 130×40px, py-8px, gap-6px, Stripe=true */}
            <div className="flex flex-row items-center gap-[6px] py-[8px]">
              <span className="font-['Manrope'] text-[14px] text-white/80">-</span>
              <span className="font-['Manrope'] text-[14px] text-white/80 tracking-widest">Plan Your Stay</span>
              <span className="font-['Manrope'] text-[14px] text-white/80">-</span>
            </div>

            {/* Title: 40px, line-height 140%, #FFFFFF */}
            <h2 className="font-['Manrope'] text-[40px] font-normal text-white leading-[1.4] text-center">
              Request a Personal Quote
            </h2>
          </div>

          {/* Subtitle: 16px, line-height 150%, #FFFFFF */}
          <p className="font-['Manrope'] text-[16px] font-normal text-white text-center leading-[1.5]">
            Fill out the form below, and our team will get back to you within 24 hours with a non-binding offer tailored to your needs.
          </p>
        </div>

        {/* form-card: Fixed 880px, radius 8px, padding 20px, gap 32px */}
        <form
          onSubmit={onSubmit}
          className="w-full bg-white rounded-[8px] p-[20px] flex flex-col gap-[32px]"
        >
          {/* === YOUR DETAILS === */}
          <div className="flex flex-col gap-[16px]">
            <p className="font-['Manrope'] text-[16px] font-normal text-[#323232] leading-[1.4]">
              Your Details
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px]">
              <FormField icon={<UserIcon />} placeholder="First Name" />
              <FormField icon={<UserIcon />} placeholder="Last Name" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px]">
              <FormField icon={<MailIcon />} placeholder="Email Address" type="email" />
              <FormField icon={<PhoneIcon />} placeholder="Phone Number" type="tel" />
            </div>
          </div>

          {/* === STAY === */}
          <div className="flex flex-col gap-[16px]">
            <p className="font-['Manrope'] text-[16px] font-normal text-[#323232] leading-[1.4]">
              Stay
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px]">
              <FormField icon={<CalendarIcon />} placeholder="Arrival & Departure" />
              <FormField icon={<GuestsIcon />} placeholder="Guests" />
            </div>
            {/* Select Room */}
            <div className="flex flex-row items-center gap-[12px] px-[16px] h-[56px] bg-[#FAFAFA] border border-[#323232]/10 rounded-[8px] w-full">
              <span className="text-[#999999] flex-none"><BedIcon /></span>
              <select className="flex-1 bg-transparent outline-none border-none font-['Manrope'] text-[14px] text-[#999999] appearance-none cursor-pointer">
                <option value="" disabled selected>Select Room</option>
                <option value="garden">Garden Suite</option>
                <option value="sea">Sea View Suite</option>
                <option value="villa">Cliffside Villa</option>
                <option value="deluxe">Deluxe Room</option>
              </select>
              <span className="text-[#999999] flex-none"><ChevronDownIcon /></span>
            </div>
          </div>

          {/* === ADD-ONS === */}
          <div className="flex flex-col gap-[12px]">
            <p className="font-['Manrope'] text-[16px] font-normal text-[#323232] leading-[1.4]">
              Your Details
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px]">
              <CheckboxField
                label="Airport Transfer"
                checked={selectedExtras.includes("Airport Transfer")}
                onChange={() => toggleExtra("Airport Transfer")}
              />
              <CheckboxField
                label="Spa package"
                checked={selectedExtras.includes("Spa package")}
                onChange={() => toggleExtra("Spa package")}
              />
              <CheckboxField
                label="Private dinning"
                checked={selectedExtras.includes("Private dinning")}
                onChange={() => toggleExtra("Private dinning")}
              />
              <CheckboxField
                label="Yacht excursion"
                checked={selectedExtras.includes("Yacht excursion")}
                onChange={() => toggleExtra("Yacht excursion")}
              />
            </div>
          </div>

          {/* === SPECIAL REQUESTS === */}
          <div className="flex flex-col gap-[16px]">
            <p className="font-['Manrope'] text-[16px] font-normal text-[#323232] leading-[1.4]">
              Special Requests
            </p>
            <textarea
              placeholder="Anniversary, dietary preferences, arrival time..."
              className="w-full px-[16px] py-[14px] bg-[#FAFAFA] border border-[#323232]/10 rounded-[8px] outline-none font-['Manrope'] text-[16px] text-[#323232] placeholder:text-[#323232] placeholder:opacity-50 resize-none leading-[1.5]"
              style={{ height: "175px", letterSpacing: "-0.01em" }}
            />
          </div>

          {/* === SUBMIT === */}
          <div className="flex justify-end mt-[8px]">
            <button
              type="submit"
              className="flex flex-row items-center gap-[10px] px-[32px] py-[12px] h-[48px] bg-[#A49781] hover:bg-[#8f8470] transition-colors font-['Manrope'] text-[16px] font-normal text-white uppercase tracking-[0.05em] rounded-[4px] cursor-pointer"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}