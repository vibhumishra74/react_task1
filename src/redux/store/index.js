import { configureStore } from "@reduxjs/toolkit";
import appreducer from "../appSlice";
const store = configureStore({
  reducer: appreducer,
});

export default store;
