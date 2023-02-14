import React from "react";

const HeartIcon = ({ onClickHandler, state }) => {
  return (
    <div
      onClick={onClickHandler}
      className={`icon w-7 h-7  rounded-full shadow-md flex items-center justify-center ${
        state
          ? "bg-pink-200 shadow-pink-200"
          : "bg-slate-200 shadow-slate-200  hover:bg-pink-200 transition-all duration-300 hover:shadow-pink-200"
      }`}
    >
      {state ? (
        <svg
          className="w-5 h-5 fill-[#ff2581] hover:animate-pulse duration-300"
          viewBox="0 0 512 512"
          width="100"
          title="heart"
        >
          <path
            className="stroke-[#ff2581]"
            d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
          />
        </svg>
      ) : (
        <>
          <svg
            className="heart-main svg"
            viewBox="0 0 512 512"
            width="100"
            title="heart"
          >
            <path
              className="path"
              d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
            />
          </svg>
          <svg
            className="heart-background svg"
            viewBox="0 0 512 512"
            width="100"
            title="heart"
          >
            <path
              className="path"
              d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
            />
          </svg>
        </>
      )}
    </div>
  );
};

export default HeartIcon;
