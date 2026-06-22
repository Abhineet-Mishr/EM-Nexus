import { ExternalLink } from "lucide-react";
const LOGOS = {
  logo1: "https://res.cloudinary.com/dzxvmdsew/image/upload/v1781931516/TMAL_Logo_ukeohc.jpg",
  logo1Link: "https://themahendra.in",

  logo2: "https://res.cloudinary.com/dzxvmdsew/image/upload/v1781933147/All_India_Institute_of_Medical_Sciences__Delhi_czhtvb.png",
  logo2Link: "https://aiims.edu",

  logo3: "https://res.cloudinary.com/dzxvmdsew/image/upload/v1782158259/SYNAPSE_Lab_logo01_yctcp1.png",
  logo3Link: "https://synapse.abhionics.com",
};

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E2E8F0] h-[88px]">
      <div className="max-w-[1280px] mx-auto px-8 h-full flex items-center justify-between">
        {/* Left: Logo Placeholder 1 */}
        <a
          href={LOGOS.logo1Link}
              target="_blank"
              rel="noopener noreferrer"
          className="group flex items-center gap-2 px-6 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl hover:shadow-md transition-all duration-200"
        >
          <img
               src={LOGOS.logo1}
               alt="Logo 1"
               className="h-12 w-auto object-contain"
           />
          <ExternalLink className="w-4 h-4 text-[#0F172A] opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>

        {/* Center: Brand */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#0F172A] tracking-tight">EM Nexus</h1>
          <p className="text-sm text-[#1E40AF] mt-0.5">Emergency Medicine Knowledge Hub</p>
        </div>

        {/* Right: Logo Placeholders 2 & 3 */}
        <div className="flex items-center gap-3">
          <a
           href={LOGOS.logo2Link}
              target="_blank"
              rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl hover:shadow-md transition-all duration-200"
          >
           <img
               src={LOGOS.logo2}
               alt="Logo 2"
               className="h-12 w-auto object-contain"
           />
            <ExternalLink className="w-4 h-4 text-[#0F172A] opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href={LOGOS.logo3Link}
              target="_blank"
              rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl hover:shadow-md transition-all duration-200"
          >
             <img
               src={LOGOS.logo3}
               alt="Logo 3"
               className="h-12 w-auto object-contain"
           />
            <ExternalLink className="w-4 h-4 text-[#0F172A] opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </header>
  );
}
