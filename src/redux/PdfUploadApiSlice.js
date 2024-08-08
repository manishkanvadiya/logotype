// src/redux/NannyproSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl } from "../utils/Constants";

// Async thunk for fetching data
export const uploadFile = createAsyncThunk("uploadFile", async (image) => {
  const token = localStorage.getItem("Token");

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "multipart/form-data",
  };
  const formData = new FormData();
  formData.append("file", image);

  try {
    const url = "http://api.youraiapp.io/file-upload-ai";

    const response = await axios.post(url, formData, { headers }); // Replace with your API endpoint
    alert(response.data.result);
    console.log("Response ===>", response.data);
    return response.data;
  } catch (error) {
    console.log("Upload PDF Error ===> ", error.message);
    throw error;
  }
});

const uploadFileSlice = createSlice({
  name: "uploadFileReducer",
  initialState: {
    data: null,
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadFile.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(uploadFile.fulfilled, (state, action) => {
        state.loading = "idle";
        state.data = action.payload;
        state.error = null;
      })
      .addCase(uploadFile.rejected, (state, action) => {
        console.log("Upload PDF Error ===> ", action.payload);
        state.loading = "idle";
        state.error = action.error.message;
      });
  },
});

export default uploadFileSlice.reducer;
