import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
} from "lucide-react";
import { submitInquiry } from "../services/api";

export default function Contact() {
  const [formData, setFormData] = useState({ 
    name: '', email: '', phone: '', expoName: '', stallSize: '', message: '' 
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const data = await submitInquiry(formData);

    console.log("Inquiry saved:", data);

    setIsSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      expoName: "",
      stallSize: "",
      message: "",
    });
  } catch (error) {
    console.error("Submit Error:", error);
    alert(error.message);
  }
};
  
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <span className="text-blue-600 font-bold uppercase text-xs tracking-wider">Book Your Stall</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mt-2">Planning Your Next Expo Exhibition?</h2>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Share your upcoming trade show details, stall dimensions, and requirements. Our team will send custom 3D design concepts and pricing within 24 hours.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500">Phone / WhatsApp</h4>
                  <p className="font-bold text-gray-900">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500">Email Inquiry</h4>
                  <p className="font-bold text-gray-900">info@brandwakers.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500">Main Office</h4>
                  <p className="font-bold text-gray-900">Delhi NCR & Mumbai Fabrication Units</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-sm">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="mx-auto text-green-500 h-16 w-16" />
                <h3 className="text-2xl font-bold text-gray-900">Inquiry Received!</h3>
                <p className="text-gray-600">Our exhibition design team will contact you shortly with 3D concepts.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold"
                >
                  Submit Another Project
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name / Company</label>
                  {/* <input 
                    type="text" required placeholder="Company Name / Contact Person" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 bg-white"
                  /> */}

                  <input
                     type="text"
                     required
                     placeholder="Company Name / Contact Person"
                     value={formData.name}
                     onChange={(e) =>
                     setFormData({
                      ...formData,
                     name: e.target.value,
                        })
                     }
                     className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 bg-white"
                    />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                         required
                        placeholder="name@company.com"
                       value={formData.email}
                       onChange={(e) =>
                        setFormData({
                       ...formData,
                      email: e.target.value,
                        })
                        }
                       className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 bg-white"
                      />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                    {/* <input type="tel" required placeholder="+91 00000 00000" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 bg-white" /> */}

                         <input
                          type="tel"
                          required
                          placeholder="+91 00000 00000"
                          value={formData.phone}
                          onChange={(e) =>
                          setFormData({
                          ...formData,
                          phone: e.target.value,
                          })
                           }
                         className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 bg-white"
                         />
                  </div>  
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Expo / Event Name</label>
                    {/* <input type="text" placeholder="e.g. Auto Expo 2026" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 bg-white" /> */}
                     <input
                       type="text"
                       placeholder="e.g. Auto Expo 2026"
                       value={formData.expoName}
                       onChange={(e) =>
                       setFormData({
                       ...formData,
                       expoName: e.target.value,
                        })
                        }
                       className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 bg-white"
                        />
                   
                   </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Stall Size (e.g. 6x3m)</label>
                    {/* <input type="text" placeholder="e.g. 18 Sq Meters" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 bg-white" /> */}
                    <input
                      type="text"
                      placeholder="e.g. 18 Sq Meters"
                      value={formData.stallSize}
                      onChange={(e) =>
                      setFormData({
                      ...formData,
                      stallSize: e.target.value,
                       })
                        }
                     className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 bg-white"
                      />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Specific Requirements</label>
                  {/* <textarea rows="3" placeholder="Mention budget, sides open, LED screen requirement, etc." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 bg-white"></textarea> */}
                  <textarea
                   rows="3"
                   placeholder="Mention budget, sides open, LED screen requirement, etc."
                   value={formData.message}
                   onChange={(e) =>
                   setFormData({
                    ...formData,
                   message: e.target.value,
                   })
                   }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 bg-white"
                  ></textarea>
                </div>

                <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3.5 rounded-xl hover:bg-blue-700 transition flex items-center justify-center gap-2">
                  Get Free 3D Design Quote <Send size={18} />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}