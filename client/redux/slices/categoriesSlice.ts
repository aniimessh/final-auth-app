import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategoriesAPI } from "../api/getCategories";

export const getCategories = createAsyncThunk("getCategories", async () => {
  const response = await getCategoriesAPI();
  if (!response) {
    return "Error while fetching categories";
  }
  return response;
});

const initialState = {
  categories: [],
  status: "idle",
  message: "",
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.status = "success";
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.error.message ?? "";
      });
  },
});

export default categoriesSlice.reducer;
