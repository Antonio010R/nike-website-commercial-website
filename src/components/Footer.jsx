import React from "react";
import { useState, useEffect } from "react";

const Footer = ({ endpoint }) => {
  const [year, setYear] = useState(0);

  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  });

  const { titles, links } = endpoint;
  return (
    <div className="bg-theme w-full pt-16 pb-10 ">
      <div className="nike-container text-slate-200 max-w-2xl mx-auto ">
        <div className="grid grid-cols-3 md:gap-x-6 gap-y-1 md:gap-y-2">
          {titles.map((title, i) => (
            <div key={i} className="mb-1">
              <h3 className="text-lg font-medium uppercase lg:text-base md:text-sm">
                {title.title}
              </h3>
            </div>
          ))}
          {links.map((link, i) => (
            <ul key={i}>
              {link.map((li, i) => (
                <li key={i} className="text-sm mb-1 lg:text-sm md:text-xs">
                  {li.link}
                </li>
              ))}
            </ul>
          ))}
        </div>

        <div>
          <p className="mt-4 text-sm text-center ">
            Copyright<sup className="text-base font-bold">&copy;</sup> All
            Reserved Rights{" "}
            <span className="font-semibold uppercase">Anton Roy {year}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
