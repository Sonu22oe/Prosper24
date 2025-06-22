// src/components/Features.jsx
import React from "react";
import FeatureCard from './FeatureCard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faShieldAlt,
  faChartPie,
  faBullhorn,
  faHeadset,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const features = [
  {
    icon: faLaptopCode,
    title: "Web Development",
    description: "Modern websites using the latest frameworks and tools.",
  },
  {
    icon: faShieldAlt,
    title: "Cyber Security",
    description: "Advanced protection against online threats and data breaches.",
  },
  {
    icon: faChartPie,
    title: "Data Analytics",
    description: "Unlock insights and drive growth with smart data solutions.",
  },
  {
    icon: faBullhorn,
    title: "Digital Marketing",
    description: "Boost visibility and reach with targeted campaigns.",
  },
  {
    icon: faHeadset,
    title: "Customer Support",
    description: "24/7 assistance to keep your clients satisfied and loyal.",
  },
  {
    icon: faGlobe,
    title: "Global Expansion",
    description: "Scale your business across borders with ease.",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Services = () => {
  return (
    <motion.section
      className="px-[10%] py-16 bg-gray-50"
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-7xl text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
          variants={itemVariants}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          Discover our versatile services crafted to elevate your business to the next level.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;