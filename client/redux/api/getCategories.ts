import axios from "axios";

export const getCategoriesAPI = async () => {
  try {
    const response = await axios.get(
      `${process.env.EXPO_PUBLIC_API_URL}api/v1/const/get-category`
    );
    return response.data;
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  } catch (error: any) {
    return { error: true, message: error.message };
  }
};
