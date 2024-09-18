import axios from "axios";

export const sendOTPAPI = async (payload) => {
  try {
    const payloadData = {
      email: payload,
    };
    console.log("data", payload);
    const response = await axios.post(
      `${process.env.EXPO_PUBLIC_API_URL}api/v1/auth/send-otp`,
      payloadData
    );
    return response.data;
  } catch (error) {
    return { error: true, message: "Something went wrong!" };
  }
};
