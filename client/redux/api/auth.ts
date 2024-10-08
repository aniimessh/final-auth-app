import axios from "axios";

export const sendOTPAPI = async (payload: string) => {
  try {
    const payloadData = {
      email: payload,
    };
    const response = await axios.post(
      `${process.env.EXPO_PUBLIC_API_URL}api/v1/auth/send-otp`,
      payloadData
    );
    return response.data;
  } catch (error) {
    return { error: true, message: "Something went wrong!" };
  }
};

export const verifyOTPAPI = async (payload: { email: string; otp: string }) => {
  try {
    const response = await axios.post(
      `${process.env.EXPO_PUBLIC_API_URL}api/v1/auth/verify-otp`,
      payload
    );
    return response.data;
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  } catch (error: any) {
    return { error: true, message: error.message ?? "Something went wrong!" };
  }
};
