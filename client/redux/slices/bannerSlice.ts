import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBannerAPI } from "../api/getBanner";

export const getBanner = createAsyncThunk("getBanner", async (slug: string) => {
  const response = await getBannerAPI(slug);
  if (!response) {
    return "Error while fetching categories";
  }
  return response;
});

const initialState = {
  banner: [],
  status: "idle",
  message: "",
};

const bannerSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBanner.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getBanner.fulfilled, (state, action) => {
        state.banner = action.payload;
        state.status = "success";
      })
      .addCase(getBanner.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.error.message ?? "";
      });
  },
});

export default bannerSlice.reducer;
