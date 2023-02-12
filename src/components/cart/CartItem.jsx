import React from "react";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import {
  setDecreaseItemQuantity,
  setIncreaseItemQuantity,
  setRemoveItemFromCart,
} from "../../redux/slices/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { id, title, img, text, color, shadow, price, cartQuantity } = item;
  const onRemoveItem = () => {
    dispatch(setRemoveItemFromCart(item));
  };

  const onIncreaseItem = () => {
    dispatch(setIncreaseItemQuantity(item));
  };

  const onDecreaseItem = () => {
    dispatch(setDecreaseItemQuantity(item));
  };
  return (
    <div className="flex items-center justify-between w-full px-5">
      <div className="flex items-center gap-5">
        <div
          className={`bg-gradient-to-b ${color} ${shadow} relative rounded p-3 hover:scale-105 transition-all ease-in-out flex items-center`}
        >
          <img
            src={img}
            alt={`img/item/${id}`}
            className="w-36 h-auto object-contain lg:w-28"
          />
          <div className="absolute right-1 top-1 blur-theme-effect bg-white/80 text-black text-xs px-1 rounded">
            ${price}
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center leading-none">
            <h3 className="font-medium text-lg text-slate-900 lg:text-sm">
              {title}
            </h3>
            <p className="text-sm text-slate-800 lg:text-xs">{text}</p>
          </div>
          <div className="flex items-center justify-around w-full">
            <button
              type="button"
              onClick={onDecreaseItem}
              className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"
            >
              <MinusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white " />
            </button>
            <div className="bg-theme-cart rounded text-white font-medium lg:text-xs w-7 h-6 lg:h-5 lg:w-6 flex items-center justify-center">
              {cartQuantity}
            </div>
            <button
              type="button"
              onClick={onIncreaseItem}
              className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"
            >
              <PlusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white " />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5">
        <div className="flex items-center justify-center">
          <h4 className="text-lg lg:text-base text-slate-900 font-medium">
            ${price * cartQuantity}
          </h4>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="button"
            onClick={onRemoveItem}
            className="bg-theme-cart rounded p-1 lg:p-0.5 flex items-center justify-center"
          >
            <TrashIcon className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
