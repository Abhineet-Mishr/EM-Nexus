import { ExternalLink } from "lucide-react";
const FOOTER = {
  builtByLogo: "https://res.cloudinary.com/dzxvmdsew/image/upload/v1781931516/TMAL_Logo_ukeohc.jpg",
  builtByLink: "https://themahendra.in",

  aiimsLogo: "https://res.cloudinary.com/dzxvmdsew/image/upload/v1781933147/All_India_Institute_of_Medical_Sciences__Delhi_czhtvb.png",
  aiimsLink: "https://aiims.edu",
};

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white py-16">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left: Built By */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-white/60 mb-6">Built By</h4>
            <a 
              href={FOOTER.builtByLink}
               target="_blank"
               rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-200"
            >
              <img
                   src={FOOTER.builtByLogo}
                   alt="Built By"
                   className="h-16 w-auto object-contain"
                />
              <div className="flex-1">
                <div className="text-white font-medium mb-1">Organization Name</div>
                <div className="text-sm text-white/60 group-hover:text-white/80 transition-colors flex items-center gap-1">
                  Visit Website
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </a>
          </div>

          {/* Center: EM Nexus Info */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">EM Nexus</h3>
            <p className="text-white/60 mb-6">Emergency Medicine Knowledge Hub</p>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          {/* Right: In Association With */}
          <div className="text-right">
            <h4 className="text-sm uppercase tracking-wider text-white/60 mb-6">In Association With</h4>
            <a 
              href={FOOTER.aiimsLink}
               target="_blank"
               rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-200"
            >
              <img
           src={FOOTER.aiimsLogo}
           alt="AIIMS"
           className="h-16 w-auto object-contain"
           />
              
              <div className="w-16 h-16 bg-gradient-to-br from-[#DC2626] to-[#1E40AF] rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-xs">AIIMS</span>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 text-center text-sm text-white/40">
          <p>© 2026 EM Nexus. All rights reserved. Emergency Medicine Knowledge Hub.</p>
        </div>
      </div>
    </footer>
  );
}
