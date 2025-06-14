import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { companyDetails } from "../../constant";

const FloatingIcons = () => {
  return (
    <div className="fixed right-4 md:right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-4">
      <Link
        to={companyDetails.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-white/10 hover:border-blue-200 hover:bg-black/5 hover:scale-105 backdrop-blur-md p-3 rounded-lg border border-white/20 shadow-lg  transition-all duration-300  "
        aria-label="Facebook"
      >
        <FaFacebook
          size={20}
          className="text-blue-500 group-hover:scale-110  transition-all duration-300"
        />
        {/* <span className="absolute inset-0 rounded-lg bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
        <span className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-400/30 transition-all duration-300"></span> */}
      </Link>

      <Link
        to={companyDetails.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-white/10 hover:border-pink-200 hover:bg-black/5 hover:scale-105 backdrop-blur-md p-3 rounded-lg border border-white/20 shadow-lg  transition-all duration-300  "
        aria-label="Instagram"
      >
        <FaInstagram
          size={20}
          className="text-pink-500 group-hover:scale-110  transition-all duration-300"
        />
      </Link>

      <Link
        to={companyDetails.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-white/10 hover:border-sky-300 hover:bg-black/5 hover:scale-105 backdrop-blur-md p-3 rounded-lg border border-white/20 shadow-lg  transition-all duration-300  "
        aria-label="LinkedIn"
      >
        <FaLinkedin
          size={20}
          className="text-sky-400 group-hover:scale-110  transition-all duration-300"
        />
      </Link>
    </div>
  );
};

export default FloatingIcons;
