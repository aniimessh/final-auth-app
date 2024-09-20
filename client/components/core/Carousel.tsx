import { View, Dimensions, Image } from "react-native";
import React, { useEffect } from "react";
import Carousel from "react-native-reanimated-carousel";
import { useDispatch, useSelector } from "react-redux";
import { getBanner } from "@/redux/slices/bannerSlice";

const width = Dimensions.get("window").width;
const bannerItem = ({ item }: { item: object }) => {
  return (
    <View className="p-4">
      <Image
        source={{ uri: item?.imgUrl }}
        className="w-full h-full rounded-lg"
      />
    </View>
  );
};

export const SkeletonBanner = () => {
  return (
    <View className="p-4 h-[200px] w-full">
      <View className="h-full bg-gray-500/10 rounded-lg" />
    </View>
  );
};

const CarouselComponent = () => {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const dispatch = useDispatch<any>();
  const { banner, status } = useSelector(
    (state: { banner: { banner: []; status: string } }) => state.banner
  );

  useEffect(() => {
    dispatch(getBanner("home"));
  }, [dispatch]);
  return (
    <View>
      {status === "loading" && <SkeletonBanner />}
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={banner.banner}
        scrollAnimationDuration={2000}
        renderItem={bannerItem}
      />
    </View>
  );
};

export default CarouselComponent;
