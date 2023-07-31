import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      state.cartItems.push(newItem);
    },
  },
});

export const { addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;