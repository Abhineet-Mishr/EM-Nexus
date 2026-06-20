import { useState, useEffect, useRef } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "repository", label: "Clinical Repository" },
  { id: "papers", label: "Research Papers" },
  { id: "education", label: "Educational Resources" },
  { id: "upload", label: "Upload Guideline" },
  { id: "suggestions", label: "Suggestions & Requests" },
  { id: "department", label: "Department Resources" },
];

const STICKY_OFFSET = 160; // header (88px) + nav (~56px) + buffer

export function Navigation() {
  const [activeNav, setActiveNav] = useState("home");
  const scrollbarRef = useRef<HTMLDivElement>(null);
  const isManualScroll = useRef(false);

  useEffect(() => {
    const sectionEls = navItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScroll.current) return;
        // Pick the topmost visible section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveNav(visible[0].target.id);
        }
      },
      { rootMargin: `-${STICKY_OFFSET}px 0px -40% 0px`, threshold: 0 }
    );

    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    isManualScroll.current = true;
    setActiveNav(id);

    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - STICKY_OFFSET;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }

    // Re-enable observer after animation settles
    setTimeout(() => {
      isManualScroll.current = false;
    }, 900);
  };

  // Scroll active pill into view in the nav bar
  useEffect(() => {
    const activeBtn = scrollbarRef.current?.querySelector(`[data-id="${activeNav}"]`) as HTMLElement | null;
    activeBtn?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [activeNav]);

  return (
    <nav className="sticky top-[88px] z-40 bg-white border-b border-[#E2E8F0] py-4 shadow-sm">
      <div className="max-w-[1280px] mx-auto px-8">
        <div ref={scrollbarRef} className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {navItems.map((item) => (
            <button
              key={item.id}
              data-id={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-5 py-2.5 rounded-full whitespace-nowrap text-sm font-medium transition-all duration-200 flex-shrink-0 ${
                activeNav === item.id
                  ? "bg-[#1E40AF] text-white shadow-md shadow-[#1E40AF]/25"
                  : "bg-[#F8FAFC] text-[#0F172A] hover:bg-[#E2E8F0]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
