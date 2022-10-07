import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const fileSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    setFiles: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setFiles } = fileSlice.actions;

export const selectFiles = (state) => state.files.value;

export default fileSlice.reducer;
