// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, getProjectListApi } from "../utils/Constants";

export const getProjectList = createAsyncThunk("getProjectList", async () => {
  try {
    const token = localStorage.getItem("token");
    console.log("Token", token);
    const config = {
      headers: { Authorization: token },
    };

    const response = await axios.get(ApiBaseUrl + getProjectListApi, config);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

const GetProjectListSlice = createSlice({
  name: "getProjectListReducer",

  initialState: {
    isLoading: false,
    data: null,
  },
  reducers: {
    clearGetProjectListData: (state) => {
      state.data = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProjectList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProjectList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getProjectList.rejected, (state) => {
        state.isError = false;
      });
  },
});

export const { clearDataCreateProject } = GetProjectListSlice.actions;
export default GetProjectListSlice.reducer;
