import { useState } from "react";
import logoSvg from "../../assets/logoipsum.svg";
import alpinLogo from "../../assets/Logo.svg";

// Copy to clipboard icon
const CopyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
);

// Social icons
const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#3a3a3a" />
  </svg>
);
const WhatsappIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

// Contact info row with copy button
function ContactRow({ icon, value }: { icon: React.ReactNode; value: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div className="flex flex-row items-center justify-between gap-[12px] px-[16px] h-[48px] bg-white/5 border border-white/10 rounded-[4px]">
      <div className="flex flex-row items-center gap-[10px]">
        <span className="text-white/60">{icon}</span>
        <span className="font-['Manrope'] text-[14px] text-white" style={{ color: '#FFFFFF' }}>{value}</span>
      </div>
      <button
        onClick={handleCopy}
        className="text-white/50 hover:text-white transition-colors cursor-pointer flex-none"
        title="Copy"
      >
        {copied ? <span className="text-[11px]">✓</span> : <CopyIcon />}
      </button>
    </div>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="w-full max-w-[1440px] mx-auto bg-[#2D2D2D]">
      {/* Tag footer sekarang mengunci background di 1440px dan rata tengah */}

      {/* Bagian Atas Footer */}
      <div className="w-full px-[24px] py-[54px] flex flex-row flex-wrap items-start justify-between gap-[40px]">

        {/* Col 1: Logo + Address */}
        <div className="flex flex-col gap-[32px] flex-none">
          <img src={logoSvg} alt="Logoipsum" style={{ width: "224px", height: "100px" }} />
          <div className="flex flex-col gap-[4px]">
            <p className="font-['Manrope'] text-[14px] text-white/60 leading-[1.5]">San Valentino,</p>
            <p className="font-['Manrope'] text-[14px] text-white/60 leading-[1.5]">South Tyrol, Italy.</p>
          </div>
        </div>

        {/* Col 2: Links */}
        <div className="flex flex-col gap-[20px] w-[128px]">
          <p className="font-['Montserrat'] text-[16px] font-medium text-white leading-[1.5]">Links</p>
          <nav className="flex flex-col gap-[20px]">
            {["Home", "Rooms", "Amenities", "Gallery"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-['Montserrat'] text-[16px] font-normal text-white/80 hover:text-white transition-colors leading-[1.5]"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Col 3: Legals */}
        <div className="flex flex-col gap-[20px] w-[128px]">
          <p className="font-['Montserrat'] text-[16px] font-medium text-white leading-[1.5]">Legals</p>
          <nav className="flex flex-col gap-[20px]">
            {["Imprint", "Data Protection", "Privacy Settings", "Sitemap"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-['Montserrat'] text-[16px] font-normal text-white/80 hover:text-white transition-colors leading-[1.5]"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Col 4: Contact */}
        <div className="flex flex-col gap-[20px] w-full md:w-[260px] flex-none">
          <p className="font-['Manrope'] text-[14px] font-semibold text-white">Contact</p>
          <div className="flex flex-col gap-[10px]">
            <ContactRow icon={<PhoneIcon />} value="+43 123456789" />
            <ContactRow icon={<MailIcon />} value="info@hotel.com" />
          </div>
          {/* Social icons */}
          <div className="flex flex-row gap-[8px]">
            {[
              { icon: <YoutubeIcon />, label: "YouTube" },
              { icon: <WhatsappIcon />, label: "WhatsApp" },
              { icon: <InstagramIcon />, label: "Instagram" },
              { icon: <FacebookIcon />, label: "Facebook" },
            ].map(({ icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-[40px] h-[40px] flex items-center justify-center bg-[#3A3A3A] rounded-[4px] text-white/70 hover:text-white hover:bg-[#4A4A4A] transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bagian Bawah Footer (Copyright) */}
      <div className="w-full border-t border-white/10">
        <div className="w-full px-[24px] py-[24px] flex flex-row items-center justify-between flex-wrap gap-[16px]">
          <p className="font-['Manrope'] text-[13px] text-white/50">
            © 2026 Hotel Ipsum
          </p>
          <div className="flex flex-col items-center md:items-end gap-[4px]">
            <p className="font-['Manrope'] text-[11px] text-white/40">Design and Code by</p>
            <div className="flex flex-row items-center gap-[6px]">
              <img src={alpinLogo} alt="Alpin Ads" className="h-[20px] w-auto" />
              <span className="font-['Manrope'] text-[16px] font-extrabold text-white tracking-[0.05em] uppercase">
                ALPIN ADS
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}