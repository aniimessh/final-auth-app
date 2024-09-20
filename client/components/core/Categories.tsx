import { View, Text, FlatList, Image, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import type { CategoriesData } from "@/constants/Categories";
import { getCategories } from "@/redux/slices/categoriesSlice";
import { useDispatch, useSelector } from "react-redux";

const categoryItem = ({ item }: { item: (typeof CategoriesData)[number] }) => {
  return (
    <View className="items-center mb-3 w-20">
      <Image
        source={{ uri: item.imgUrl }}
        style={{ height: 50, width: 50 }}
        className="rounded-md"
      />
      <Text style={{ marginTop: 5, fontFamily: "Outfit_300Light" }}>
        {item.title.length > 10 ? `${item.title.slice(0, 10)}...` : item.title}
      </Text>
    </View>
  );
};

const SkeletonBanner = () => {
  return (
    <View className="px-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        directionalLockEnabled={true}
        alwaysBounceVertical={false}
        // key={item}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <View
            className="h-14 w-14 bg-gray-500/10 rounded-md mr-4"
            key={item}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const Categories = () => {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const dispatch = useDispatch<any>();
  const { categories, status } = useSelector(
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    (state: { category: any; status: string }) => state.category
  );
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <SafeAreaView>
      <View>
        <Text
          style={{
            fontFamily: "Outfit_400Regular",
            fontSize: 24,
          }}
          className="mb-2 p-3"
        >
          Categories
        </Text>
        {status === "loading" && <SkeletonBanner />}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          directionalLockEnabled={true}
          alwaysBounceVertical={false}
        >
          <FlatList
            alwaysBounceHorizontal
            horizontal
            data={categories?.categories}
            showsHorizontalScrollIndicator={false}
            renderItem={categoryItem}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Categories;
