import { combineReducers } from "redux";
import cartSlice from "../slices/cartSlice";
import FavSlice from "../slices/favSlice";

export const rootReducer = combineReducers({
  cart: cartSlice,
  favourite: FavSlice,
});
