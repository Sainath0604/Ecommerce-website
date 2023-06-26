import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./Reducer";

const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});

export default store;
