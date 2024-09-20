import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/slices/authSlice";

const AccountPage = () => {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const dispatch = useDispatch<any>();
  return (
    <View>
      <TouchableOpacity onPress={() => dispatch(logout())}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccountPage;
