import { View, Text, FlatList, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { CategoriesData } from "@/constants/Categories";

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

const Categories = () => {
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
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          directionalLockEnabled={true}
          alwaysBounceVertical={false}
        >
          <FlatList
            alwaysBounceHorizontal
            numColumns={Math.ceil(CategoriesData.length / 2)}
            data={CategoriesData}
            showsHorizontalScrollIndicator={false}
            renderItem={categoryItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Categories;
