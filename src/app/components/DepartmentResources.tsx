import { Search, ExternalLink, Shield, FileText, BookOpen, Briefcase, Calendar, Bell, Users } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function DepartmentResources() {
  const categories = [
    { icon: FileText, label: "Official Forms", color: "text-[#1E40AF]" },
    { icon: Briefcase, label: "Administrative Documents", color: "text-[#0D9488]" },
    { icon: BookOpen, label: "SOPs", color: "text-[#0F172A]" },
    { icon: Users, label: "Teaching Material", color: "text-[#1E40AF]" },
    { icon: Calendar, label: "Meeting Minutes", color: "text-[#0D9488]" },
    { icon: Bell, label: "Department Circulars", color: "text-[#0F172A]" },
  ];

  return (
    <section id="department" className="py-20 bg-gradient-to-b from-[#F0F9FF] to-[#F8FAFC]">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-4xl font-bold text-[#0F172A]">
              AIIMS Emergency Medicine Department
            </h2>
            <Badge className="bg-[#DC2626] text-white px-4 py-1.5 rounded-full">
              <Shield className="w-4 h-4 mr-1.5 inline" />
              Restricted / Internal Resources
            </Badge>
          </div>
          <p className="text-lg text-[#0F172A]/60">
            Internal Department Resources
          </p>
        </div>

        {/* Resource Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-[#E2E8F0] p-4 text-center hover:shadow-md transition-shadow duration-200"
              >
                <Icon className={`w-8 h-8 mx-auto mb-2 ${category.color}`} />
                <p className="text-sm font-medium text-[#0F172A]">{category.label}</p>
              </div>
            );
          })}
        </div>

        {/* Repository Viewer */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-lg overflow-hidden">
          {/* Top Bar */}
          <div className="bg-gradient-to-r from-[#0F172A] to-[#1E40AF] px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4 text-white flex-1">
              <h3 className="font-semibold text-lg">Department Resources</h3>
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
                <input
                  type="text"
                  placeholder="Search department resources..."
                  className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
            </div>
            <Button 
              className="bg-white text-[#0F172A] hover:bg-[#F8FAFC] rounded-xl gap-2"
              onClick={() => window.open('https://drive.google.com/drive/folders/YOUR_DEPARTMENT_FOLDER_ID', '_blank')}
            >
              <ExternalLink className="w-4 h-4" />
              Open in Google Drive
            </Button>
          </div>

          {/* Access Notice */}
          <div className="bg-[#FEF2F2] border-b border-[#FEE2E2] px-6 py-3 text-center">
            <p className="text-sm text-[#991B1B]">
              🔒 Restricted access. Available only to AIIMS Emergency Medicine Department members.
            </p>
          </div>

          {/* Embedded Drive Viewer */}
          <div className="bg-[#F8FAFC] p-4">
            <div className="bg-white rounded-xl overflow-hidden shadow-inner border border-[#E2E8F0]">
              <iframe
                src="https://drive.google.com/embeddedfolderview?id=YOUR_DEPARTMENT_FOLDER_ID#grid"
                className="w-full h-[900px]"
                title="Department Resources"
              ></iframe>
            </div>
          </div>

          {/* Fallback Notice */}
          <div className="bg-[#F1F5F9] px-6 py-4 text-center border-t border-[#E2E8F0]">
            <p className="text-sm text-[#0F172A]/60">
              If you don't have access or the content doesn't display, please contact the department administrator.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
