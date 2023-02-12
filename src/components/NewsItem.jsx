import React from "react";
import { SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const NewsItem = ({ item }) => {
  const { img, like, time, by, title, text, url, btn } = item;
  const shortText = text.substring(0, Math.min(text.length, 165));
  return (
    <SplideSlide className="mb-0.5">
      <div className="flex flex-col items-center justify-between gap-4 rounded-lg shadow-md ring-2 ring-slate-200 h-[520px] xl:h-[450px] lg:h-[450px] md:h-[480px] sm:h-[470px]">
        <div className="flex items-center justify-center">
          <img
            src={img}
            alt={`img/news/${title}`}
            className="w-full h-auto object-cover rounded-t-lg shadow-md shadow-slate-400"
          />
        </div>

        <div className="flex w-full px-4 justify-between font-bold">
          <div className="flex items-center justify-center gap-1">
            <HeartIcon className="icon-style text-red-500 w-5 h-5" />
            <span className="text-xs text-black">{like}</span>
          </div>
          <div className="flex items-center justify-center gap-1">
            <ClockIcon className="icon-style text-black w-5 h-5" />
            <span className="text-black text-xs">{time}</span>
          </div>
          <div className="flex items-center justify-center gap-1">
            <HashtagIcon className="icon-style text-blue-500 w-5 h-5" />
            <span className="text-blue-500 text-xs">{by}</span>
          </div>
        </div>

        <div className="flex flex-col w-full px-4 ">
          <h3 className="text-base font-semibold lg:text-sm">{title}</h3>
          <p className="text-sm text-justify xl:text-xs">{shortText}...</p>
        </div>
        <div className="flex items-center justify-center px-4 w-full mb-2">
          <Link
            to={url}
            className="flex items-center justify-center w-full py-1 bg-black text-slate-100 rounded-md shadow-md shadow-black"
          >
            {btn}
          </Link>
        </div>
      </div>
    </SplideSlide>
  );
};

export default NewsItem;
