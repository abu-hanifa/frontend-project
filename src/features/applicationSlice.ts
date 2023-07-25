import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { State } from "./types";

const initialState: State = {
  error: null,
  signingUp: false,
  signingIn: false,
  token: localStorage.getItem("token"),
};

export const authSignUp = createAsyncThunk<
  ReturnType<typeof String>,
  { name: string; login: string; password: string },
  { state: RootState }
>("auth/signup", async ({ name, login, password }, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4000/registration", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        login,
        password,
      }),
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

export const authSignIn = createAsyncThunk<
  ReturnType<typeof String>,
  { login: string; password: string },
  { state: RootState }
>("auth/signin", async ({ login, password }, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        login,
        password,
      }),
    });
    const token = await res.json();
    if (token.error) {
      return thunkAPI.rejectWithValue(token.error);
    }
    localStorage.setItem("token", token);
    return token;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const authSignOut = createAsyncThunk(
  "auth/signout",
  async (_, thunkAPI) => {
    try {
      localStorage.removeItem("token");
      window.location.reload();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(authSignUp.pending, (state) => {
        state.signingUp = true;
      })
      .addCase(authSignUp.rejected, (state, action: any) => {
        state.signingUp = false;
        state.error = action.payload;
      })
      .addCase(authSignUp.fulfilled, (state) => {
        state.signingUp = false;
        state.error = null;
      })
      .addCase(authSignIn.pending, (state) => {
        state.signingUp = true;
      })
      .addCase(authSignIn.rejected, (state, action: any) => {
        state.signingUp = false;
        state.error = action.payload;
      })
      .addCase(authSignIn.fulfilled, (state, action) => {
        state.signingUp = false;
        state.error = null;
        state.token = action.payload;
      });
  },
});

// export const { a } = applicationSlice.actions;

export default applicationSlice.reducer;
