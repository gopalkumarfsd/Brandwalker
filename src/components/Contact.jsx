import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { submitInquiry } from "../services/api";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  expoName: "",
  stallSize: "",
  message: "",
};

export default function Contact() {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState(initialFormData);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setIsLoading(true);

    try {
      const data = await submitInquiry(formData);

      console.log("Inquiry saved:", data);

      setFormData(initialFormData);
      navigate("/thank-you");
    } catch (error) {
      console.error("Submit Error:", error);

      setError(
        error.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT CONTENT */}
          <div className="lg:pt-6">

            <span className="text-blue-600 font-bold uppercase text-xs tracking-widest">
              Let's Work Together
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mt-2 leading-tight">
              Planning Your Next Exhibition?
            </h2>

            <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
              Share your exhibition details, stall size,
              event requirements, and ideas with us. Our
              team will review your requirement and get
              back to you with the next steps.
            </p>

            {/* Contact Details */}
            <div className="mt-10 space-y-6">

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl shrink-0">
                  <Phone size={22} />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-500">
                    Phone / WhatsApp
                  </h4>

                  <a
                    href="tel:+919876543210"
                    className="font-bold text-gray-900 hover:text-blue-600 transition"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl shrink-0">
                  <Mail size={22} />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-500">
                    Email Inquiry
                  </h4>

                  <a
                    href="mailto:info@brandwakers.com"
                    className="font-bold text-gray-900 hover:text-blue-600 transition"
                  >
                    info@brandwakers.com
                  </a>
                </div>
              </div>

              {/* LOCATION - CLICKABLE */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Pearls+Omaxe+Tower+Netaji+Subhash+Place+Pitampura+Delhi+110034"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Pearls Omaxe Tower location in Google Maps"
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
                  <MapPin size={22} />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-500 group-hover:text-blue-600 transition">
                    Our Office
                  </h4>

                  <p className="font-bold text-gray-900 group-hover:text-blue-600 transition">
                    Pearls Omaxe Tower
                  </p>

                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    Netaji Subhash Place, Pitampura
                    <br />
                    New Delhi - 110034
                  </p>

                  <p className="text-xs text-blue-600 font-semibold mt-2">
                    Click to view on Google Maps →
                  </p>
                </div>
              </a>

              {/* WhatsApp CTA */}
              <a
                href="https://api.whatsapp.com/send/?phone=919876543210&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl font-semibold text-sm transition-all"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>

            </div>
          </div>

          {/* FORM */}
          <div className="bg-gray-50 p-6 sm:p-10 rounded-3xl border border-gray-100 shadow-sm">

            {isSubmitted ? (

              /* SUCCESS STATE */
              <div className="text-center py-12">

                <div className="flex justify-center">
                  <div className="p-4 bg-green-50 rounded-full">
                    <CheckCircle2 className="text-green-600 h-14 w-14" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-6">
                  Inquiry Received!
                </h3>

                <p className="text-gray-600 mt-3 leading-relaxed">
                  Thank you for sharing your exhibition
                  requirements. Our team will contact you
                  shortly.
                </p>

                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-7 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition"
                >
                  Submit Another Requirement
                </button>

              </div>

            ) : (

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* FORM HEADER */}
                <div className="mb-2">

                  <h3 className="text-2xl font-bold text-gray-900">
                    Tell Us About Your Project
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Fill in the details below and our team
                    will get in touch with you.
                  </p>

                </div>

                {/* ERROR */}
                {error && (
                  <div
                    className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm"
                    role="alert"
                  >
                    {error}
                  </div>
                )}

                {/* NAME */}
                <div>

                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-1.5"
                  >
                    Your Name / Company
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Company Name / Contact Person"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white transition"
                  />

                </div>

                {/* EMAIL + PHONE */}
                <div className="grid sm:grid-cols-2 gap-4">

                  <div>

                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-1.5"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white transition"
                    />

                  </div>

                  <div>

                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-1.5"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 00000 00000"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white transition"
                    />

                  </div>

                </div>

                {/* EXPO + STALL SIZE */}
                <div className="grid sm:grid-cols-2 gap-4">

                  <div>

                    <label
                      htmlFor="expoName"
                      className="block text-sm font-semibold text-gray-700 mb-1.5"
                    >
                      Expo / Event Name
                    </label>

                    <input
                      id="expoName"
                      type="text"
                      name="expoName"
                      value={formData.expoName}
                      onChange={handleChange}
                      placeholder="e.g. Auto Expo"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white transition"
                    />

                  </div>

                  <div>

                    <label
                      htmlFor="stallSize"
                      className="block text-sm font-semibold text-gray-700 mb-1.5"
                    >
                      Stall Size
                    </label>

                    <input
                      id="stallSize"
                      type="text"
                      name="stallSize"
                      value={formData.stallSize}
                      onChange={handleChange}
                      placeholder="e.g. 6 x 3 meters"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white transition"
                    />

                  </div>

                </div>

                {/* MESSAGE */}
                <div>

                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-1.5"
                  >
                    Project Requirements
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your stall design, branding, LED screen, meeting room, open sides, budget, etc."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white transition resize-none"
                  />

                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    "Submitting..."
                  ) : (
                    <>
                      Get Free Project Consultation
                      <Send size={18} />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-gray-400">
                  Your details will be used only to respond
                  to your exhibition inquiry.
                </p>

              </form>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}