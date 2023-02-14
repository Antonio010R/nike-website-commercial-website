import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/logo.png";
import {
  selectCartTotalQuantity,
  setOpenCart,
} from "../redux/slices/cartSlice";
import { setOpenFavourites } from "../redux/slices/favSlice";

const NavBar = () => {
  const [navState, setNavState] = useState(false);
  const dispatch = useDispatch();
  const totalQuantity = useSelector(selectCartTotalQuantity);

  const onScroll = () => {
    // console.log(window.scrollY);
    if (window.scrollY > 10) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  const onFavToggle = () => {
    dispatch(setOpenFavourites(true));
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <div
      className={`${
        navState
          ? "fixed top-0 right-0 left-0 h-[9vh] flex items-center justify-center opacity-100 z-[120] blur-effect-theme transition-all duration-300"
          : "absolute top-7 left-0 right-0 opacity-100 z-50"
      }`}
    >
      <nav className="flex items-center justify-between nike-container">
        <div className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className={`w-16 h-auto hover:scale-110 duration-300 ${
              navState ? "filter brightness-0" : ""
            }`}
          />
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center active:scale-90 transition-all duration-300 hover:scale-110">
            <MagnifyingGlassIcon
              className={`icon-style ${navState ? "text-black" : ""}`}
            />
          </div>
          <div
            onClick={onFavToggle}
            className="flex items-center active:scale-90 transition-all duration-300  hover:scale-110"
          >
            <HeartIcon
              className={`icon-style ${navState ? "text-black" : ""}`}
            />
          </div>
          <div className="flex items-center">
            <button
              type="button"
              onClick={onCartToggle}
              className="border-none outline-none active:scale-90 transition-all duration-300 relative "
            >
              <ShoppingBagIcon
                className={`icon-style hover:scale-110 ${
                  navState ? "text-black" : ""
                }`}
              />
              <span
                className={`absolute -top-2 -right-2  ${
                  navState
                    ? "bg-slate-900 text-slate-100 shadow shadow-slate-900"
                    : "bg-white text-slate-900 shadow shadow-slate-100"
                } w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300`}
              >
                {totalQuantity}
              </span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
