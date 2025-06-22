import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const teamMembers = [
  {
    name: "John Doe",
    title: "CEO",
    imageUrl: "/ourteam/jpg/Ourteam2.jpg",
    altText: "John Doe - CEO",
    bio: "John is the CEO of our company, with a passion for innovation and customer satisfaction.",
  },
  {
    name: "Jane Smith",
    title: "CTO",
    imageUrl: "/ourteam/jpg/Ourteam1.jpg",
    altText: "Jane Smith - CTO",
    bio: "Jane leads our technology vision and development efforts.",
  },
  {
    name: "Peter Jones",
    title: "Head of Marketing",
    imageUrl: "/ourteam/jpg/Ourteam3.jpg",
    altText: "Peter Jones - Head of Marketing",
    bio: "Peter drives brand awareness and customer engagement.",
  },
  {
    name: "Alice Brown",
    title: "Head of Sales",
    imageUrl: "/ourteam/jpg/Ourteam0.jpg",
    altText: "Alice Brown - Head of Sales",
    bio: "Alice drives revenue growth and customer acquisition.",
  },
];

const OurTeam = () => {
  return (
    <div className="lora py-16 px-4 sm:px-8 lg:px-20 bg-gray-100/90 text-gray-800 rounded-lg">
      <h2 className="text-4xl xl:text-[5em] font-extrabold text-center mb-6 capitalize">
        Meet Our Team
      </h2>
      <p className="text-lg text-center mb-20">
        We are a team of dedicated professionals passionate about delivering
        the best possible solutions for our clients.
      </p>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center place-items-center source-code-pro">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-xs bg-white rounded  border-slate-700 shadow-md hover:shadow-xl overflow-hidden"
          >
            <img
              src={member.imageUrl}
              alt={member.altText}
              className="w-full h-60 object-cover"
            />
            <div className="p-5 flex flex-col ">
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.title}</p>
              
              <div className="flex space-x-4 mt-4 text-gray-600">
                <a href="#" aria-label="LinkedIn">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
                <a href="#" aria-label="Twitter">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
                <a href="#" aria-label="Instagram">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;