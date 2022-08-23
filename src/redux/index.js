import { configureStore } from "@reduxjs/toolkit";

import photoReducer from "./photos";

const store = configureStore({
  reducer: {
    photo: photoReducer,
  },
});

export default store;
