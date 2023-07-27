import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createImg } from "./types";

const initialState = {
  cloths: [],
};

export const createCloth = createAsyncThunk<ReturnType<any>, createImg>(
  "cloth/create",
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

      const res = await fetch("http://localhost:4000/cloth", {
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

export const fetchCloth = createAsyncThunk<ReturnType<any>, createImg>('fetch/cloth', async (data, thunkAPI) => {
  try {
    const res = await fetch('http://localhost:4000/cloth')
    const cloth = await res.json()

    if(cloth.error) {
      return thunkAPI.rejectWithValue(cloth.error)
    }
    return cloth
    
  } catch (error) {
    thunkAPI.rejectWithValue(error)
  }
})

export const fetchCategoryCloth = createAsyncThunk<ReturnType<any>, createImg>('fetch/category/cloth', async (id, thunkAPI) => {
  try {
    const res = await fetch(`http://localhost:4000/cloth/category/${id}`)
  const cloth = res.json()
  

  return cloth
  } catch (error) {
    thunkAPI.rejectWithValue(error)
  }
  
})

const clothsSlice = createSlice({
  name: "cloths",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(createCloth.fulfilled, (state, action) => {
      state.cloths.push(action.payload);
    })
    .addCase(fetchCloth.fulfilled, (state, action) => {
      state.cloths = action.payload
    })
    .addCase(fetchCategoryCloth.fulfilled, (state, action) => {
      state.cloths = action.payload
    })
  },
});

export default clothsSlice.reducer;
