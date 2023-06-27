import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    items: [],
  },

  reducers: {
    addToBasket: (state, action) => {
      state.items.push(action.payload);
    },
    emptyBasket: (state) => {
      state.items = [];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload}) as it's not in the basket!`
        );
      }
    },
  },
});

export const { addToBasket, emptyBasket, removeFromBasket } =
  basketSlice.actions;

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => {
    const itemPrice = parseFloat(item.price);
    if (!isNaN(itemPrice)) {
      return itemPrice + amount;
    }
    return amount;
  }, 0);

export default basketSlice.reducer;
