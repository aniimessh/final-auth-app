import { StyleSheet } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { HeartIcon, HomeIcon, OfferIcon, OrderBox } from "@/constants/Icon";
import LoginSignupModal from "@/components/modals/login-signup";
import { Provider } from "react-redux";
import store from "@/redux/store";

const RootLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: () => <HomeIcon />,
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          tabBarIcon: () => <HeartIcon />,
        }}
      />
      <Tabs.Screen name="offer" options={{ tabBarIcon: () => <OfferIcon /> }} />
      <Tabs.Screen name="cart" />
      <Tabs.Screen
        name="my-order"
        options={{ tabBarIcon: () => <OrderBox /> }}
      />
    </Tabs>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
