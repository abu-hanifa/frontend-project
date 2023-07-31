import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

export const addClothInCart = createAsyncThunk(
  'add/cloth',
  async ({id, mySize}, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/cart-add/${id}`, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mySize,
      }), 
      })
      const json = await res.json()
      return json
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
) 

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