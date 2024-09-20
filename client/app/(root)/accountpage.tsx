import { TouchableOpacity, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/slices/authSlice";

const AccountPage = () => {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const dispatch = useDispatch<any>();
  return (
    <View>
      <TouchableOpacity onPress={() => dispatch(logout())}>
        Logout
      </TouchableOpacity>
    </View>
  );
};

export default AccountPage;
