import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { ClinicalRepository } from "./components/ClinicalRepository";
import { ResearchPapers } from "./components/ResearchPapers";
import { EducationalResources } from "./components/EducationalResources";
import { QuickActions } from "./components/QuickActions";
import { UploadSection } from "./components/UploadSection";
import { SuggestionsSection } from "./components/SuggestionsSection";
import { DepartmentResources } from "./components/DepartmentResources";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />
      <Navigation />
      <main>
        <HeroSection />
        <ClinicalRepository />
        <ResearchPapers />
        <EducationalResources />
        <QuickActions />
        <UploadSection />
        <SuggestionsSection />
        <DepartmentResources />
      </main>
      <Footer />
    </div>
  );
}
