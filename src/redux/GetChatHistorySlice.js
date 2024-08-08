// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  ApiBaseUrl,
  getChatHistoryApi,
  getProjectListApi,
} from "../utils/Constants";

export const getChatHistory = createAsyncThunk(
  "getChatHistory",
  async (payload) => {
    try {
      console.log("Response Chat History", payload);
      const token = localStorage.getItem("token");
      console.log("Token", token);
      const id = payload.id;
      const config = {
        headers: { Authorization: token },
      };

      const response = await axios.get(
        ApiBaseUrl + getChatHistoryApi + "?projectId=" + id,
        config
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

const GetChatHistorySlice = createSlice({
  name: "chatHistoryReducer",

  initialState: {
    isLoading: false,
    data: null,
  },
  reducers: {
    clearChatHistoryData: (state) => {
      state.data = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getChatHistory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getChatHistory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getChatHistory.rejected, (state) => {
        state.isError = false;
      });
  },
});

export const { clearChatHistoryData } = GetChatHistorySlice.actions;
export default GetChatHistorySlice.reducer;
