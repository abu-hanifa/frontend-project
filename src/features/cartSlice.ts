import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  status: true,
};

export const getCart = createAsyncThunk("add/cloth", async (_, thunkAPI) => {
  try {
    const res = await fetch(`http://localhost:4000/user-cart`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${thunkAPI.getState().application.token}`,
      },
    });

    const json = await res.json();
    console.log(json);
    return json;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const addClothInCart = createAsyncThunk(
  "add/cloth",
  async ({ id, mySize }, thunkAPI) => {
    try {
      console.log(id, mySize);
      const res = await fetch(`http://localhost:4000/cart-add/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
        },
        body: JSON.stringify({
          mySize,
        }),
      });

      const json = await res.json();
      console.log(json);
      return json;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const minusClothInCart = createAsyncThunk(
  "minus/cloth",
  async ({ id, mySize }, thunkAPI) => {
    try {
      console.log(id, mySize);
      const res = await fetch(`http://localhost:4000/cart-minus/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
        },
        body: JSON.stringify({
          mySize,
        }),
      });

      const json = await res.json();
      console.log(json);
      return json;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const removeClothCart = createAsyncThunk(
  "remove/cloth",
  async ({ id, mySize }, thunkAPI) => {
    try {
      console.log(id, mySize);
      const res = await fetch(`http://localhost:4000/cart-remove/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
        },
        body: JSON.stringify({
          mySize,
        }),
      });

      const json = await res.json();
      console.log(json);
      return json;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCart.fulfilled, (state, action) => {
        state.cart = action.payload;
        state.status = false;
      })
      .addCase(addClothInCart.pending, (state, action) => {})
      .addCase(removeClothCart.pending, (state, action) => {})
      .addCase(minusClothInCart.pending, (state, action) => {});
  },
});

export default cartSlice.reducer;
