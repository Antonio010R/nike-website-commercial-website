import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  cartState: false,
  cartItems: [],
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },

    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },

    setAddItemToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success(
          `${action.payload.title} is now increased to ${state.cartItems[itemIndex].cartQuantity}`
        );
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp);
        toast.success(`${action.payload.title} added to Cart`);
      }
    },

    setRemoveItemFromCart: (state, action) => {
      const remainingItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = remainingItems;
      toast.success(`${action.payload.title} removed from Cart`);
    },

    setIncreaseItemQuantity: (state, action) => {
      state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          item.cartQuantity += 1;
          toast.success(
            `${item.title} is now increased to ${item.cartQuantity}`
          );
        }
      });
    },

    setDecreaseItemQuantity: (state, action) => {
      state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          if (item.cartQuantity > 1) {
            item.cartQuantity -= 1;
            toast.success(
              `${item.title} is now decreased to ${item.cartQuantity}`
            );
          } else if (item.cartQuantity === 1) {
            const remainingItems = state.cartItems.filter(
              (item) => item.id !== action.payload.id
            );
            state.cartItems = remainingItems;
            toast.success(`${action.payload.title} removed from Cart`);
          }
        }
      });
    },

    setClearCartItems: (state, action) => {
      let totalNoCartItems = 0;
      state.cartItems.map((item) => {
        console.log(item.cartQuantity);
        totalNoCartItems += item.cartQuantity;
      });
      state.cartItems = [];
      toast.success(`${totalNoCartItems} items cleared in Cart`);
    },

    setGetTotal: (state, action) => {
      let { totalAmount, totalQuantity } = state.cartItems.reduce(
        (cartObj, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const totalPrice = price * cartQuantity;
          cartObj.totalAmount += totalPrice;
          cartObj.totalQuantity += cartQuantity;
          return cartObj;
        },
        {
          totalAmount: 0,
          totalQuantity: 0,
        }
      );

      state.cartTotalAmount = totalAmount;
      state.cartTotalQuantity = totalQuantity;
    },
  },
});

export const {
  setOpenCart,
  setCloseCart,
  setAddItemToCart,
  setRemoveItemFromCart,
  setIncreaseItemQuantity,
  setDecreaseItemQuantity,
  setClearCartItems,
  setGetTotal,
} = CartSlice.actions;
export const selectCartState = (state) => state.cart.cartState;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartTotalAmount = (state) => state.cart.cartTotalAmount;
export const selectCartTotalQuantity = (state) => state.cart.cartTotalQuantity;

export default CartSlice.reducer;
