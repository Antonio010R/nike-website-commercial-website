import React from "react";
import { Link } from "react-router-dom";

const Highlights = ({ endpoint, reverse }) => {
  const { heading, title, text, img, btn, url } = endpoint;
  return (
    <div
      className={`nike-container flex  items-center justify-between -my-7  ${
        reverse ? "flex-row-reverse" : ""
      } lg:flex-col lg:justify-center `}
    >
      <div className="max-w-xl lg:max-w-none w-full md:text-center flex flex-col lg:justify-center lg:items-center">
        <h3 className="text-4xl sm:text-3xl font-bold text-gradient ">
          {heading}
        </h3>
        <h2 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-black filter ">
          {title}
        </h2>
        <p className="xl:text-sm my-4 text-black lg:max-w-lg">{text}</p>
        <Link to={url} className="">
          <button
            type="button"
            className="bg-black text-slate-100 button-theme py-2 rounded-md shadow-lg shadow-black hover:scale-110 duration-300"
          >
            {btn}
          </button>
        </Link>
      </div>
      <div className="relative flex items-start justify-start max-w-lg  lg:mt-10 sm:max-w-sm md:max-w-md h-[400px]">
        {/* <img
          src={img}
          alt={`img/highlight/${title}`}
          className="w-auto object-fill animate-bounce"
        /> */}
        <img src={img} alt={`img/highlight/${title}`} className="float-image" />
        <span className="shadow-image"></span>
      </div>
      {/* <div className="w-80 h-44 border border-transparent rounded-full radial-shadow opacity-100 object-cover "> */}
      {/* </div> */}
    </div>
  );
};

export default Highlights;
