import axios from "axios";

export const getBannerAPI = async (slug: string) => {
  try {
    const response = await axios.get(
      `${process.env.EXPO_PUBLIC_API_URL}api/v1/const/get-banner?slug=${slug}`
    );
    return response.data;
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  } catch (error: any) {
    console.log(error.message);
  }
};
