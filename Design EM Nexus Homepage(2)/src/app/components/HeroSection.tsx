import { FileText, BookOpen, GraduationCap } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="bg-gradient-to-b from-[#F8FAFC] to-white py-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <h1 className="text-6xl font-bold text-[#0F172A] mb-4 tracking-tight">
              EM Nexus
            </h1>
            <p className="text-xl text-[#1E40AF] mb-12">
              Emergency Medicine Knowledge Hub
            </p>

            {/* Statistics Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-lg transition-shadow duration-200">
                <FileText className="w-8 h-8 text-[#1E40AF] mb-3" />
                <div className="text-3xl font-bold text-[#0F172A] mb-1">128+</div>
                <div className="text-sm text-[#0F172A]/60">Clinical Guidelines</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-lg transition-shadow duration-200">
                <BookOpen className="w-8 h-8 text-[#0D9488] mb-3" />
                <div className="text-3xl font-bold text-[#0F172A] mb-1">350+</div>
                <div className="text-sm text-[#0F172A]/60">Research Papers</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-lg transition-shadow duration-200">
                <GraduationCap className="w-8 h-8 text-[#1E40AF] mb-3" />
                <div className="text-3xl font-bold text-[#0F172A] mb-1">75+</div>
                <div className="text-sm text-[#0F172A]/60">Educational Resources</div>
              </div>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Main Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1E40AF]/10 to-[#0D9488]/10 rounded-full blur-3xl"></div>
              
              {/* Central Icon */}
              <div className="relative bg-white rounded-3xl p-12 shadow-xl border border-[#E2E8F0]">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-[#1E40AF] to-[#0D9488] rounded-2xl p-6 flex items-center justify-center">
                    <FileText className="w-12 h-12 text-white" />
                  </div>
                  <div className="bg-gradient-to-br from-[#0D9488] to-[#1E40AF] rounded-2xl p-6 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-white" />
                  </div>
                  <div className="bg-gradient-to-br from-[#0F172A] to-[#1E40AF] rounded-2xl p-6 flex items-center justify-center">
                    <GraduationCap className="w-12 h-12 text-white" />
                  </div>
                  <div className="bg-gradient-to-br from-[#1E40AF] to-[#0F172A] rounded-2xl p-6 flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#1E40AF] rounded-2xl shadow-lg animate-bounce" style={{ animationDuration: '3s' }}></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#0D9488] rounded-xl shadow-lg animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
