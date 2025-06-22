import React from "react";
import {
  faUsers,
  faCheckCircle,
  faBriefcase,
  faSmileBeam,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const statsData = [
  {
    number: "300+",
    description: "Clients Served",
    icon: faUsers,
  },
  {
    number: "50+",
    description: "Projects Completed",
    icon: faCheckCircle,
  },
  {
    number: "10+",
    description: "Years of Experience",
    icon: faBriefcase,
  },
  {
    number: "99%",
    description: "Client Satisfaction",
    icon: faSmileBeam,
  },
];

const Stats = () => {
  return (
    <section className=" bg-gray-100 py-30 mx-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lora">
        <h2 className="text-[3em] lg:text-[5em] font-extrabold tracking-tight text-slate-900 ">
          Our Impact in Numbers
        </h2>
        <p className="mt-4 text-sm text-gray-600 max-w-xl mx-auto lg:text-xl">
          Empowering businesses with high-quality solutions and lasting relationships.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center  p-6 hover:shadow-md transition-shadow"
            >
              <div className="text-indigo-600 text-4xl mb-4">
                
              </div>
              <h3 className="text-5xl font-bold text-gray-900">{stat.number}</h3>
              <p className="text-gray-600 mt-2 text-base">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;