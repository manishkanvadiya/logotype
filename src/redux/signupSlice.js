// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, signupApi } from "../utils/Constants";

export const signupUser = createAsyncThunk("signupUser", async (payload) => {
  try {
    const config = {
      headers: {},
    };
    console.log("payload SignIn/SignUp ===>", payload.type);
    if (payload.type == 1) {
      const response = await axios.post(
        ApiBaseUrl + signupApi,
        payload,
        config
      );
      return response.data;
    } else {
      const response = await axios.post(
        ApiBaseUrl + signupApi,
        payload,
        config
      );
      return response.data;
    }
  } catch (error) {
    throw error.response.data;
  }
});

const signupSlice = createSlice({
  name: "signupReducer",

  initialState: {
    isLoading: false,
    data: null,
  },
  reducers: {
    clearDataSignUp: (state) => {
      state.data = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(signupUser.rejected, (state) => {
        state.isError = false;
      });
  },
});

export const { clearDataSignUp } = signupSlice.actions;
export default signupSlice.reducer;
