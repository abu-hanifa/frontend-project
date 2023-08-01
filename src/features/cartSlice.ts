import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: {},
  status: true,
};

export const getCart = createAsyncThunk("get/cloth", async (_, thunkAPI) => {
  try {
    const res = await fetch(`http://localhost:4000/user-cart`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${thunkAPI.getState().application.token}`,
      },
    });

    const json = await res.json();
    return json;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const addClothInCart = createAsyncThunk(
  "add/cloth",
  async ({ id, mySize }, thunkAPI) => {
    try {
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
      return json;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const PlusClothInCart = createAsyncThunk(
  "plus/cloth",
  async ({ id, mySize }, thunkAPI) => {
    try {
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
      return json;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const buyCloth = createAsyncThunk("buy/cloth", async (_, thunkAPI) => {
  try {
    const res = await fetch(`http://localhost:4000/buy`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${thunkAPI.getState().application.token}`,
      },
    });

    const json = await res.json();
    return json;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

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
      .addCase(addClothInCart.fulfilled, (state, action) => {
        state.status = false;
        if (typeof action.payload === "object") {
          state.cart.cart = [...state.cart.cart, action.payload];
        }
      })
      .addCase(removeClothCart.fulfilled, (state, action) => {
        const { id, mySize } = action.meta.arg;
        const newCart = state.cart.cart.filter((item) => {
          if (item.cloth._id === id && item.size === mySize) {
            return false;
          }
          return true;
        });
        state.cart.cart = newCart;
      })
      .addCase(minusClothInCart.fulfilled, (state, action) => {
        const { id, mySize } = action.meta.arg;

        const { cloth } = state.cart.cart.find((item) => item.cloth._id === id);
        const { inStock } = cloth.size.find((item) => item.size === mySize);
        console.log(2);

        const newCart = state.cart.cart.map((item) => {
          if (item.cloth._id === id && item.size === mySize) {
            console.log(3);
            console.log(inStock, item.amount);
            if (inStock > item.amount) {
              console.log(inStock, item.amount);

              item.amount--;
            }
            return item;
          }
          return item;
        });

        state.cart.cart = newCart;
      })
      .addCase(PlusClothInCart.fulfilled, (state, action) => {
        const { id, mySize } = action.meta.arg;

        const { cloth } = state.cart.cart.find((item) => item.cloth._id === id);
        const { inStock } = cloth.size.find((item) => item.size === mySize);

        const newCart = state.cart.cart.map((item) => {
          if (item.cloth._id === id && item.size === mySize) {
            if (inStock > item.amount) {
              item.amount++;
            }
            return item;
          }
          return item;
        });

        state.cart.cart = newCart;
      })
      .addCase(buyCloth.fulfilled, (state, action) => {
        console.log(1);
        
        state.cart.cart = [];
      });
  },
});

export default cartSlice.reducer;
