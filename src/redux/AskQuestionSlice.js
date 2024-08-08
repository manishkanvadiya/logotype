// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  ApiBaseUrl,
  askQuestionApi,
  createProjectApi,
  otpApi,
  signupApi,
} from "../utils/Constants";

export const askQuestion = createAsyncThunk("askQuestion", async (payload) => {
  try {
    const token = localStorage.getItem("token");
    console.log("Token", token);
    const config = {
      headers: { Authorization: token },
    };
    console.log("payload Question ===>", payload);

    const response = await axios.post(
      ApiBaseUrl + askQuestionApi,
      payload,
      config
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

const AskQuestionSlice = createSlice({
  name: "askQuestionReducer",

  initialState: {
    isLoading: false,
    data: null,
  },
  reducers: {
    clearAskQuestionProject: (state) => {
      state.data = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(askQuestion.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(askQuestion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(askQuestion.rejected, (state) => {
        state.isError = false;
      });
  },
});

export const { clearAskQuestionProject } = AskQuestionSlice.actions;
export default AskQuestionSlice.reducer;
