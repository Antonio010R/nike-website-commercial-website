import React from "react";
import { useDispatch } from "react-redux";
import { ChevronDoubleLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { setClearCartItems } from "../../redux/slices/cartSlice";

const CartCount = ({ onCartToggle, totalQuantity }) => {
  const dispatch = useDispatch();
  const onClearCart = () => {
    dispatch(setClearCartItems());
  };
  return (
    <div className="bg-white h-11 flex items-center justify-between px-3 sticky top-0 left-0 w-full">
      <div className="flex items-center gap-3">
        <div
          className="flex items-center justify-center"
          onClick={onCartToggle}
        >
          <ChevronDoubleLeftIcon className="w-5 h-5 cursor-pointer text-slate-900 hover:text-orange-500" />
        </div>
        <div className="flex items-center justify-center">
          <h4 className="text-base font-medium text-slate-900">
            Your Cart
            <span className="bg-theme-cart rounded text-xs px-1 py-0.5 text-slate-100 font-normal mx-2">
              ({totalQuantity} items)
            </span>
          </h4>
        </div>
      </div>
      <div className="flex items-center">
        <button
          type="button"
          onClick={onClearCart}
          className=" rounded bg-theme-cart active:scale-90 p-0.5 transition-all "
        >
          <XMarkIcon className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
};

export default CartCount;
