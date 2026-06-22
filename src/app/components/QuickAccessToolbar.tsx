import { useState } from 'react';

const navItems = [
  'Home',
  'Clinical Repository',
  'Research Papers',
  'Educational Resources',
  'Upload Guideline',
  'Suggestions & Requests',
  'Department Resources'
];

export function QuickAccessToolbar() {
  const [activeTab, setActiveTab] = useState('Home');

  const scrollToSection = (item: string) => {
    setActiveTab(item);
    const sectionId = item.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 200; // Account for sticky header + toolbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="sticky top-[88px] z-40 bg-white border-b border-[#E2E8F0] shadow-sm">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex items-center gap-3 py-4 overflow-x-auto scrollbar-hide">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`px-6 py-2.5 rounded-full whitespace-nowrap transition-all ${
                activeTab === item
                  ? 'bg-[#1E40AF] text-white shadow-md'
                  : 'bg-[#F8FAFC] text-[#0F172A] hover:bg-[#E2E8F0] border border-[#E2E8F0]'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
