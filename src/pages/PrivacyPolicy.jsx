import React from "react";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default function PrivacyPolicy() {
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
            <ShieldCheck size={17} />
            Privacy & Data Protection
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-950">
            Privacy Policy
          </h1>

          <p className="mt-4 text-slate-600 leading-relaxed">
            Your privacy is important to us. This Privacy Policy explains
            how Brandwalker may collect, use and protect information
            submitted through this website.
          </p>

          <p className="mt-3 text-sm text-slate-500">
            Last updated: September 17, 2026
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div className="p-6 sm:p-8 lg:p-10 space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                1. Information We Collect
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                When you contact us through our website, we may collect
                information that you voluntarily provide, including:
              </p>

              <ul className="mt-4 space-y-2 text-slate-600 list-disc pl-6">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Exhibition or event name</li>
                <li>Stall size or project requirements</li>
                <li>Message and other project-related information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                2. How We Use Your Information
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                Information submitted through our website may be used to:
              </p>

              <ul className="mt-4 space-y-2 text-slate-600 list-disc pl-6">
                <li>Respond to enquiries</li>
                <li>Understand exhibition and event requirements</li>
                <li>Prepare quotations and project discussions</li>
                <li>Communicate regarding enquiries</li>
                <li>Improve our website and services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                3. Newsletter & Email Communication
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                If you subscribe to our newsletter, we may use the email
                address provided to send relevant business updates,
                service information, exhibition tips or project updates.
              </p>

              <p className="mt-3 text-slate-600 leading-7">
                You may stop receiving such communications by contacting
                us or using an available unsubscribe option.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                4. Information Protection
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                We take reasonable measures to protect information
                submitted through our website against unauthorized access,
                misuse or disclosure.
              </p>

              <p className="mt-3 text-slate-600 leading-7">
                However, no method of internet transmission or electronic
                storage can be guaranteed to be completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                5. Sharing of Information
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                We do not intend to sell or rent your personal information.
                Information may be shared when reasonably necessary to
                provide requested services, operate our website, comply
                with applicable legal requirements, or protect our rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                6. Third-Party Services
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                Our website may contain links to third-party services such
                as WhatsApp, Google Maps, social media platforms or other
                external websites. Their privacy practices are governed by
                their respective policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                7. Cookies
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                Our website may use basic cookies or browser storage where
                necessary for website functionality, security or improving
                the user experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                8. Your Choices
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                You may choose not to provide certain information. However,
                some information may be required for us to respond to an
                enquiry or provide a requested service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                9. Policy Updates
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                We may update this Privacy Policy from time to time.
                Changes will be reflected on this page along with an
                updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                10. Contact Us
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                If you have questions about this Privacy Policy or how
                your information is handled, you can contact Brandwalker
                through the contact details provided on our website.
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