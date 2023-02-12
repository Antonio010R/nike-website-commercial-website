import React from "react";
import { Link } from "react-router-dom";

const SocialLink = ({ socialLink }) => {
  const { icon, link } = socialLink;
  return (
    <Link to={link}>
      <img
        src={icon}
        alt="icon/social"
        className="w-8 h-8 flex items-center cursor-pointer md:w-6 md:h-6 sm:w-5 sm:h-5 transition-all duration-200 hover:scale-110 sm:hover:scale-125"
      />
    </Link>
  );
};

export default SocialLink;
