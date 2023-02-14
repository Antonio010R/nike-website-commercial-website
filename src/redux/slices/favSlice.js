import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favState: false,
  favList: [],
};

const FavSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    setOpenFavourites: (state, action) => {
      state.favState = action.payload;
    },
    setCloseFavourites: (state, action) => {
      state.favState = action.payload;
    },
    addToFavList: (state, action) => {
      state.favList.push(action.payload);
    },
    removeFromFavList: (state, action) => {
      const temp = state.favList.filter(
        (favItem) => favItem.id !== action.payload.id
      );
      state.favList = temp;
    },
  },
});

export const {
  setOpenFavourites,
  setCloseFavourites,
  addToFavList,
  removeFromFavList,
} = FavSlice.actions;

export const selectFavState = (state) => state.favourite.favState;
export const selectFavList = (state) => state.favourite.favList;

export default FavSlice.reducer;
