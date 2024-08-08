// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, otpApi, signupApi } from "../utils/Constants";

export const otpVerification = createAsyncThunk(
  "otpVerification",
  async (payload) => {
    try {
      const config = {
        headers: {},
      };
      console.log("payload otp ===>", payload);

      const response = await axios.put(ApiBaseUrl + otpApi, payload, config);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

const otpVerificationSlice = createSlice({
  name: "otpVerificationReducer",

  initialState: {
    isLoading: false,
    data: null,
  },
  reducers: {
    clearDataOtp: (state) => {
      state.data = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(otpVerification.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(otpVerification.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(otpVerification.rejected, (state) => {
        state.isError = false;
      });
  },
});

export const { clearDataOtp } = otpVerificationSlice.actions;
export default otpVerificationSlice.reducer;
