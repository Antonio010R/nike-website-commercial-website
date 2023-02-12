import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../slices/cartSlice";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: {
//     cart: CartSlice,
//   },
//   middleware: [logger],
// });
const store = configureStore({
  reducer: persistedReducer,
  middleware: [logger],
});
export const persistor = persistStore(store);

export default store;
