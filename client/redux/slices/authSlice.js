import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sendOTPAPI } from "../api/signupLogin";

export const sendOTP = createAsyncThunk("sendOTP", async (payload) => {
  const response = await sendOTPAPI(payload);
  console.log(response);
  if (!response) {
    return "Error while sending OTP";
  }
  return response;
});

const initialState = {
  otpsent: false,
  isVerified: false,
  data: null,
  status: "idle",
  message: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    // send-otp
    builder.addCase(sendOTP.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(sendOTP.fulfilled, (state, action) => {
      state.data = action?.payload?.data;
      state.status = "success";
      state.otpsent = true;
      state.message = action?.payload?.message;
    });
    builder.addCase(sendOTP.rejected, (state, action) => {
      state.status = "failed";
      state.data = null;
      state.message = action.payload?.message;
    });
  },
  // verify-otp
  reducers: {},
});

export default authSlice.reducer;
