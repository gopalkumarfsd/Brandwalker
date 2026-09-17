import React from "react";
import { ArrowLeft, FileText } from "lucide-react";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between gap-4">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition"
            >
              <ArrowLeft size={18} />
              Back to Website
            </a>

            <a href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center font-black">
                B
              </div>

              <span className="font-black tracking-tight">
                BRANDWALKER
              </span>
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-5">
            <FileText size={17} />
            Website Terms
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-950">
            Terms & Conditions
          </h1>

          <p className="mt-4 text-slate-600 leading-relaxed">
            These terms explain the general conditions for using the
            Brandwalker website and submitting enquiries through it.
          </p>

          <p className="mt-3 text-sm text-slate-500">
            Last updated: September 17, 2026
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div className="p-6 sm:p-8 lg:p-10 space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                1. Website Use
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                This website is provided to share information about
                Brandwalker's exhibition stall design, fabrication and
                event-related services. You agree to use the website only
                for lawful purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                2. Enquiries & Project Information
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                Information submitted through the enquiry form should be
                accurate and complete. Submission of an enquiry does not
                by itself create a contract or guarantee that a project
                will be accepted.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                3. Quotations
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                Any quotation, estimate or project discussion may depend
                on the final requirements, specifications, venue rules,
                materials, timelines and other project conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                4. Website Content
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                Website text, graphics, images, layouts and other content
                are provided for informational and promotional purposes.
                Content may be updated, changed or removed without prior
                notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                5. Intellectual Property
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                Unless otherwise stated, website content and branding
                associated with Brandwalker may not be copied, reproduced,
                modified or redistributed without appropriate permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                6. Third-Party Links
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                The website may contain links to third-party websites and
                services. Brandwalker is not responsible for the content,
                availability or policies of external websites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                7. Availability
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                We aim to keep the website available and functional but
                do not guarantee uninterrupted or error-free operation at
                all times.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                8. Changes to These Terms
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                These Terms & Conditions may be updated from time to time.
                Updated terms will be published on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                9. Contact
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                For questions regarding these terms or our services,
                please contact Brandwalker through the contact information
                available on the website.
              </p>

              <div className="mt-5 rounded-xl bg-slate-50 border border-slate-200 p-5">
                <p className="font-semibold text-slate-950">
                  Brandwalker
                </p>

                <p className="mt-2 text-slate-600">
                  Pearls Omaxe Tower
                  <br />
                  Netaji Subhash Place, Pitampura
                  <br />
                  New Delhi - 110034
                </p>

                <a
                  href="mailto:info@brandwakers.com"
                  className="inline-block mt-3 text-blue-600 font-semibold hover:text-blue-700 transition"
                >
                  info@brandwakers.com
                </a>
              </div>
            </section>
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition"
          >
            <ArrowLeft size={17} />
            Return to Brandwalker
          </a>
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Brandwalker. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}