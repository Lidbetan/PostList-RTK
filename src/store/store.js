import { configureStore } from "@reduxjs/toolkit";
import { postsSlice, usersSlice } from "../features/slices";

export const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
    users: usersSlice.reducer
  },
});
