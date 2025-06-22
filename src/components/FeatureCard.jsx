import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FeatureCard = ({ icon, title, description, image }) => {
  return (
    <div className="bg-transparent mx-5 rounded overflow-hidden">
      <div className="relative">
        
        
          <FontAwesomeIcon icon={icon} className=" text-gray-700 text-[4em] my-2" />
      
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;