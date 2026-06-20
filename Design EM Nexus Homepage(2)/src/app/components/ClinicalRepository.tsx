import { Search, Filter, ExternalLink, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function ClinicalRepository() {
  return (
    <section id="repository" className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-3">Clinical Repository</h2>
          <p className="text-lg text-[#0F172A]/60">
            Guidelines, Protocols, Recommendations, Research Papers and Educational Material
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0F172A]/40" />
              <Input
                placeholder="Search guidelines, protocols, papers..."
                className="pl-12 h-12 bg-[#F8FAFC] border-[#E2E8F0] rounded-xl"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-3">
              <Button variant="outline" className="h-12 px-6 rounded-xl border-[#E2E8F0] hover:bg-[#F8FAFC]">
                <Filter className="w-4 h-4 mr-2" />
                Category
              </Button>
              <Button variant="outline" className="h-12 px-6 rounded-xl border-[#E2E8F0] hover:bg-[#F8FAFC]">
                <Filter className="w-4 h-4 mr-2" />
                Specialty
              </Button>
              <Button variant="outline" className="h-12 px-6 rounded-xl border-[#E2E8F0] hover:bg-[#F8FAFC]">
                <Filter className="w-4 h-4 mr-2" />
                Resource Type
              </Button>
              <Button variant="outline" className="h-12 px-6 rounded-xl border-[#E2E8F0] hover:bg-[#F8FAFC]">
                <Filter className="w-4 h-4 mr-2" />
                Year
              </Button>
            </div>
          </div>
        </div>

        {/* Repository Viewer */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-lg overflow-hidden">
          {/* Top Bar */}
          <div className="bg-gradient-to-r from-[#0F172A] to-[#1E40AF] px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3 text-white">
              <h3 className="font-semibold text-lg">Clinical Repository</h3>
              <div className="flex items-center gap-2 text-sm opacity-80">
                <Calendar className="w-4 h-4" />
                <span>Last Updated: June 2026</span>
              </div>
            </div>
            <Button 
              className="bg-white text-[#0F172A] hover:bg-[#F8FAFC] rounded-xl gap-2"
              onClick={() => window.open('https://drive.google.com/drive/folders/1l_ZSx-QuZHxRJWybVvQ2Pz7D5NiWhrkh', '_blank')}
            >
              <ExternalLink className="w-4 h-4" />
              Open in Google Drive
            </Button>
          </div>

          {/* Banner */}
          <div className="bg-[#FEF3C7] border-b border-[#FDE68A] px-6 py-3 text-center">
            <p className="text-sm text-[#92400E]">
              ℹ️ Best viewed on desktop.
            </p>
          </div>

          {/* Embedded Drive Viewer */}
          <div className="bg-[#F8FAFC] p-4">
            <div className="bg-white rounded-xl overflow-hidden shadow-inner border border-[#E2E8F0]">
              <iframe
                src="https://drive.google.com/embeddedfolderview?id=1l_ZSx-QuZHxRJWybVvQ2Pz7D5NiWhrkh#grid"
                className="w-full h-[900px]"
                title="Clinical Repository"
              ></iframe>
            </div>
          </div>

          {/* Fallback Notice */}
          <div className="bg-[#F1F5F9] px-6 py-4 text-center border-t border-[#E2E8F0]">
            <p className="text-sm text-[#0F172A]/60">
              If embedded content cannot be displayed, please use the "Open in Google Drive" button above.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
