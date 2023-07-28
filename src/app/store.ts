import { configureStore } from "@reduxjs/toolkit";
import application from "../features/applicationSlice";
import user from "../features/userSlice";
import category from "../features/categorySlice";
import cloth from "../features/clothSlice";
import cart from '../features/cartSlice'

export const store = configureStore({
  reducer: {
    cart,
    category,
    application,
    user,
    cloth,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
