import { configureStore } from "@reduxjs/toolkit";
import application from "../features/applicationSlice";
import user from "../features/userSlice";
import category from "../features/categorySlice";

export const store = configureStore({
  reducer: {
    category,
    application,
    user,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
