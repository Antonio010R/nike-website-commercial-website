import { HeartIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFavList,
  selectFavState,
  setCloseFavourites,
} from "../redux/slices/favSlice";
import FavItem from "./FavItem";

const Favourites = () => {
  const isFavState = useSelector(selectFavState);
  const favList = useSelector(selectFavList);
  const dispatch = useDispatch();
  const onFavToggle = () => {
    dispatch(setCloseFavourites(false));
  };
  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0  blur-effect-theme opacity-100 z-[200] transition-all duration-300 ${
        isFavState
          ? "visible translate-x-0 opacity-100"
          : "invisible translate-x-8 opacity-0"
      } `}
    >
      <div className="blur-effect-theme top-0 bottom-0 absolute right-0 max-w-xl w-full duration-500">
        <div className="w-full flex items-center justify-between bg-white h-11 px-4 ">
          <div className="flex items-center gap-4 lg:gap-3 md:gap-2 sm:gap-1">
            <HeartIcon className="h-6 w-6 text-pink-500" />
            <h4 className="text-base font-medium text-slate-900">Favourites</h4>
          </div>

          <div className="flex items-center">
            <button
              type="button"
              onClick={onFavToggle}
              className=" rounded bg-theme-cart active:scale-90 p-0.5 transition-all "
            >
              <XMarkIcon className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
        <div className="p-4 grid grid-cols-2  gap-2 sm:grid-cols-1 sm:gap-4 transition-all duration-300">
          {console.log("hello", favList)}
          {favList.map((favItem, index) => {
            if (index + 1 === favList.length && index % 2 === 0) {
              return <FavItem key={favItem.id} item={favItem} last/>;
            } else {
              return <FavItem key={favItem.id} item={favItem} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Favourites;
