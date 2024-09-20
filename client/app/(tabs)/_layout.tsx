import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import { checkJWTToken } from "@/redux/slices/authSlice";
import LoginSignupModal from "@/components/modals/login-signup";

const RootLayout = () => {
  const { isVerified, skipFornow } = useSelector(
    (state: { auth: { isVerified: boolean, skipFornow: boolean } }) => state.auth
  );
  console.log("is verifdies in index", isVerified);
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(checkJWTToken());
  });
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
          }}
        />
        <Tabs.Screen
          name="wishlist"
          options={{
            tabBarIcon: () => (
              <AntDesign name="hearto" size={24} color="black" />
            ),
          }}
        />
        <Tabs.Screen
          name="offer"
          options={{
            tabBarIcon: () => (
              <Ionicons name="ticket-outline" size={24} color="black" />
            ),
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            tabBarIcon: () => (
              <Ionicons name="cart-outline" size={24} color="black" />
            ),
          }}
        />
        <Tabs.Screen
          name="my-order"
          options={{
            tabBarIcon: () => (
              <FontAwesome name="cube" size={24} color="black" />
            ),
          }}
        />
      </Tabs>
      {!isVerified && !skipFornow && <LoginSignupModal />}
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
