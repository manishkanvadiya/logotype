// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  ApiBaseUrl,
  createProjectApi,
  otpApi,
  signupApi,
} from "../utils/Constants";

export const createProject = createAsyncThunk(
  "createProject",
  async (payload) => {
    try {
      const token = localStorage.getItem("token");
      console.log("Token", token);
      const config = {
        headers: { Authorization: token },
      };
      console.log("payload otp ===>", payload);

      const response = await axios.post(
        ApiBaseUrl + createProjectApi,
        payload,
        config
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

const CreateProjectSlice = createSlice({
  name: "createProjectReducer",

  initialState: {
    isLoading: false,
    data: null,
  },
  reducers: {
    clearDataCreateProject: (state) => {
      state.data = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProject.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(createProject.rejected, (state) => {
        state.isError = false;
      });
  },
});

export const { clearDataCreateProject } = CreateProjectSlice.actions;
export default CreateProjectSlice.reducer;
