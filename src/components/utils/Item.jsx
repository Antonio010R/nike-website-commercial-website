import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useDispatch } from "react-redux";
import { setAddItemToCart, setOpenCart } from "../../redux/slices/cartSlice";

const Item = ({ item, last, ifExists }) => {
  const dispatch = useDispatch();
  const { id, color, shadow, title, text, img, btn, rating, price } = item;
  const onAddToCart = () => {
    const itemToAdd = { id, title, text, img, color, shadow, price };
    dispatch(setAddItemToCart(itemToAdd));
  };

  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  return (
    <div
      className={`relative bg-gradient-to-b ${color} ${shadow} flex group  ${
        ifExists
          ? "md:mb-6 flex-row md:pl-14 sm:pl-6 "
          : " flex-col justify-items-center"
      } items-center justify-center rounded-xl py-10 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105 ${
        last ? "xl:w-1/2 xl:col-span-2 md:w-full md:col-auto" : ""
      }
     
      `}
    >
      <div
        className={`text-slate-200 flex flex-col  ${
          ifExists ? "w-full items-start" : "items-center justify-center"
        }
      `}
      >
        <h3 className="text-xl lg:text-lg md:text-base font-medium filter drop-shadow text-center whitespace-nowrap  ">
          {title}
        </h3>
        <p className="filter drop-shadow text-base md:text-sm font-normal">
          {text}
        </p>

        <div className="flex items-center justify-between w-32 my-2">
          <div className="flex items-center bg-white/80 px-2 py-1 rounded shadow-sm shadow-sky-200">
            <h4 className="text-black text-sm font-medium ">${price}</h4>
          </div>
          <div className="flex items-center gap-1">
            <StarIcon className="icon-style  w-5 h-5 md:w-4 md:h-4" />
            <h4 className="md:text-sm font-normal text-slate-100 ">{rating}</h4>
          </div>
        </div>

        <div className={`flex items-center  ${ifExists ? "gap-8" : "gap-3"}`}>
          <button
            type="button"
            onClick={onAddToCart}
            className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"
          >
            <ShoppingBagIcon className="icon-style text-slate-900 " />
          </button>
          <button
            type="button"
            onClick={() => {
              onAddToCart();
              onCartToggle();
            }}
            className="bg-white/90 blur-effect-theme button-theme p-1 shadow shadow-sky-200 text-black text-sm px-2 py-1"
          >
            {btn}
          </button>
        </div>
      </div>
      <div
        className={` flex items-center mt-5 ${
          ifExists
            ? "absolute top-5 right-2 md:right-8 sm:right-2"
            : "justify-center"
        }`}
      >
        <img
          src={img}
          alt={`img/item-img/${id} `}
          className={`transitions-theme ${
            ifExists
              ? "h-auto w-64 lg:w-56 md:w-72 sm:w-48 -rotate-[35deg] group-hover:rotate-0 "
              : "h-36 w-64 group-hover:-rotate-12 "
          }`}
        />
      </div>
    </div>
  );
};

export default Item;
