export function CommentsAndRequests() {
  return (
    <section id="comments-suggestions-and-document-requests" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-3">
            Comments, Suggestions & Document Requests
          </h2>
          <p className="text-lg text-[#1E40AF]">
            Share your feedback or request specific documents to be added
          </p>
        </div>

        {/* Embedded Form Container */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-lg overflow-hidden">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-[#0D9488] to-[#1E40AF] p-5">
            <h3 className="text-white font-semibold text-lg">Feedback & Request Form</h3>
          </div>

          {/* Google Form Embed */}
          <div className="bg-[#F8FAFC]">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSf8aBCDEFGHIJKLMNOPQRSTUVWXYZ/viewform?embedded=true"
              className="w-full h-[850px] border-0"
              title="Comments, Suggestions & Document Requests Form"
            >
              Loading form...
            </iframe>
          </div>

          {/* Footer Note */}
          <div className="bg-[#0D9488]/5 border-t border-[#E2E8F0] px-6 py-4">
            <p className="text-sm text-[#0F172A] text-center">
              We value your feedback and will respond to requests as soon as possible
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
