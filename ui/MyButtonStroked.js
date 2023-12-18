import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../constants/Colors";

const MyButtonStroked = ({ onPress, title }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={{ borderWidth: 1, borderColor: Colors.primaryColor }}
        className="py-3 px-6 rounded-full justify-center items-center"
      >
        <Text
          style={{ color: Colors.primaryColor }}
          className=" text-sm font-semibold text-white"
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyButtonStroked;
