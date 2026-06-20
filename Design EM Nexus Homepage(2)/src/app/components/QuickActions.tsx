import { Upload, MessageSquare, FileSearch } from "lucide-react";
import { Button } from "./ui/button";

export function QuickActions() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 160;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Upload New Guideline */}
          <div className="group bg-white rounded-2xl border border-[#E2E8F0] p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-[#1E40AF] to-[#0D9488] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Upload className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#0F172A] mb-3">Upload New Guideline</h3>
            <p className="text-[#0F172A]/60 mb-6">
              Submit clinical guidelines, protocols, or educational materials to the repository.
            </p>
            <Button 
              onClick={() => scrollToSection("upload")}
              className="w-full h-12 bg-[#1E40AF] hover:bg-[#1E40AF]/90 text-white rounded-xl"
            >
              Open Form
            </Button>
          </div>

          {/* Comments & Suggestions */}
          <div className="group bg-white rounded-2xl border border-[#E2E8F0] p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0D9488] to-[#1E40AF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#0F172A] mb-3">Comments & Suggestions</h3>
            <p className="text-[#0F172A]/60 mb-6">
              Share your feedback, suggestions, or improvements for existing resources.
            </p>
            <Button 
              onClick={() => scrollToSection("suggestions")}
              className="w-full h-12 bg-[#0D9488] hover:bg-[#0D9488]/90 text-white rounded-xl"
            >
              Open Form
            </Button>
          </div>

          {/* Request Document */}
          <div className="group bg-white rounded-2xl border border-[#E2E8F0] p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0F172A] to-[#1E40AF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FileSearch className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#0F172A] mb-3">Request Document</h3>
            <p className="text-[#0F172A]/60 mb-6">
              Request specific guidelines, papers, or educational materials to be added.
            </p>
            <Button 
              onClick={() => scrollToSection("suggestions")}
              className="w-full h-12 bg-[#0F172A] hover:bg-[#0F172A]/90 text-white rounded-xl"
            >
              Open Form
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
