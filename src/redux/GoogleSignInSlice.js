// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, googleLoginApi } from "../utils/Constants";

export const googleLogin = createAsyncThunk("googleLogin", async (payload) => {
  try {
    const token = localStorage.getItem("token");

    console.log("payload Question ===>", payload);

    const response = await axios.post(ApiBaseUrl + googleLoginApi, payload);
    console.log("gooogggggggg ===>", response.data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

const GoogleLoginSlice = createSlice({
  name: "googleLoginReducer",

  initialState: {
    isLoading: false,
    data: null,
  },
  reducers: {
    clearGoogleLoginData: (state) => {
      state.data = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(googleLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(googleLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(googleLogin.rejected, (state) => {
        state.isError = false;
      });
  },
});

export const { clearGoogleLoginData } = GoogleLoginSlice.actions;
export default GoogleLoginSlice.reducer;
