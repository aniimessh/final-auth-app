import { View, Dimensions, Image } from "react-native";
import React from "react";
import Carousel from "react-native-reanimated-carousel";
import { bannerImage } from "@/constants/Banner";

const width = Dimensions.get("window").width;
const bannerItem = ({ item }: { item: string }) => {
  return <Image source={{ uri: item }} className="w-full h-full " />;
};

const CarouselComponent = () => {
  return (
    <View>
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={bannerImage}
        scrollAnimationDuration={2000}
        renderItem={bannerItem}
      />
    </View>
  );
};

export default CarouselComponent;
