import { ExternalLink, GraduationCap, Video, Presentation, FileQuestion } from "lucide-react";
import { Button } from "./ui/button";

const resourceTypes = [
  { icon: Presentation, label: "Lecture Slides", color: "text-[#1E40AF]", bg: "bg-[#EFF6FF]" },
  { icon: Video, label: "Video Lectures", color: "text-[#0D9488]", bg: "bg-[#F0FDFA]" },
  { icon: FileQuestion, label: "Case Studies", color: "text-[#D97706]", bg: "bg-[#FFFBEB]" },
  { icon: GraduationCap, label: "Training Modules", color: "text-[#7C3AED]", bg: "bg-[#F5F3FF]" },
];

export function EducationalResources() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-3">Educational Resources</h2>
          <p className="text-lg text-[#0F172A]/60">
            Slides, case studies, training modules, and video lectures for continuous learning
          </p>
        </div>

        {/* Resource Type Pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8">
          {resourceTypes.map((type) => {
            const Icon = type.icon;
            return (
              <div
                key={type.label}
                className={`${type.bg} rounded-2xl border border-[#E2E8F0] p-5 flex flex-col items-center gap-3 text-center`}
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                  <Icon className={`w-6 h-6 ${type.color}`} />
                </div>
                <span className="text-sm font-semibold text-[#0F172A]">{type.label}</span>
              </div>
            );
          })}
        </div>

        {/* Repository Viewer */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-lg overflow-hidden">
          {/* Top Bar */}
          <div className="bg-gradient-to-r from-[#0D9488] to-[#1E40AF] px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3 text-white">
              <GraduationCap className="w-5 h-5 opacity-80" />
              <h3 className="font-semibold text-lg">Educational Resource Library</h3>
            </div>
            <Button
              className="bg-white text-[#0F172A] hover:bg-[#F8FAFC] rounded-xl gap-2"
              onClick={() =>
                window.open(
                  "https://drive.google.com/drive/folders/example-education-folder-id",
                  "_blank"
                )
              }
            >
              <ExternalLink className="w-4 h-4" />
              Open in Google Drive
            </Button>
          </div>

          {/* Banner */}
          <div className="bg-[#F0FDFA] border-b border-[#99F6E4] px-6 py-3 text-center">
            <p className="text-sm text-[#0D9488]">
              🎓 Resources are periodically updated. Bookmark this section to stay current.
            </p>
          </div>

          {/* Embedded Drive Viewer */}
          <div className="bg-[#F8FAFC] p-4">
            <div className="bg-white rounded-xl overflow-hidden shadow-inner border border-[#E2E8F0]">
              <iframe
                src="https://drive.google.com/embeddedfolderview?id=example-education-folder-id#grid"
                className="w-full h-[900px]"
                title="Educational Resource Library"
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
