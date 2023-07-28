import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

const initialState = {
  clothes: [],
  status: false,
};

export const getUserFavorites = createAsyncThunk<
  ReturnType<typeof String>,
  any,
  { state: RootState }
>("favorite/fetchByIdFavorite", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4000/favorites", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${thunkAPI.getState().application.token}`,
      },
    });
    const json = await res.json();
    if (json.error) {
      return thunkAPI.rejectWithValue(json.error);
    }
    return json;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const addFavorite = createAsyncThunk<
  ReturnType<typeof String>,
  any,
  { state: RootState }
>("favorite/fetchAddFavorite", async (id, thunkAPI) => {
  try {
    const res = await fetch(`http://localhost:4000/favorites/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${thunkAPI.getState().application.token}`,
      },
    });
    const json = await res.json();
    if (json.error) {
      return thunkAPI.rejectWithValue(json.error);
    }
    return json;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUserFavorites.pending, (state) => {
        state.clothes = [];
        state.status = true;
      })
      .addCase(getUserFavorites.rejected, (state) => {
        state.clothes = [];
        state.status = false;
      })
      .addCase(getUserFavorites.fulfilled, (state, action: any) => {
        state.clothes = action.payload;
        state.status = false;
      })
      .addCase(addFavorite.pending, (state) => {
        state.status = true;
      })
      .addCase(addFavorite.rejected, (state) => {
        state.status = false;
      })
      .addCase(addFavorite.fulfilled, (state, action: any) => {
        state.status = false;
      });
  },
});

// export const { } = userSlice.actions;

export default favoriteSlice.reducer;
