export function UploadSection() {
  return (
    <section id="upload" className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-3">Submit New Guideline</h2>
          <p className="text-lg text-[#0F172A]/60">
            Share your clinical guidelines, protocols, or educational materials with the community
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-lg overflow-hidden">
          {/* Top Bar */}
          <div className="bg-gradient-to-r from-[#1E40AF] to-[#0D9488] px-6 py-4">
            <h3 className="font-semibold text-lg text-white">Upload Form</h3>
          </div>

          {/* Embedded Google Form */}
          <div className="bg-[#F8FAFC] p-4">
            <div className="bg-white rounded-xl overflow-hidden shadow-inner border border-[#E2E8F0]">
              <iframe
                src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
                className="w-full h-[850px]"
                title="Upload Guideline Form"
              >
                Loading…
              </iframe>
            </div>
          </div>

          {/* Footer Notice */}
          <div className="bg-[#F1F5F9] px-6 py-4 text-center border-t border-[#E2E8F0]">
            <p className="text-sm text-[#0F172A]/60">
              All submissions will be reviewed before being added to the repository
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
