import { configureStore } from "@reduxjs/toolkit";
import fileReducer from "../features/counter/fileSlice";

export const store = configureStore({
  reducer: {
    files: fileReducer,
  },
});
