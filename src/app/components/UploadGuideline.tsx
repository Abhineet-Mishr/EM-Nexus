export function UploadGuideline() {
  return (
    <section id="upload-guideline" className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-3">
            Submit New Guideline
          </h2>
          <p className="text-lg text-[#1E40AF]">
            Help expand the knowledge base by submitting new guidelines and resources
          </p>
        </div>

        {/* Embedded Form Container */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-lg overflow-hidden">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-[#1E40AF] to-[#0D9488] p-5">
            <h3 className="text-white font-semibold text-lg">Guideline Submission Form</h3>
          </div>

          {/* Google Form Embed */}
          <div className="bg-[#F8FAFC]">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSf8aBCDEFGHIJKLMNOPQRSTUVWXYZ/viewform?embedded=true"
              className="w-full h-[850px] border-0"
              title="Upload Guideline Form"
            >
              Loading form...
            </iframe>
          </div>

          {/* Footer Note */}
          <div className="bg-[#1E40AF]/5 border-t border-[#E2E8F0] px-6 py-4">
            <p className="text-sm text-[#0F172A] text-center">
              All submissions will be reviewed before being added to the repository
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
