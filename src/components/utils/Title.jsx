import React from "react";

const Title = ({ title }) => {
  return (
    <div className="flex items-center md:justify-center justify-start w-full">
      <h2 className="text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter drop-shadow-lg">
        {title}
      </h2>
    </div>
  );
};

export default Title;
