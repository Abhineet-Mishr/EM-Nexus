import { ExternalLink, BookOpen, TrendingUp, Award } from "lucide-react";
import { Button } from "./ui/button";

const highlights = [
  {
    icon: TrendingUp,
    label: "Landmark Trials",
    count: "48",
    color: "text-[#1E40AF]",
    bg: "bg-[#EFF6FF]",
  },
  {
    icon: BookOpen,
    label: "Systematic Reviews",
    count: "62",
    color: "text-[#0D9488]",
    bg: "bg-[#F0FDFA]",
  },
  {
    icon: Award,
    label: "Clinical Guidelines",
    count: "94",
    color: "text-[#7C3AED]",
    bg: "bg-[#F5F3FF]",
  },
];

export function ResearchPapers() {
  return (
    <section id="papers" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-3">Research Papers</h2>
          <p className="text-lg text-[#0F172A]/60">
            Landmark trials, systematic reviews, and evidence-based clinical literature
          </p>
        </div>

        {/* Highlight Chips */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`${item.bg} rounded-2xl border border-[#E2E8F0] p-6 flex items-center gap-5`}
              >
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                  <Icon className={`w-7 h-7 ${item.color}`} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#0F172A]">{item.count}+</div>
                  <div className="text-sm text-[#0F172A]/60 font-medium">{item.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Repository Viewer */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-lg overflow-hidden">
          {/* Top Bar */}
          <div className="bg-gradient-to-r from-[#1E40AF] to-[#7C3AED] px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3 text-white">
              <BookOpen className="w-5 h-5 opacity-80" />
              <h3 className="font-semibold text-lg">Research Paper Repository</h3>
            </div>
            <Button
              className="bg-white text-[#0F172A] hover:bg-[#F8FAFC] rounded-xl gap-2"
              onClick={() =>
                window.open(
                  "https://drive.google.com/drive/folders/example-papers-folder-id",
                  "_blank"
                )
              }
            >
              <ExternalLink className="w-4 h-4" />
              Open in Google Drive
            </Button>
          </div>

          {/* Banner */}
          <div className="bg-[#EFF6FF] border-b border-[#BFDBFE] px-6 py-3 text-center">
            <p className="text-sm text-[#1E40AF]">
              📚 Organised by specialty and year. Use the search within Google Drive for rapid lookup.
            </p>
          </div>

          {/* Embedded Drive Viewer */}
          <div className="bg-[#F8FAFC] p-4">
            <div className="bg-white rounded-xl overflow-hidden shadow-inner border border-[#E2E8F0]">
              <iframe
                src="https://drive.google.com/embeddedfolderview?id=example-papers-folder-id#grid"
                className="w-full h-[900px]"
                title="Research Paper Repository"
              ></iframe>
            </div>
          </div>

          {/* Fallback Notice */}
          <div className="bg-[#F1F5F9] px-6 py-4 text-center border-t border-[#E2E8F0]">
            <p className="text-sm text-[#0F172A]/60">
              If embedded content cannot be displayed, please use the &ldquo;Open in Google Drive&rdquo; button above.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
