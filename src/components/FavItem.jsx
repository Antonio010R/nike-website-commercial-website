import React, { useState } from "react";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import HeartIcon from "./utils/HeartIcon";
import { useDispatch } from "react-redux";
import { removeFromFavList } from "../redux/slices/favSlice";
import { setAddItemToCart } from "../redux/slices/cartSlice";

const FavItem = ({ item }) => {
  const { id, color, shadow, title, text, img, btn, rating, price } = item;
  const [fav, setFav] = useState(true);
  const dispatch = useDispatch();

  const onAddToCart = () => {
    const itemToAdd = { id, title, text, img, color, shadow, price };
    dispatch(setAddItemToCart(itemToAdd));
  };

  const onFavToggle = () => {
    dispatch(removeFromFavList({ ...item }));
    setFav(false);
  };

  return (
    <div
      className={`relative px-3 py-3 bg-gradient-to-b ${color} rounded-lg ${shadow} shadow-md sm:bg-gradient-to-r `}
    >
      <div className="absolute top-3 right-3 ">
        <HeartIcon onClickHandler={onFavToggle} state={fav} />
      </div>

      <div className="flex flex-col items-center justify-around gap-0.5 sm:flex-row transition-all duration-300">
        <div className="w-52 h-32 flex items-center justify-center sm:w-48 xsm:w-40">
          <img className="object-contain" src={img} alt={`img/fav/${id}`} />
        </div>

        <div className="flex flex-col items-center justify-between gap-0.5 sm:items-start">
          <div className="text-slate-100 font-medium xsm:text-sm">{title}</div>

          <div className="text-slate-100 text-sm xsm:text-xs">{text}</div>

          <div className="mt-0.5 flex justify-between w-full">
            <div className="flex gap-3 items-center">
              <button
                type="button"
                onClick={onAddToCart}
                className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"
              >
                <ShoppingBagIcon className="icon-style h-5 w-5 sm:h-4 sm:w-4 text-slate-900 " />
              </button>
              <div className="text-slate-100 text-sm xsm:text-xs">${price}</div>
            </div>

            <div className="flex items-center gap-1">
              <StarIcon className="icon-style  w-5 h-5 md:w-4 md:h-4" />
              <h4 className="md:text-sm font-normal text-slate-100 xsm:text-xs ">
                {rating}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavItem;
