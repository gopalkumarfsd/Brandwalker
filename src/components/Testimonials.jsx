import React, { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
} from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    company: "EV Motion Dynamics",
    role: "Marketing Head",
    feedback:
      "Brand Wakers handled our exhibition stall from concept to execution. The 3D design was impressive and the final stall looked exactly as planned.",
  },
  {
    name: "Ananya Verma",
    company: "BioPharma Health",
    role: "Business Development",
    feedback:
      "The team understood our requirements quickly and delivered a professional exhibition setup. Coordination and on-site execution were smooth.",
  },
  {
    name: "Vikram Mehta",
    company: "Apex Industrial Tools",
    role: "Director",
    feedback:
      "We were looking for a modern and functional stall that could handle product demonstrations and meetings. Brand Wakers delivered a solution that worked very well for us.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = testimonials.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, total]);

  return (
    <section
      id="testimonials"
      className="py-24 bg-slate-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================================
            SECTION HEADER
        ================================= */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="text-blue-600 font-bold uppercase text-xs tracking-[0.2em]">
            Client Feedback
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-3 leading-tight">
            What Our Clients Say
          </h2>

          <p className="text-slate-600 mt-5 text-base sm:text-lg leading-relaxed">
            From exhibition stall design to final execution,
            we focus on creating experiences that help brands
            stand out.
          </p>
        </div>

        {/* ================================
            CAROUSEL
        ================================= */}

        <div
          className="relative max-w-5xl mx-auto mt-14"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* LEFT BUTTON */}

          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="hidden sm:flex absolute left-0 lg:-left-14 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-white border border-slate-200 shadow-lg text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
          >
            <ChevronLeft size={21} />
          </button>

          {/* RIGHT BUTTON */}

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="hidden sm:flex absolute right-0 lg:-right-14 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-white border border-slate-200 shadow-lg text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
          >
            <ChevronRight size={21} />
          </button>

          {/* CARD */}

          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-7 sm:p-10 lg:p-14 min-h-[390px] flex flex-col justify-between">

            {/* QUOTE ICON */}

            <div className="flex items-start justify-between gap-5">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Quote size={27} />
              </div>

              {/* STARS */}

              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={17}
                    className="text-amber-400 fill-amber-400"
                  />
                ))}
              </div>
            </div>

            {/* FEEDBACK */}

            <div className="mt-8">
              <p
                key={current}
                className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-800 leading-relaxed"
              >
                “{testimonials[current].feedback}”
              </p>
            </div>

            {/* CLIENT */}

            <div className="mt-10 pt-7 border-t border-slate-100 flex items-center justify-between gap-5">

              <div className="flex items-center gap-4">

                {/* INITIAL */}

                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                  {testimonials[current].name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    {testimonials[current].name}
                  </h3>

                  <p className="text-sm text-slate-500 mt-0.5">
                    {testimonials[current].role}
                  </p>

                  <p className="text-sm font-semibold text-blue-600 mt-0.5">
                    {testimonials[current].company}
                  </p>
                </div>

              </div>

              {/* MOBILE ARROWS */}

              <div className="flex sm:hidden gap-2">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous testimonial"
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white transition"
                >
                  <ChevronLeft size={19} />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next testimonial"
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white transition"
                >
                  <ChevronRight size={19} />
                </button>
              </div>

            </div>
          </div>

          {/* DOTS */}

          <div className="flex items-center justify-center gap-2 mt-7">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  current === index
                    ? "w-8 bg-blue-600"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          {/* SLIDE COUNTER */}

          <p className="text-center text-xs text-slate-400 mt-3">
            {current + 1} / {total}
          </p>
        </div>

        {/* ================================
            BOTTOM CTA
        ================================= */}

        <div className="text-center mt-14">
          <p className="text-slate-500 text-sm">
            Planning an exhibition project?
          </p>

          <a
            href="#contact"
            className="inline-flex items-center justify-center mt-3 px-6 py-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-sm transition-all"
          >
            Discuss Your Project
          </a>
        </div>

      </div>
    </section>
  );
}