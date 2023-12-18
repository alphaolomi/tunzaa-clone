import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import Colors from "../constants/Colors";

const MyButton = ({ onPress, title, submiting }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        disabled={submiting}
        style={{
          backgroundColor: submiting ? Colors.gray : Colors.primaryColor,
        }}
        className="py-3 px-6 rounded-full justify-center items-center"
      >
        {submiting && <ActivityIndicator size="small" color="#fff" />}
        {!submiting && (
          <Text className=" text-sm font-semibold text-white">{title}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default MyButton;
