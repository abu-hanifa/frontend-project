import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

const initialState = {
  user: {},
  status: false,
};

export const getUser = createAsyncThunk<
  ReturnType<typeof String>,
  any,
  { state: RootState }
>("users/fetchUserById", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4000/user", {
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

export const updateUser = createAsyncThunk<
  ReturnType<typeof String>,
  any,
  { state: RootState }
>("users/update", async ({ name, subName, phone, address, email, password, country, city, zipCode }, thunkAPI) => {
  try {


    const res = await fetch("http://localhost:4000/user/update", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${thunkAPI.getState().application.token}`,
      },
      body: JSON.stringify(
        {
          name,
          subName,
          phone,
          address,
          email,
          password,
          country,
          city,
          zipCode
        }
      )


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

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUser.pending, (state) => {
        state.user = {};
        state.status = true;
      })
      .addCase(getUser.rejected, (state) => {
        state.user = {};
        state.status = false;
      })
      .addCase(getUser.fulfilled, (state, action: any) => {
        state.user = action.payload;
        state.status = false;
      })

      // изменение данных
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = false;
      })

  },
});

// export const { } = userSlice.actions;

export default userSlice.reducer;
