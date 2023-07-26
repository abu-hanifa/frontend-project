import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createImg } from "./types";

const initialState = {
  cloths: [],
};

export const createProduct = createAsyncThunk<ReturnType<any>, createImg>(
  "products/create",
  async ({ name, description, price, category, image }, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("img", image[0]);
      formData.append("img", image[1]);
      formData.append("img", image[2]);
      formData.append("img", image[3]);
      formData.append("img", image[4]);
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);

      const res = await fetch("http://localhost:4000/products", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
        },
      });

      const data = await res.json();
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
