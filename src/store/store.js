import { configureStore } from "@reduxjs/toolkit";
import { postsSlice } from "../features/slices";

export const store = configureStore({
  reducer: {
    posts: postsSlice.reducer
  },
});
