// src/components/Testimonial.jsx

import React from "react";
 // Install react-icons if not already
import { FaStar } from "react-icons/fa";
const testimonials = [
  {
    name: "Ananya Sharma",
    feedback:
      "This platform is super fast and very easy to use. Tailwind and Vite make development fun again!",
    stars: 5,
    role: "Frontend Developer",
  },
  {
    name: "Ravi Kumar",
    feedback:
      "The responsive design and performance are amazing. Our site loads instantly.",
    stars: 4,
    role: "Tech Lead",
  },
  {
    name: "Meera Patel",
    feedback:
      "It helped our team launch 2x faster. We love how intuitive everything is.",
    stars: 5,
    role: "Product Designer",
  },
];

const Testimonial = () => {
  return (
    <section className="container bg-white py-16 pb-25 px-4 mx-auto">
      <div className="max-w-7xl mx-auto text-center mb-12 ">
        <h2 className="text-[2.5em] l xl:text-[5rem]  font-bold text-gray-800 mb-8 lora">What Our Users Say</h2>
        <p className="text-gray-600">Trusted by developers and designers worldwide</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-3 gap-8 max-w-6xl mx-auto ">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-slate-800 shadow-md rounded-lg p-6 text-left hover:shadow-xl transition"
          >
            <div className="flex items-center gap-2 mb-2 text-yellow-400 mx-auto">
              {Array.from({ length: t.stars }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className=" italic mb-4 text-white">"{t.feedback}"</p>
            <div className="font-semibold text-white">{t.name}</div>
            <div className="text-sm text-gray-50">{t.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;