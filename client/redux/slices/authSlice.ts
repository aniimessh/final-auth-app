import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sendOTPAPI, verifyOTPAPI } from "../api/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export const sendOTP = createAsyncThunk("sendOTP", async (payload: string) => {
  const response = await sendOTPAPI(payload);
  console.log("response", response);
  if (!response) {
    return "Error while sending OTP";
  }
  return response;
});

export const verifyOTP = createAsyncThunk(
  "verifyOTP",
  async (payload: { email: string; otp: string }) => {
    const response = await verifyOTPAPI(payload);
    if (!response) {
      return "Error while verifying OTP";
    }
    router.push("/(tabs)/");

    return response;
  }
);

export const checkJWTToken = createAsyncThunk("checkJWTToken", async () => {
  try {
    // await AsyncStorage.clear();
    const jwtToken = await AsyncStorage.getItem("jwt");
    return jwtToken !== null;
  } catch (error) {
    console.error("Error retrieving JWT token from AsyncStorage:", error);
    return false;
  }
});

const initialState = {
  otpsent: false,
  isVerified: false,
  data: null,
  status: "idle",
  message: "",
  skipFornow: false
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
      state.message = action?.payload?.message;
    });
    // verify-otp
    builder.addCase(verifyOTP.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(verifyOTP.fulfilled, async (state, action) => {
      console.log("payload data", action.payload);
      state.data = action.payload.data;
      state.status = "success";
      state.isVerified = true;
      state.message = action.payload.message;

      try {
        // Save the JWT token to AsyncStorage
        // await AsyncStorage.clear();
        await AsyncStorage.setItem("jwt", action.payload.jwt);
      } catch (error) {
        console.error("Error saving JWT token to AsyncStorage:", error);
      }
    });
    builder.addCase(verifyOTP.rejected, (state, action) => {
      state.status = "failed";
      state.data = null;
      state.message = action?.payload?.message;
    });

    // checkAuth
    builder.addCase(checkJWTToken.fulfilled, (state, action) => {
      state.isVerified = action.payload;
    });
  },
  reducers: {
    logout: (state) => {
      state.data = null;
      state.isVerified = false;
      state.status = "idle";
      state.message = "";
      state.otpsent = false;
      try {
        AsyncStorage.removeItem("jwt");
      } catch (error) {
        console.error("Error removing JWT token from AsyncStorage:", error);
      }
    },
    skip: (state) => {
      state.skipFornow = true
    }
  },
});
export const { logout, skip } = authSlice.actions;
export default authSlice.reducer;
